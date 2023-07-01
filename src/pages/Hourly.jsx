import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Hourly() {
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
      const count = 12;
      const params = `q=${location}&units=${units}&cnt=${count}&appid=${apiKey}`;
      const url = `https://api.openweathermap.org/data/2.5/forecast?${params}`;

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

  const hourlyData = weatherData.list.map((data) => (
    <div
      style={{
        width: "30vh",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: "10px",
      }}
      key={data.dt}
    >
      <p>{data.dt_txt.slice(10, -3)}</p>
      <span>{Math.ceil(data.main.temp)}°C</span>
      <span>{data.weather.map(item => item.description)}</span>
    </div>
  ));

  console.log(weatherData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>
        {weatherData.city.name}, {weatherData.city.country}{" "}
      </h1>
      <div
        style={{ display: "flex", gap: "10px" }}
        className="weather-data__hourly"
      >
        {hourlyData}
      </div>
    </div>
  );
}
