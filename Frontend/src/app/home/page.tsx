import React from 'react';
import StatusCard, { CardData } from '../components/Dashboard/StatusCard';

const Page: React.FC = () => {
  // Dummy data for cards
  const cardsData: CardData[] = [
    {
      title: 'Instagram',
      description: '20,987 Followers',
      actions: ['glee', 'download']
    },
    {
      title: 'Facebook',
      description: '20,987 Followers',
      actions: ['view', 'save']
    },
    {
      title: 'LinkedIn',
      description: '20,987 Followers',
      actions: ['like', 'share']
    },
    {
      title: 'Twitter',
      description: '20,987 Followers',
      actions: ['comment', 'edit']
    }
  ];

  return (
    <div className='bg-white min-h-screen m-2 p-2 text-black'>
      <br />
      <div className='flex flex-wrap justify-center items-center gap-6 '>
        {cardsData.map((data, index) => (
          <StatusCard key={index} title={data.title} description={data.description} actions={data.actions} />
        ))}
      </div>
    </div>
  );
};

export default Page;
