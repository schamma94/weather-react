import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  function displayWeather(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = `0efb4fc16a9ed98dc0b3aafd8491d6ad`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="yellow"
      size={80}
      animate={true}
    />
  );
}
