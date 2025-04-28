import React from "react";

export default function ForecastCard({ date, tempDay, tempNight, icon, description }) {
  console.log("ForecastCard", date, tempDay, tempNight, icon, description);
  return (
    <div className="col">
      <div className="row">
        <div className="col-12">{date}</div>
        <div className="col-12 weather-icon">
          <img
            src={`/static/img/${icon}.png`}
            alt={description}
            width="40px"
          />
        </div>
        <div className="col-12">
          <span className="day-temp">{tempDay}°/</span>
          <span className="night-temp">{tempNight}°</span>
        </div>
      </div>
    </div>
  );
}