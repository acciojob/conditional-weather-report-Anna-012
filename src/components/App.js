import React, { useState, useEffect } from "react";
// Removed the import of 'App.css' since it seems missing
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState({ temperature: 25, conditions: "Sunny" });

  useEffect(() => {
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;
