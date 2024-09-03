import React from 'react';

export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-around w-full border-b border-gray-300">
      <button
        className={`px-4 py-2 text-lg ${
          activeTab === 'hourly' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-800'
        }`}
        onClick={() => setActiveTab('hourly')}
      >
        Hourly
      </button>
      <button
        className={`px-4 py-2 text-lg ${
          activeTab === 'daily' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-800'
        }`}
        onClick={() => setActiveTab('daily')}
      >
        Daily
      </button>
      <button
        className={`px-4 py-2 text-lg ${
          activeTab === 'precipitation' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-800'
        }`}
        onClick={() => setActiveTab('precipitation')}
      >
        Precipitation
      </button>
    </div>
  );
}
