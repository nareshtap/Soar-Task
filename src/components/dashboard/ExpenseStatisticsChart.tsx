import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

interface ExpenseStatisticsData {
    category: string;
    amount: number;
}

interface ExpenseStatisticsDataProps {
    data: ExpenseStatisticsData[];
}

const ExpenseStatisticsChart: React.FC<ExpenseStatisticsDataProps> = React.memo(({ data: expenseStatistics }) => {


    const chartData = useMemo(() => ({
        labels: expenseStatistics.map((item) => item.category),
        datasets: [
            {
                label: "Expenses",
                data: expenseStatistics.map((item) => item.amount),
                backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#F4A261", "#2D9CDB"],
            },
        ],
    }), [expenseStatistics]);

    const options = useMemo(() => ({
        responsive: true,
    }), []);

    return (
        <div className="w-full bg-white rounded-3xl p-[18px] lg:p-6 h-full">
            <Pie data={chartData} options={options} />
        </div>
    );
});

export default ExpenseStatisticsChart;
