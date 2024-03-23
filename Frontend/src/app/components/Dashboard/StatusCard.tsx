import React from 'react';

export interface CardData {
  title: string;
  description: string;
  actions: string[];
}

const StatusCard: React.FC<CardData> = ({ title, description, actions }) => {
  return (
    <div className="w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
      <p className="text-lg font-bold font-sans">{title}</p>
      <div className="py-3">
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="flex justify-between">
        <svg
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <div className="text-sm flex gap-2">
          {actions.map((action, index) => (
            <button key={index} className="bg-slate-200 px-2 rounded-xl hover:bg-slate-400 transition-colors ease-in-out">
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
