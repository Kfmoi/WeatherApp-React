import React from "react";
import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">City</p>
          <p className="desc">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/sunny.png" />
      </div>

      <div className="bottom">
        <p className="temp">25&deg;C</p>
        <div className="details">
          <div className="row">
            <span className="label top">Details</span>
          </div>
          <div className="row">
            <span className="label">Feels Like</span>
            <span className="value">22&deg;C</span>
          </div>
          <div className="row">
            <span className="label">Wind</span>
            <span className="value">2 km/h</span>
          </div>
          <div className="row">
            <span className="label">Humidity</span>
            <span className="value">15%</span>
          </div>
          <div className="row">
            <span className="label">Pressure</span>
            <span className="value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
