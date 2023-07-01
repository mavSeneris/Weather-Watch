import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Today() {
  const [weatherData, setWeatherData] = useState(null);
  const { city } = useOutletContext();

  console.log(city);

  useEffect(() => {
    fetchWeatherData(city ? city : "pook");
  }, []);

  const fetchWeatherData = async (location) => {
    try {
      const apiKey = "74b102f2976c56f90984b6ccb90b1802";
      const units = "metric";
      const params = `q=${location}&units=${units}&appid=${apiKey}`;
      const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;

      const response = await fetch(url);
      const jsonData = await response.json();

      setWeatherData(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  if (!weatherData) {
    return <div className="site-wrapper">Loading...</div>;
  }

  console.log(weatherData);

  return (
    <section>
      <div className="weather-data">
        <h1>
          {weatherData.name}, {weatherData.sys.country}
        </h1>
        <small>Min: {Math.ceil(weatherData.main.temp_min)}°C</small>
        <small>Min: {Math.ceil(weatherData.main.temp_max)}°C</small>
        <span>Feels like: {Math.ceil(weatherData.main.feels_like)}°C</span>
        <div className="weather-data__main_info">
          <h2 className="weather-data__celcius">
            {Math.ceil(weatherData.main.temp)}
            <span className="weather-data__temp-unit">°C</span>
          </h2>
          <h3>{weatherData.weather[0].description}</h3>
        </div>
      </div>
    </section>
  );
}
