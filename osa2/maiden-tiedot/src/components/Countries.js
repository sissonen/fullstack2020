import React from 'react'

const Countries = ({countryList}) => {
  const printCountries = (countryList) => {
    if (countryList === undefined) {
      return (<div>Fetching countries.</div>)
    } else if (countryList.length > 10) {
      return (<div>Too many results!</div>)
    } else if (countryList.length <= 10 && countryList.length > 1) {
      return (
        <div>{countryList.map(country => <li key={country.name}>{country.name}</li>)}</div>
      )
    } else if (countryList.length === 1) {
      console.log(countryList[0])
      const country = countryList[0]
      return (
        <div>
          <h2>{country.name}</h2>
          <div>Capital: {country.capital}</div>
          <div>Population: {country.population}</div>
          <h3>Languages</h3>
          <ul>
            {country.languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}
          </ul>
          <div>
            <img src={country.flag} alt="flag" height={200} />
          </div>
        </div>
      )
    } else {
      return (<div>No countries found.</div>)
    }
  }
  return (
    <div>
      <ul>
        {printCountries(countryList)}
      </ul>
    </div>
  )
}

export default Countries
