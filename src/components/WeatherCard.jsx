import React from 'react';
import './WeatherCard.css';


function WeatherCard({ location, iconLink, weather, description, temperature }) {
  return (
    <section className="cardContainer">
      <div className="card">
        <header id="locationCont">
          <h1>{location}</h1>
        </header>
        <div id="imageCont">
          <img src={iconLink} alt="weather icon" />
        </div>
        <div id="weatherCont">
          <h2>{weather}</h2>
          <p id="description">{description}</p>
        </div>
        <div id="tempCont">
          <h2>{temperature}&deg;C</h2>
        </div>
      </div>
    </section>
  )
}

export default WeatherCard
