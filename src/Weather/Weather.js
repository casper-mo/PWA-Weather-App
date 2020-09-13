import React from "react";
import "./Weather.css";
const Weather = ({ weather }) => {
  const imgUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const imgDesc = weather.weather[0].description;
  return (
    <div className="city">
      <h2 className="city-name">
        <span>{weather.name}</span>
        <sup>{weather.sys.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(weather.main.temp)}
        <sup>&deg;C</sup>
      </div>
      <div className="info">
        <img src={imgUrl} alt={imgDesc} className="city-icon" />
        <p>{imgDesc}</p>
      </div>
    </div>
  );
};

export default React.memo(Weather);
