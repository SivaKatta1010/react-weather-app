import {
  WiSnow,
  WiRain,
  WiFog,
  WiStrongWind,
  WiCloudy,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDaySunny,
  WiNightClear,
} from "react-icons/wi";

export const getWeatherIcon = (weatherState) => {
  switch (weatherState) {
    case "Clear":
      return <WiDaySunny className="text-yellow-500 text-9xl" />;
    case "Clouds":
    case "Partly Cloudy":
      return <WiCloudy className="text-gray-500 text-9xl" />;
    case "partly-cloudy-day":
      return <WiDayCloudy className="text-gray-500 text-9xl" />;
    case "partly-cloudy-night":
      return <WiNightAltCloudy className="text-gray-500 text-9xl" />;
    case "clear-night":
      return <WiNightClear className="text-gray-500 text-9xl" />;
    case "clear-day":
      return <WiDaySunny className="text-gray-500 text-9xl" />;
    case "wind":
      return <WiStrongWind className="text-gray-500 text-9xl" />;
    case "rain":
    case "showers":
      return <WiRain className="text-blue-500 text-9xl" />;
    case "fog":
      return <WiFog className="text-gray-500 text-9xl" />;
    case "snow":
      return <WiSnow className="text-blue-300 text-9xl" />;
    case "thunderstorm":
      return <WiThunderstorm className="text-purple-500 text-9xl" />;
    default:
      return <WiDaySunny className="text-gray-500 text-9xl" />;
  }
};

export const getBackgroundImage = (weatherState) => {
  switch (weatherState) {
    case "clear-day":
      return "url(/images/clear-sky.jpg)";
    case "clear-night":
      return "url(/images/clear-night.jpg)";
    case "cloudy":
    case "partly-cloudy-day":
      return "url(/images/cloudy.jpg)";
    case "partly-cloudy-night":
      return "url(/images/cloudy-night.jpg)";
    case "rain":
    case "showers":
      return "url(/images/rain.jpg)";
    case "snow":
      return "url(/images/snow.jpg)";
    case "thunderstorm":
      return "url(/images/thunderstorm.jpg)";
    default:
      return "url(/images/default.jpg)";
  }
};

export const getWeatherIconSmall = (icon) => {
    switch (icon) {
      case 'clear-day':
        return <WiDaySunny className="text-yellow-500 text-4xl" />;
      case 'clear-night':
        return <WiDaySunny className="text-blue-500 text-4xl" />;
      case 'partly-cloudy-day':
      case 'partly-cloudy-night':
      case 'cloudy':
        return <WiCloudy className="text-gray-500 text-4xl" />;
      case 'rain':
        return <WiRain className="text-blue-500 text-4xl" />;
      case 'snow':
        return <WiSnow className="text-blue-300 text-4xl" />;
      case 'thunderstorm':
        return <WiThunderstorm className="text-purple-500 text-4xl" />;
      default:
        return <WiCloudy className="text-gray-500 text-4xl" />;
    }
  };
