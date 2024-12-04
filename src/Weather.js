import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import TempScale from "./TempScale";
import WeatherForecast from "./WeatherForecast";
import "./Search.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    /* console.log(response.data); */
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coordinates,
      icon: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    const apiKey = "7c4o751d73aaefa4bb6bct819c760c00";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-5">
          <div className="current-temp-box">
            <div className="d-flex">
              <h1 className="current-degrees">
                {Math.round(weatherData.temperature)}°
              </h1>
              <img
                className="current-icon"
                src={weatherData.icon}
                alt={weatherData.description}
              />
            </div>
            <div className="current-weather-desc">
              {weatherData.description}
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <TempScale celsius={weatherData.temperature} />
          </div>
        </div>

        <div className="col-6">
          <form className="search-bar" onSubmit={handleSubmit}>
            <div className="d-flex">
              <input
                type="search"
                className="form-control"
                placeholder="Search city.."
                autoFocus
                autoComplete="off"
                onChange={handleCityChange}
              />
              <button type="submit" className="submit-button">
                🔍
              </button>
              <button type="submit" className="current-button">
                Current
              </button>
            </div>
          </form>
          <div className="d-flex">
            <FontAwesomeIcon icon={faLocationDot} className="pinpoint-icon" />
            <h1 className="city">{weatherData.city}</h1>
          </div>
          <div>
            <em className="last-updated">Last updated:</em>
          </div>
          <span className="updated-date">
            <FormattedDate date={weatherData.date} />
          </span>
        </div>
        <div className="d-flex w-50 justify-content-between mb-4"></div>
        <div className="d-flex w-25 justify-content-between">
          <div className="wind-section">
            <p className="wind">Wind</p>
            <span className="wind-speed">{Math.round(weatherData.wind)}</span>
            km/h
          </div>
          <div className="humidity-section">
            <p className="humidity">Humidity</p>
            <span className="humidity-number">{weatherData.humidity}</span>%
          </div>
        </div>
        <p className="forecast-title">Weekly Forecast</p>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
