### Weather App - README

---

### Introduction

The **Weather App** allows users to view the current weather, hourly forecast, and 5-day forecast for any city worldwide. Built with Next.js, it features real-time weather data, dynamic background images, and information about the Product Manager Accelerator program.

### Features

- **Current Weather**: Displays temperature, conditions, and weather icons.
- **Hourly Forecast**: 6-hour forecast starting from the current hour.
- **5-Day Forecast**: Temperature highs/lows and precipitation chances.
- **Info Section**: Details about the Product Manager Accelerator program.
- **Responsive Design**: Optimized for all devices.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the App**:
   ```bash
   npm run dev
   ```
4. **Access**: Visit `http://localhost:3000` in your browser.

### Usage

- **Search for a City**: Enter a city name and view weather data.
- **View Info**: Click the "Info" button at the bottom for details about the Product Manager Accelerator.

### Project Structure

- **Components**: SearchBar, WeatherDisplay, HourlyForecast, DailyForecast, Precipitation, TabNavigation
- **API Integration**: Fetches current, hourly, and daily weather data.