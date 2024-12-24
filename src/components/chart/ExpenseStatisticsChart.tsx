import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface PieChartProps {
    data: {
        category: string;
        amount: number;
    }[];
    colors: string[];
}

const ExpenseStatisticsChart: React.FC<PieChartProps> = ({ data, colors }) => {
    const chartData = data.map((item, index) => ({
        name: item.category,
        y: item.amount,
        color: colors[index],
        sliced: true,
    }));

    const options = {
        chart: {
            type: 'pie',
        },
        title: {
            text: '',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b><br>{point.name}', // Display percentage and name on hover
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                },
            },
        },
        series: [
            {
                name: 'Expenses',
                data: chartData,
                colorByPoint: true,
            },
        ],
        credits: {
            enabled: false,
        },
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default ExpenseStatisticsChart;
