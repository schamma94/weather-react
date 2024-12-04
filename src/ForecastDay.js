import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}°`;
  }
  function minTemperature() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="forecast">
      <div className="forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        width={40}
        height={40}
      />
      <div className="forecast-temperatures">
        L: {""}
        <span className="forecast-min-temp">{minTemperature()}</span>{" "}
        <span>H:</span>
        <span className="forecast-max-temp">{maxTemperature()}</span>
      </div>
    </div>
  );
}
