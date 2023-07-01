import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [city, setCity] = useState("");
  const [date, setDate] = useState(new Date());
  const [key, setKey] = useState(0); // Initialize a key state

  function handleChange(event) {
    const { value } = event.target;
    setCity(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Update the key value to trigger a rerender
    setKey((prevKey) => prevKey + 1); 
  }

  function formatdate(date) {
    const days = [
      "Sunday", "Monday",
      "Tuesday", "Wednesday",
      "Thursday", "Friday",
      "Saturday"
    ];
    const months = [
      "January", "February",
      "March", "April",
      "May", "June",
      "July", "August",
      "September", "October",
      "November", "December"
    ];

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  }

  return (
    <div className="site-wrapper" key={key}>
      <h1>Weather Wise</h1>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter a city..."
            value={city}
            name="city"
          />
          <button>Get Weather</button>
        </form>
      </div>
      <span className="header-date">
        {formatdate(date)}
      </span>
      <main>
        <Outlet context={{ city }} />
      </main>
    </div>
  );
}
