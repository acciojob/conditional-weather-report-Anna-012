import React, { useState, useEffect } from "react";
import './App.css';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  // Initialize weather data with default values
  const [weatherData, setWeatherData] = useState({ temperature: 25, conditions: "Sunny" });

  // Optional: you can simulate data fetching and updating the weather data here
  useEffect(() => {
    // This would simulate the fetching and setting of new weather data
    // For this example, we're using static weather data
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;
