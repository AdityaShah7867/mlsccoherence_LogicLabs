'use client'
import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const LineChart: React.FC = () => {
    useEffect(() => {
        const options = {
            chart: {
                type: 'line',
                width: '800', // Width of the chart
                height: '500' // Height of the chart
            },
            series: [{
                name: 'Sales',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            }
        };

        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }, []);

    return (
        <div id="chart">
            <Chart
                options={{
                    chart: {
                        type: 'line',
                        width: '800', // Width of the chart
                        height: '500' // Height of the chart
                    },
                    series: [{
                        name: 'Sales',
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
                    }],
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
                    }
                }}
            />
        </div>
    );
}

export default LineChart;
