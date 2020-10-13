import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('brooklyn');
  const [city, setCity] = useState('Brooklyn')
  const [background, setBackground] = useState('');

  const [degrees, setDegrees] = useState('Fahrenheit');
  useEffect(() => {
    getInfo();
  }, [degrees])

  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const getInfo = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=e37f24ef6174dba03b645be482f88b30`)
      const data = await response.json();
      const temp = degrees === 'Fahrenheit' ? convertToFahrenheit(data.main.temp) : convertToCelsius(data.main.temp);
      properCapitalization();
      setTemp(temp);
      findImgURL(data);
      setDescription(data.weather[0].main);
      getBG(data);
    } catch {
      console.log('Data not found');
    }
  }

  const getBG = (data) => {
    let icon = data.weather[0].icon;
    if (icon === '01d' 
      ||icon === '01n'
      ||icon === '02d'
      ||icon === '02n') {
      setBackground('sunny');
    }
    if (icon === '03d'
    || icon === '03n'
    || icon === '04d'
    || icon === '04n') {
      setBackground('cloudy');
    }
    if (icon === '09d'
    || icon === '09n'
    || icon === '10d'
    || icon === '10n'
    || icon === '11d'
    || icon === '11n'
    || icon === '50d'
    || icon === '50n') {
      setBackground('rain');
    }
    if (icon === '13d' || icon === '13n') {
      setBackground('snow');
    }
  }

  const findImgURL = (data) => {
    let icon = data.weather[0].icon;
    console.log(icon);
    setImageURL(`http://openweathermap.org/img/wn/${icon}.png`);
  }

  const properCapitalization = () => {
    let newTerm = searchTerm.toLowerCase();
    let firstLetter = newTerm.charAt(0).toUpperCase();
    setCity(firstLetter + newTerm.slice(1));
  }

  const changeScale = () => {
    degrees === 'Fahrenheit' ? setDegrees('Celsius') : setDegrees('Fahrenheit');
  }

  const convertToCelsius = (temp) => {
    let newTemp = Math.round(temp - 273.15);
    return newTemp;
  }

  const convertToFahrenheit = (temp) => {
    let newTemp = Math.round(temp * 9 / 5 - 459.67);
    return newTemp;
  }

  const changeSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getInfo();
  }

  return (
    <div className="App">
      <div className={background}>
        <Header />
        <SearchBar handleSubmit={handleSubmit} changeSearch={changeSearch} />
        <WeatherCard city={city} temp={temp} degrees={degrees} description={description} imageURL={imageURL} />
        <button onClick={changeScale}>{degrees}</button>
      </div>
    </div>
  );
}

export default App;
