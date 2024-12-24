import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SeriesColumnOptions } from "highcharts";

interface ChartData {
    day: string;
    deposit: number;
    withdrawal: number;
}

interface ColumnChartProps {
    data: ChartData[];
}

const WeeklyActivityChart: React.FC<ColumnChartProps> = ({ data }) => {
    const categories = data.map((item) => item.day);
    const depositData = data.map((item) => item.deposit);
    const withdrawalData = data.map((item) => item.withdrawal);

    const options: Highcharts.Options = {
        chart: {
            type: "column",
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: categories,
            crosshair: true,
            labels: {
                style: {
                    color: '#718EBF',
                },
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
            labels: {
                style: {
                    color: '#718EBF',
                },
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: "</table>",
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "top",
            itemStyle: {
                fontWeight: "bold",
            },
        },
        credits: {
            enabled: false
        },
        series: [
            {
                type: "column",
                name: "Deposit",
                data: depositData,
                color: "#1E90FF",
            } as SeriesColumnOptions,
            {
                type: "column",
                name: "Withdrawal",
                data: withdrawalData,
                color: "#000000",
            } as SeriesColumnOptions,
        ],
    };

    return <div className="p-4 md:py-7 md:px-8 rounded-lg md:rounded-3xl bg-white overflow-hidden"><HighchartsReact highcharts={Highcharts} options={options} /></div>;
};

export default WeeklyActivityChart;