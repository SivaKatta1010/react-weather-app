import React, { useState } from "react";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import Precipitation from "./Precipitation";
import { getWeatherIcon } from "../utils/helper";
import TabNavigation from "./includes/TabNavigation";
import { format } from "date-fns";

export default function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const { temp, conditions, icon, address } = weather.current;
  const { tempmax, tempmin } = weather.temperature;

  const [activeTab, setActiveTab] = useState("hourly");

  const renderContent = () => {
    switch (activeTab) {
      case "hourly":
        return <HourlyForecast hourlyWeather={weather.hourly} />;
      case "daily":
        return <DailyForecast dailyWeather={weather.days} />;
      case "precipitation":
        return <Precipitation precipitationData={weather.current} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center mt-10">
      <div className="flex flex-col items-center max-w-5xl w-full bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl p-10 text-black shadow-lg mt-10">
        <div className="flex justify-between items-center w-full mb-6">
          <div>
            <h2 className="text-6xl font-bold">{weather.city}</h2>
            <p className="text-2xl mt-2">
              {format(new Date(), "MMMM d, yyyy")}
            </p>
            <div className="flex-col items-center mt-4">
              {getWeatherIcon(icon)}
              <p className="text-3xl font-semibold ml-4">
                {conditions}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-right">
              <h3 className="text-9xl font-thin text-black">{temp.toFixed(1)}°F</h3>
              <p className="text-4xl mt-2 text-black">
                <span className="text-orange-400">{tempmax.toFixed(1)}°F</span>
                 {" "}/{" "}
                <span className="text-blue-400">
                  {tempmin.toFixed(1)}°F
                </span>
              </p>
            </div>
          </div>
        </div>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-4 w-full">{renderContent()}</div>
      </div>
    </div>
  );
}
