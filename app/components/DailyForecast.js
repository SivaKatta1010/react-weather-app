// components/DailyForecast.js
import React from 'react';
import { format } from 'date-fns';
import { getWeatherIconSmall } from '../utils/helper';

export default function DailyForecast({ dailyWeather }) {

  return (
    <div className="w-full p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl text-black shadow-lg">
      <h2 className="text-3xl font-bold m-6 text-center">5-Day Forecast</h2>
      <div className="flex justify-around">
        {dailyWeather.slice(0, 5).map((day, index) => {
          const date = new Date();
          date.setDate(date.getDate() + index); 

          const iconElement = getWeatherIconSmall(day.icon);

          return (
            <div key={day.datetime} className="text-center bg-opacity-50 rounded-lg p-4 m-2">
              <p className="text-lg font-semibold">{format(date, 'MMM d')}</p>
              <div className="flex justify-center items-center my-2">
                {iconElement}
              </div>
              <p className="text-2xl my-2">{day.tempmax.toFixed(1)}°F / {day.tempmin.toFixed(1)}°F</p>
              <p className="text-lg">Precip: {day.precip.toFixed(2)} mm</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
