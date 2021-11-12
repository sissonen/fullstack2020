import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({city, apiKey}) => {
  
  const [ weatherData, setWeatherData ] = useState([])
  
  useEffect(() => {
    axios
      .get('http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+city+'&aqi=no')
      .then(
        response => {
          setWeatherData(response.data)
        })
  }, []);
  
  if (weatherData.current !== undefined) {

    //console.log("WEATHER:",weatherData)
    return (
      <div>
        <h3>Weather in {city} is currently:</h3>
        <div>Temperature: {weatherData.current.temp_c} C</div>
        <div>Wind: {weatherData.current.wind_mph} mph, direction {weatherData.current.wind_dir}</div>
        <div><img src={weatherData.current.condition.icon} alt="weather_icon" height={100} /></div>
      </div>
    )

  } else {
    
    return (<div>No weather data available</div>)

  }
}

export default Weather
