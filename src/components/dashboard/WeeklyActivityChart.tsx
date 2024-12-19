import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface WeeklyActivityData {
    day: string;
    deposit: number;
    withdrawal: number;
}

interface WeeklyActivityDataProps {
    data: WeeklyActivityData[];
}

const WeeklyActivityChart: React.FC<WeeklyActivityDataProps> = React.memo(({ data: weeklyActivity }) => {

  
    const chartData = useMemo(() => ({
        labels: weeklyActivity.map((item) => item.day),
        datasets: [
            {
                label: "Deposit",
                data: weeklyActivity.map((item) => item.deposit),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
            {
                label: "Withdrawal",
                data: weeklyActivity.map((item) => item.withdrawal),
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    }), [weeklyActivity]);

    const options = useMemo(() => ({
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    }), []);

    return (
        <div>
            <h2>Weekly Activity</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
});

export default WeeklyActivityChart;
