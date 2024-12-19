import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../store/slices/dashboardSlice';
import { RootState, AppDispatch } from '../../store';
import ExpenseStatisticsChart from '../../components/dashboard/ExpenseStatisticsChart';
import BalanceHistoryChart from '../../components/dashboard/BalanceHistoryChart';
import WeeklyActivityChart from '../../components/dashboard/WeeklyActivityChart';

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

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <h2 className="text-lg font-semibold mb-2">Balance History</h2>
                    <BalanceHistoryChart data={memoizedState?.balanceHistory} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Weekly Activity</h2>
                    <WeeklyActivityChart data={memoizedState?.weeklyActivity} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Expense Statistics</h2>
                    <ExpenseStatisticsChart data={memoizedState?.expenseStatistics} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
