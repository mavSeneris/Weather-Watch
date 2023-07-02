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
      {/* <h1>Weather Watch</h1> */}
      <Day />
      <main>
        <Outlet context={{ city }} />
        <div className="form-wrapper">
          <Header />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter a city..."
              value={city}
              name="city"
            />
            <button className="form-button">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className="search-icon" d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
              </svg>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
