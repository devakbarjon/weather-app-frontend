import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastList from "./components/ForecastList";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap

export default function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      let response;
      try {
        if (!city) {
          const res = await fetch('https://api.ipify.org?format=json');
          const data = await res.json();
          response = await fetch(`http://localhost:8000/api/v1/weather/forecast?ip_address=${data.ip}`);
        } else {
          response = await fetch(`http://localhost:8000/api/v1/weather/forecast?city=${city}`);
        }

        if (response.status !== 200) {
          alert("City not found. Please try again.");
          console.error("City not found:", response.status, response.detail);
          return
        }
        const data = await response.json();
        if (data.error) {
          alert(data.error);
          return;
        }
        setForecast(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (loading) return <div>Loading...</div>;
  if (!forecast) return <div>No data available</div>;

  return (
    <div className="outer">
      <div className="middle">
        <div className="inner">
          <div className="container weather-app">
            <SearchBar setCity={setCity} />
            <CurrentWeather city={forecast.city} current={forecast.daily[0]} />
            <ForecastList forecast={forecast.daily.slice(1)} />
          </div>
          <footer>Developed by <a href="http://www.devakbar.blog">Akbar</a></footer>
        </div>
      </div>
    </div>
  );
}