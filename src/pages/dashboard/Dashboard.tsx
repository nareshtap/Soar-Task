import { Suspense, lazy, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../store/slices/dashboardSlice';
import { RootState, AppDispatch } from '../../store';
import Card from '../../components/dashboard/Card';
import RecentTransaction from '../../components/dashboard/RecentTransaction';
import QuickTransfer from '../../components/dashboard/QuickTransfer';
import { expenseStatisticsColors } from '../../utils/constant/constant';

const ExpenseStatisticsChart = lazy(() => import('../../components/chart/ExpenseStatisticsChart'));
const BalanceHistoryChart = lazy(() => import('../../components/chart/BalanceHistoryChart'));
const WeeklyActivityChart = lazy(() => import('../../components/chart/WeeklyActivityChart'));

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch();
    const state = useSelector((state: RootState) => state.dashboard);

    const memoizedState = useMemo(() => state, [state]);


    useEffect(() => {
        dispatch(fetchDashboardData());
    }, [dispatch]);

    if (memoizedState?.loading) {
        return <div>Loading...</div>;
    }


    const hasBalanceHistory = memoizedState?.balanceHistory && memoizedState?.balanceHistory.length > 0;
    const hasWeeklyActivity = memoizedState?.weeklyActivity && memoizedState?.weeklyActivity.length > 0;
    const hasExpenseStatistics = memoizedState?.expenseStatistics && memoizedState?.expenseStatistics.length > 0;

    return (
        <div className='flex flex-col gap-5 lg:gap-10 '>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-[30px] '>
                <div className='flex flex-col gap-[20px] col-span-1 lg:col-span-2   '>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-[#343C6A] text-[22px] leading-[28px] font-semibold'>My Cards</h5>
                        <h6 className='text-[#343C6A] text-base font-semibold cursor-pointer'>See All</h6>
                    </div>
                    <div className='flex gap-5 md:gap-[30px] overflow-auto'>
                        <Card balance='5756' cardHolder='Eddy Cusuma' validThru='12/22' cardNumber='3778 **** **** 1234' />
                        <Card balance='5756' cardHolder='Eddy Cusuma' validThru='12/22' cardNumber='3778 **** **** 1234' isWhite={true} />
                    </div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex justify-start items-center'>
                        <h5 className='text-[#343C6A] text-[22px] leading-[28px] font-semibold'>Recent Transaction</h5>
                    </div>
                    <RecentTransaction requestTransaction={memoizedState?.transactions} />
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-[30px]'>
                {/* <div className="flex flex-row w-full h-full gap-8 col-span-2"> */}
                {hasWeeklyActivity && (
                    <div className='w-full h-full flex flex-col  col-span-2 gap-[18px]'>
                        <h2 className="text-[22px] leading-7 font-semibold ">Weekly Activity</h2>
                        <Suspense fallback={<div>Loading chart...</div>}>
                            <WeeklyActivityChart data={memoizedState?.weeklyActivity} />
                        </Suspense>
                    </div>
                )}
                {hasExpenseStatistics && (
                    <div className='w-full h-full flex flex-col gap-[18px]'>
                        <h2 className="text-[22px] leading-7 font-semibold ">Expense Statistics</h2>
                        <Suspense fallback={<div>Loading chart...</div>}>
                            <ExpenseStatisticsChart data={memoizedState?.expenseStatistics} colors={expenseStatisticsColors} />
                        </Suspense>
                    </div>
                )}
                {/* </div>   */}

            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-[30px]'>
                <div className="w-full h-full flex flex-col gap-[18px]  ">
                    <h2 className="text-[22px] leading-7 font-semibold ">Quick Transfer</h2>
                    <QuickTransfer frequentTransfers={memoizedState?.frequentTransfers} />
                </div>
                {hasBalanceHistory && (

                    <div className="w-full h-full flex flex-col gap-[18px]">
                        <h2 className="text-lg font-semibold ">Balance History</h2>
                        <Suspense fallback={<div>Loading chart...</div>}>
                            <BalanceHistoryChart data={memoizedState?.balanceHistory} />
                        </Suspense>
                    </div>

                )}







                {!hasBalanceHistory && <p>No Balance History Data Available</p>}
                {!hasWeeklyActivity && <p>No Weekly Activity Data Available</p>}
                {!hasExpenseStatistics && <p>No Expense Statistics Data Available</p>}
            </div>

        </div >


    );
};

export default Dashboard;
