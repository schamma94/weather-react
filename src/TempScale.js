import React, { useState } from "react";
import "./Weather.css";

export default function TempScale(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  return (
    <div className="TempScale">
      <span className="temperature">
        <a
          href="/"
          onClick={showCelsius}
          className={`celsius ${props.unit === "celsius" ? "active" : ""}`}
        >
          °C {""}
        </a>
        |
        <a
          href="/"
          onClick={showFahrenheit}
          className={`fahrenheit ${
            props.unit === "fahrenheit" ? "active" : ""
          }`}
        >
          °F
        </a>
      </span>
    </div>
  );
}
