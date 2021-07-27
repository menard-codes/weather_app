import React from 'react';
import './WeatherCard.css';


function WeatherCard({ data }) {
  const { location, iconLink, weather, description, temperature } = data;
  if (Object.keys(data).length > 0) {
    return (
      <section className="cardContainer">
        <div className="card">
          <header id="locationCont">
            <h1>{location}</h1>
          </header>
          <div>
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
  } else {
    return (
      <section className="cardContainer">
        <div className="card">
          <h2>Data Goes Here</h2>
        </div>
      </section>
    )
  }
}

export default WeatherCard
