import React from "react";

export default function CurrentWeather({ city, current }) {
  const weather = current.weather[0];

  return (
    <div className="row current-location">
      <div className="col current-city" id="current-city">
        <div className="search-city">
          <span className="city">{city}</span>
          <span className="current-weather">
            <img src={`static/img/${weather.icon}.png`} alt={weather.description} width="30px" />
          </span>
        </div>
        <div>
          <span className="temp">{Math.round(current.temperature_max)}°</span>
          <span className="units"> °C</span>
        </div>
        <div className="current-date">
          <span className="day">{new Date(current.time).toLocaleDateString("en-US", { weekday: "long" })}</span>
          <span className="time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      <div className="col-4 current-location-details">
        <div className="col-12">
          Precipitation: <span className="precipitation">{current.precipitation}%</span>
        </div>
        <div className="col-12">
          Humidity: <span className="humidity">{current.humidity}%</span>
        </div>
        <div className="col-12">
          Wind: <span className="wind-speed">{current.wind_speed}km/h</span>
        </div>
      </div>
    </div>
  );
}
