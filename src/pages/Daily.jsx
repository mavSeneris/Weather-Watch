import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DailyData from "../DailyData";

export default function Daily() {
  const { city } = useOutletContext();
  const [weatherData, setWeatherData] = useState(DailyData);

  console.log(weatherData);

  const dailyWeatherEls = weatherData.map((data) => (
    <div
      key={data.id}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <h3>{data.day}</h3>
      <p>max: {data.temp_max}C</p>
      <p>min: {data.temp_min}C</p>
      <span>{data.description}</span>
      <p>{data.rain}%</p>
    </div>
  ));

  return (
    <div>
      <h2>{city}</h2>
      {dailyWeatherEls}
    </div>
  );
}
