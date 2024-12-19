import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../store/slices/dashboardSlice';
import { RootState, AppDispatch } from '../../store';

const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch();
    const { cards, transactions, weeklyActivity, expenseStatistics, balanceHistory, loading } = useSelector(
        (state: RootState) => state.dashboard
    );

    useEffect(() => {
        dispatch(fetchDashboardData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>

        </div>
    );
};

export default Dashboard;
