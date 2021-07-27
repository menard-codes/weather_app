import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherCard from './components/WeatherCard';

import FilterDramaIcon from '@material-ui/icons/FilterDrama';

import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createTheme } from '@material-ui/core';
import './App.css';


function App() {
  const [input, setInput] = useState('');

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

  return (
    <div className="container">
      <ThemeProvider theme={style}>
        <form className="form">
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
        {/* EXAMPLE */}
        <WeatherCard
          location="Amadeo, PH"
          iconLink="http://openweathermap.org/img/w/04d.png"
          weather="Clouds"
          description="broken clouds"
          temperature="28.8"
        />
        {/* EXAMPLE */}
        </ThemeProvider>
    </div>
  );
}

export default App;
