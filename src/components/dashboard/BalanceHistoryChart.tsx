import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

interface BalanceData {
    month: string;
    balance: number;
}

interface BalanceHistoryChartProps {
    data: BalanceData[];
}

const BalanceHistoryChart: React.FC<BalanceHistoryChartProps> = React.memo(({ data }) => {
    const chartData = useMemo(() => ({
        labels: data.map(item => item.month),
        datasets: [
            {
                label: 'Balance Over Time',
                data: data.map(item => item.balance),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    }), [data]);

    const options = useMemo(() => ({
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Balance History (2024)',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    }), []);

    return (
        <div className="bg-white rounded-3xl p-[18px] lg:p-6 ">
            <Line data={chartData} options={options} />
        </div>
    );
});

export default BalanceHistoryChart;
