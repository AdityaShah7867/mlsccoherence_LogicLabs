'use client'
import React, { useEffect, useRef } from 'react';
import StatusCard, { CardData } from "../components/Dashboard/StatusCard";
import Calender from "../components/Calender/Calender";
import TodoList from "../components/Dashboard/Todo";
import Chart from 'chart.js/auto';
// import LineChart from '../components/Dashboard/LineChart';

const Page: React.FC = () => {
  // Dummy data for cards
  const cardsData: CardData[] = [
    {
      title: "Instagram",
      description: "20,987 Followers",
      actions: ["glee", "download"],
    },
    {
      title: "Facebook",
      description: "20,987 Followers",
      actions: ["view", "save"],
    },
    {
      title: "LinkedIn",
      description: "20,987 Followers",
      actions: ["like", "share"],
    },
    {
      title: "Twitter",
      description: "20,987 Followers",
      actions: ["comment", "edit"],
    },
  ];

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const canvas = chartRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Check if a Chart instance already exists
        if (canvas?.chart) {
          // If so, destroy the existing Chart instance
          canvas.chart.destroy();
        }
        // Initialize the new Chart instance
        canvas.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: cardsData.map(data => data.title),
            datasets: [{
              label: 'Followers',
              data: cardsData.map(data => parseFloat(data.description.replace(',', '').split(' ')[0])),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }, [cardsData]);


  

  return (
    <div className="bg-white min-h-screen m-2 p-2 text-black">
      <br />
      <div className="flex flex-wrap justify-center items-center gap-6 ">
        {cardsData.map((data, index) => (
          <StatusCard
            key={index}
            title={data.title}
            description={data.description}
            actions={data.actions}
          />
        ))}
      </div>

      <div className='flex flex-wrap justify-evenly items-center mt-16 gap-4'>
          <div className='min-h-96 min-w-96'>
          <canvas ref={chartRef}></canvas>   
          </div>
            {/* <LineChart /> */}
          <div className=''>
            <Calender />
          </div>
        </div>
    </div>
  );
};

export default Page;
