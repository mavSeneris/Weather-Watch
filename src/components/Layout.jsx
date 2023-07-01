import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Day from "./Day";

export default function Layout() {
  const [city, setCity] = useState("");
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

  return (
    <div className="site-wrapper" key={key}>
      <h1>Weather Watch</h1>
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
      <Day />
      <main>
        <Outlet context={{ city }} />
      </main>
    </div>
  );
}
