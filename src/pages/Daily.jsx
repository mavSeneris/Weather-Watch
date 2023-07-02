import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DailyData from "../DailyData";

export default function Daily() {
  const { city } = useOutletContext();
  const [weatherData, setWeatherData] = useState(DailyData);

  const dailyWeatherEls = weatherData.map((data) => (
    <div
      key={data.id}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h3>{data.day}</h3>
      <span>{data.description}</span>
      <p>max: {data.temp_max}C</p>
      <p>min: {data.temp_min}C</p>
      <p>Chances of Rain:  {data.rain}%</p>
    </div>
  ));

  return (
    <div>
      <h2>{city ? city.slice(0, 1).toUpperCase() + city.slice(1) : "Pook"}</h2>
      {dailyWeatherEls}
    </div>
  );
}
