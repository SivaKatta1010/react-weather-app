// pages/api/weather.js
import axios from 'axios';
import { WEATHER_API_KEY } from './constants';

export default async function handler(req, res) {
  const { city } = req.query;
  const API_KEY = WEATHER_API_KEY;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${API_KEY}&include=current&elements=temp,tempmax,tempmin,windspeed,windgust,snow,snowdepth,winddir,pressure,cloudcover,visibility,solarradiation,solarenergy,uvindex,sunrise,sunset,moonphase,conditions,description,icon,precip`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching current weather data' });
  }
}

export default async function handlerHourly(req, res) {
  const { city } = req.query;
  const API_KEY = WEATHER_API_KEY;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=${API_KEY}&include=hours&elements=datetime,temp,tempmax,tempmin,windspeed,precip`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching hourly weather data' });
  }
}

export default async function handlerDaily(req, res) {
  const { city } = req.query;
  const API_KEY = WEATHER_API_KEY; 
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today/next5days?key=${API_KEY}&include=days&elements=datetime,tempmax,tempmin,precip`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching daily weather data' });
  }
}
