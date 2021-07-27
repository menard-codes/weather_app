import { useState } from 'react';

import axios from 'axios';
import 'dotenv/config'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherCard from './components/WeatherCard';

import FilterDramaIcon from '@material-ui/icons/FilterDrama';

import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createTheme } from '@material-ui/core';
import './App.css';


function App() {
  const [input, setInput] = useState('');
  const[weatherData, setWeatherData] = useState({});
  const [error, setError] = useState('');

  const style = createTheme({
    palette: {
      primary: {
        main: '#2E3A54'
      },
      secondary: {
        main: '#3054E6'
      }
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const generateWeatherUrl = cityName => `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    const generateIconUrl= iconId => `http://openweathermap.org/img/w/${iconId}.png`

    try {
      const data = await axios.get(generateWeatherUrl(input));
      const filteredData = {
        location: `${data.data.name}, ${data.data.sys.country}`,
        iconLink: generateIconUrl(data.data.weather[0].icon),
        weather: data.data.weather[0].main,
        description: data.data.weather[0].description,
        temperature: data.data.main.temp,
      };
      setWeatherData(filteredData);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="container">
      <ThemeProvider theme={style}>
        <form className="form" onSubmit={e => handleSubmit(e)}>
          <h1 style={{margin: '10px 0 -10px 0', textAlign: 'center', fontSize: '2.5rem'}}>Weather App</h1>
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            label="Enter Location"
            autoFocus={true}
          />
          <Button
            variant="contained"
            color="secondary"
            className="button"
            startIcon={<FilterDramaIcon />}
          >Get Weather</Button>
        </form>

        <WeatherCard
          data={weatherData}
        />

        {/* EXAMPLE */}
        {/* <WeatherCard
          location="Amadeo, PH"
          iconLink="http://openweathermap.org/img/w/04d.png"
          weather="Clouds"
          description="broken clouds"
          temperature="28.8"
        /> */}
        {/* EXAMPLE */}
        </ThemeProvider>
    </div>
  );
}

export default App;
