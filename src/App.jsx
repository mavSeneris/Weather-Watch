import React, { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const apiKey = '74b102f2976c56f90984b6ccb90b1802';
      const city = 'London';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const response = await fetch(url);
      const jsonData = await response.json();

      setWeatherData(jsonData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  console.log(weatherData)

  return (
    <div>
      {/* Render the weather data */}
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} K</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default App;
