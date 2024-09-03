// components/SearchBar.js
import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-gray-300 rounded-l bg-white bg-opacity-70 placeholder-gray-300 text-black"
        placeholder="Enter city name"
        style={{ backdropFilter: 'blur(10px)' }}
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 bg-opacity-70 text-white rounded-r">
        Search
      </button>
    </form>
  );
}
