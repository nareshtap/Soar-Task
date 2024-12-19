import { Suspense, lazy, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../store/slices/dashboardSlice';
import { RootState, AppDispatch } from '../../store';
import Card from '../../components/dashboard/Card';
import RecentTransaction from '../../components/dashboard/RecentTransaction';
import QuickTransfer from '../../components/dashboard/QuickTransfer';

const ExpenseStatisticsChart = lazy(() => import('../../components/dashboard/ExpenseStatisticsChart'));
const BalanceHistoryChart = lazy(() => import('../../components/dashboard/BalanceHistoryChart'));
const WeeklyActivityChart = lazy(() => import('../../components/dashboard/WeeklyActivityChart'));

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
        <div>
            <h1>Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hasBalanceHistory && (
                    <div className="col-span-2">
                        <h2 className="text-lg font-semibold mb-2">Balance History</h2>
                        <Suspense fallback={<div>Loading chart...</div>}>
                            <BalanceHistoryChart data={memoizedState?.balanceHistory} />
                        </Suspense>
                    </div>
                )}

                {hasWeeklyActivity && (
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Weekly Activity</h2>
                        <Suspense fallback={<div>Loading chart...</div>}>
                            <WeeklyActivityChart data={memoizedState?.weeklyActivity} />
                        </Suspense>
                    </div>
                )}

                {hasExpenseStatistics && (
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Expense Statistics</h2>
                        <Suspense fallback={<div>Loading chart...</div>}>
                            <ExpenseStatisticsChart data={memoizedState?.expenseStatistics} />
                        </Suspense>
                    </div>
                )}
                <Card />
                <RecentTransaction />
                <QuickTransfer frequentTransfers={memoizedState?.frequentTransfers} />



                {!hasBalanceHistory && <p>No Balance History Data Available</p>}
                {!hasWeeklyActivity && <p>No Weekly Activity Data Available</p>}
                {!hasExpenseStatistics && <p>No Expense Statistics Data Available</p>}
            </div>
        </div>


    );
};

export default Dashboard;
