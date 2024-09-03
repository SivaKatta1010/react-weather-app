"use client";

// pages/index.js
import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import { getBackgroundImage } from "./utils/helper";
import { WEATHER_API_KEY } from "./utils/constants";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [icon, setIcon] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoToggle = () => {
    setShowInfo(!showInfo);
  };

  const fetchWeatherData = async (city) => {
    try {
      setError(null); // Reset error state

      const currentWeatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${WEATHER_API_KEY}&include=current&elements=temp,tempmax,tempmin,windspeed,windgust,snow,snowdepth,winddir,pressure,cloudcover,visibility,solarradiation,solarenergy,uvindex,sunrise,sunset,moonphase,conditions,description,icon,precip`;
      const hourlyWeatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${WEATHER_API_KEY}&include=hours&elements=datetime,temp,tempmax,tempmin,windspeed,precip,icon`;
      const dailyWeatherUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today/next5days?key=${WEATHER_API_KEY}&include=days&elements=datetime,tempmax,tempmin,precip,icon`;

      const currentResponse = await fetch(currentWeatherUrl);
      const hourlyResponse = await fetch(hourlyWeatherUrl);
      const dailyResponse = await fetch(dailyWeatherUrl);

      if (currentResponse.ok && hourlyResponse.ok && dailyResponse.ok) {
        const currentData = await currentResponse.json();
        const hourlyData = await hourlyResponse.json();
        const dailyData = await dailyResponse.json();

        setWeatherData({
          current: currentData.currentConditions,
          hourly: hourlyData.days[0].hours,
          days: dailyData.days.slice(0, 5),
          temperature: dailyData.days[0],
          city: city,
        });
        setIcon(currentData.currentConditions.icon);
      } else {
        setError("Error fetching weather data.");
      }
    } catch (error) {
      setError("Error fetching weather data.");
    }
  };

  const handleSearch = (inputCity) => {
    setCity(inputCity);
    fetchWeatherData(inputCity);
  };

  return (
    <div
      className="min-h-screen flex flex-col text-black"
      style={{
        backgroundImage: getBackgroundImage(icon),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold text-center p-8">Weather App</h1>

        <SearchBar onSearch={handleSearch} />

        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {weatherData && <WeatherDisplay weather={weatherData} />}
      </div>
      <div className="w-full flex flex-col items-center mt-8 mb-8">
        <p className="text-lg font-bold">Developed by Siva Kumar Katta</p>

        <button
          onClick={handleInfoToggle}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Info
        </button>

        {showInfo && (
          <div className="mt-4 max-w-xl p-4 bg-white bg-opacity-70 text-black rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">About PM Accelerator</h2>
            <p>
              At Product Manager Accelerator, our mission is clear: to equip you with the knowledge, skills, and tools
              necessary to thrive in the world of product management.
            </p>
            <p className="mt-2">
              We believe that education is the great equalizer, and through our programs and resources, we aim to level
              the playing field for individuals from all backgrounds, ensuring that everyone has an equal opportunity
              to pursue a rewarding career in product management.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
