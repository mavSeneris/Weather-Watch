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
      const count = 5;
      const params = `q=${location}&units=${units}&cnt${count}&appid=${apiKey}`;
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

  const styles ={
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  }

  const hourlyData = weatherData.list.map((data) => (
    <div style={styles} key={data.dt}>
      <span>{data.dt_txt.slice(10,-3)}</span>
      <span>{Math.ceil(data.main.temp)}°C</span>
    </div>
  ));

  console.log(weatherData);
  return (
    <div>
      <h1>
        {weatherData.city.name}, {weatherData.city.country}{" "}
      </h1>
      <div style={styles} className="weather-data__hourly">{(hourlyData)}</div>
    </div>
  );
}
