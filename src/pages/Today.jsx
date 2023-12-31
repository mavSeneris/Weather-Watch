import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import titlizeString from "../utils/title";

export default function Today() {
  const [weatherData, setWeatherData] = useState(null);
  const { city } = useOutletContext();

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

  const description = titlizeString(weatherData.weather[0].description);
  const weatherIcon = weatherData.weather.map((data) => data.icon);

  console.log(weatherData.weather);

  return (
    <section>
      <div className="weather-data">
        <h2 className="weather-data__city">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <h3 className="weather-data__description">{description}</h3>
        <h3 className="weather-data__celcius">
          {Math.ceil(weatherData.main.temp)}°
        </h3>
        <span>Feels Like {Math.ceil(weatherData.main.feels_like)}°C</span>
        <div className="weather-data__weather_icon">
          {/* <img src="https://cdn-icons-png.flaticon.com/512/2096/2096091.png" /> */}
          <img className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          />
        </div>
        {/* <span>{weatherData.weather.map(data => data.icon)}</span> */}

        {/* <small>Min: {Math.ceil(weatherData.main.temp_min)}°C</small>
        <small>Max: {Math.ceil(weatherData.main.temp_max)}°C</small> */}
      </div>
    </section>
  );
}
