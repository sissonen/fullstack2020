import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'

const App = () => {
  const [ countryFilter, setCountryFilter ] = useState('')
  const [ countries, setCountries ] = useState([])
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        //console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const countriesFiltered = countries.filter(country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))

  return (
    <div>
      Find countries: <input value={countryFilter} onChange={handleCountryFilterChange} />
      <Countries countryList={countriesFiltered} setCountryFilter={setCountryFilter} apiKey={apiKey} />
    </div>
  )
}

export default App;
