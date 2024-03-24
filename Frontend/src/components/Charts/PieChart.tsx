import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ data }) => {
  const options = {
    labels: ['Views', 'Likes', 'Comments'],
    chart: {
      width: 400, // Adjust the width of the chart
      height: 300, // Adjust the height of the chart
      fontFamily: 'Arial, sans-serif', // Set font family for better readability
      toolbar: {
        show: false, // Hide chart toolbar if not needed
      },
    },
    colors: ['#3C50E0', '#32C48D', '#FEB019'], // Set colors for better visibility
    legend: {
      show: true, // Show legend for better understanding of data
      position: 'bottom', // Position legend at the bottom for better layout
    },
    dataLabels: {
      enabled: true, // Enable data labels to display values on the chart
      style: {
        fontSize: '12px', // Adjust font size of data labels for better readability
      },
    },
  };

  const series = [Number(data.views), Number(data.likes), Number(data.comments)];
  console.log('series', series);



  return (
    <Chart options={options} series={series} type="pie" width={options.chart.width} height={options.chart.height} />
  );
};

export default PieChart;
