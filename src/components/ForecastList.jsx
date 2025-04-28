import React from "react";
import ForecastCard from "./ForecastCard";

export default function ForecastList({ forecast }) {
    console.log("ForecastList", forecast);
  return (
    <div className="container text-center five-days-forecast">
      <div className="row">
      {forecast.map((day, idx) => (
        <ForecastCard
            key={idx}
            date={new Date(day.time).toLocaleDateString("en-US", { weekday: "long" })}
            tempDay={day.temperature_max}
            tempNight={day.temperature_min}
            icon={day.weather[0]?.icon} // Assuming weather[0] contains the icon
            description={day.weather[0]?.description} // Assuming weather[0] contains the description
        />
))}
      </div>
    </div>
  );
}