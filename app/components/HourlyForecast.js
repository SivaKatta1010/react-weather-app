import React from "react";
import { getWeatherIconSmall } from "../utils/helper";

export default function HourlyForecast({ hourlyWeather }) {
  const currentHour = new Date().getHours();

  // Filtering next 6 hours from the current hour
  const nextSixHours = hourlyWeather.filter((hour) => {
    const hourString = hour.datetime.substring(0, 2); 
    const hourTime = parseInt(hourString, 10);
    return hourTime >= currentHour && hourTime < currentHour + 6;
  });

  // Falling back to next available hours
  const displayedHours =
    nextSixHours.length > 0 ? nextSixHours : hourlyWeather.slice(0, 6);

  return (
    <div className="w-full mt-10 p-4 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl text-black shadow-lg">
      <h2 className="text-3xl font-bold m-6 text-center">Hourly Forecast</h2>
      <div className="flex justify-around">
        {displayedHours.map((hour, index) => (
          <div
            key={index}
            className="text-center bg-opacity-50 rounded-lg p-4 m-2"
          >
            <p className="text-lg font-semibold">
              {hour.datetime.substring(0, 5)}
            </p>{" "}
            <div className="flex justify-center items-center my-2">
              {getWeatherIconSmall(hour.icon)}
            </div>
            <p className="text-xl mt-2">{hour.temp.toFixed(1)}°F</p>
            <p className="text-sm mt-1">Precip: {hour.precip.toFixed(2)} mm</p>
            <p className="text-sm mt-1">
              Wind: {hour.windspeed.toFixed(1)} mph
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
