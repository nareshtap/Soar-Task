import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface DataPoint {
    month: string;
    balance: number;
}

interface LineChartProps {
    data: DataPoint[];
}

const BalanceHistoryChart: React.FC<LineChartProps> = ({ data }) => {
    const months = data.map(item => item.month);
    const balances = data.map(item => item.balance);

    const options = {
        chart: {
            type: 'area',
        },
        title: {
            text: '',
            floating: false,
        },
        xAxis: {
            categories: months,
            gridLineWidth: 1,
            gridLineColor: '#ccc',
            gridLineDashStyle: 'Dash',
            labels: {
                style: {
                    color: '#718EBF',
                },
            },
        },
        yAxis: {
            title: {
                text: '',
            },
            gridLineWidth: 1,
            gridLineColor: '#ccc',
            gridLineDashStyle: 'Dash',
            labels: {
                style: {
                    color: '#718EBF',
                },
            },
        },
        legend: {
            enabled: false,
        },
        series: [
            {
                name: 'Balance',
                data: balances,
                color: '#1814F3',
                fillColor: 'rgba(24, 20, 243, 0.3)',
            },
        ],
        credits: {
            enabled: false,
        },
        tooltip: {
            shared: true,
            valueSuffix: ' USD',
        },
    };

    return (
        <div className=' rounded-lg md:rounded-3xl bg-white overflow-hidden p-4 md:p-8'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default BalanceHistoryChart;
