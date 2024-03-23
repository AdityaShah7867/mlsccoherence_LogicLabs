import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const VideoViewsChart = ({ videos }) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    xaxis: {
      categories: [],
      labels: {
        rotate: -90
      }
    },
    series: [{
      name: 'Views',
      data: []
    }]
  });

  useEffect(() => {
    const categories = videos?.map(video => video.title);
    const data = videos?.map(video => parseInt(video.views));

    setChartOptions(prevOptions => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: categories
      },
      series: [{
        name: 'Views',
        data: data
      }]
    }));
  }, [videos]);

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default VideoViewsChart;
