import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./Search.css";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({});
  const [info, setInfo] = useState(false);

  function displayWeather(response) {
    setInfo(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `0efb4fc16a9ed98dc0b3aafd8491d6ad`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        style={{ height: "25px", width: "190px" }}
        type="text"
        className="form-control"
        placeholder="Search city"
        onChange={updateCity}
        autoFocus
      />
      <button type="submit" className="submit-button">
        🔍
      </button>
      <button type="button" className="current-button">
        Current
      </button>
    </form>
  );

  if (info) {
    return (
      <div className="App">
        {form}
        <div className="Condition">
          <p className="cityName">
            📍 {""}
            {weather.city} {Math.round(weather.temperature)}°C
          </p>
          <em className="last-updated">Last updated:</em>
          <span className="date">Tuesday, 19 Nov, 4:00 PM</span>
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {Math.round(weather.wind)}km/h</p>
          <p>
            <img src={weather.icon} alt={weather.description} />
          </p>
          <a href="javascript:void(0)" class="celsius">
            °C
          </a>
          {""} | {""}
          <a href="javascript:void(0)" class="fahrenheit">
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
