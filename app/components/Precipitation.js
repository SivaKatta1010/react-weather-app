export default function Precipitation({ precipitationData }) {
  return (
    <div className="w-full p-8 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl text-black shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Current Precipitation Data</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <p className="text-lg font-medium">Precipitation</p>
          <p className="text-2xl font-bold">{(precipitationData.precip ?? 0).toFixed(2)} mm</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Snow</p>
          <p className="text-2xl font-bold">{(precipitationData.snow ?? 0).toFixed(2)} in</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Snow Depth</p>
          <p className="text-2xl font-bold">{(precipitationData.snowdepth ?? 0).toFixed(2)} in</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Wind Gust</p>
          <p className="text-2xl font-bold">{(precipitationData.windgust ?? 0).toFixed(1)} mph</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Wind Speed</p>
          <p className="text-2xl font-bold">{(precipitationData.windspeed ?? 0).toFixed(1)} mph</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Wind Direction</p>
          <p className="text-2xl font-bold">{(precipitationData.winddir ?? 0).toFixed(0)}°</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Pressure</p>
          <p className="text-2xl font-bold">{(precipitationData.pressure ?? 0).toFixed(1)} hPa</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Cloud Cover</p>
          <p className="text-2xl font-bold">{(precipitationData.cloudcover ?? 0).toFixed(1)}%</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Visibility</p>
          <p className="text-2xl font-bold">{(precipitationData.visibility ?? 0).toFixed(1)} miles</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Solar Radiation</p>
          <p className="text-2xl font-bold">{(precipitationData.solarradiation ?? 0).toFixed(1)} W/m²</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Solar Energy</p>
          <p className="text-2xl font-bold">{(precipitationData.solarenergy ?? 0).toFixed(2)} MJ/m²</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">UV Index</p>
          <p className="text-2xl font-bold">{(precipitationData.uvindex ?? 0).toFixed(1)}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Sunrise</p>
          <p className="text-2xl font-bold">{precipitationData.sunrise ?? 'N/A'}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-medium">Sunset</p>
          <p className="text-2xl font-bold">{precipitationData.sunset ?? 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}
