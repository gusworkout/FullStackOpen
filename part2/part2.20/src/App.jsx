import { useState, useEffect } from 'react'
import api from './services/api'
import weatherApi from './services/weatherApi'

function App() {
  const [data, setData] = useState([])
  const [showFilter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
  })

  useEffect(() => {
    api.getAll()
      .then(initialData => setData(initialData))
      .catch(error => console.error('Error fetching data', error))
  }, [])

  const countriesToShow = showFilter
    ? data.filter(
      country => country.name.common.toLowerCase().includes(showFilter.toLowerCase())
    ).slice(0, 10) : []

  const handelShowCountry = (country) => {
    setSelectedCountry(country)
    setWeatherData(null)
  }

  useEffect(() => {
    if (selectedCountry && selectedCountry.latlng) {
      const [lat, lon] = selectedCountry.latlng
      weatherApi.getWeather(lat, lon)
        .then(data => setWeatherData(data))
        .catch(error => {
          console.error('no countrie found', error)
        })
    }
  }, [selectedCountry])




  const handleShowCountry = (country) => { setSelectedCountry(country) }
  const handleFilterChange = (event) => { setFilter(event.target.value) }

  return (

    <div>
      <h2>search countries</h2>
      <input value={showFilter} onChange={handleFilterChange} />

      <h2>Countries to show</h2>
      <ul>
        {countriesToShow.map(country => (
          <li key={country.cca2}>
            {country.name.common}
            <button onClick={() => handleShowCountry(country)} >Show</button>
          </li>
        ))}
      </ul>
      {showFilter === '' && <p>Search any countrie</p>}
      {showFilter && countriesToShow.length === 0 && <p>No found countries</p>}
      <div>
        {selectedCountry && (
          <div>
            <h2>{selectedCountry.name.common}</h2>
            <p>Area: {selectedCountry.area}</p>
            <h3>Languages</h3>
              <p>{Object.values(selectedCountry.languages).join(', ')}</p>
              <img src={selectedCountry.flags.png} width="90" height="90" />
            <div>
              <h2>Weaher in {selectedCountry.name.common}</h2>
              {weatherData ?(
                <div>
                  <p>Temperature: {weatherData.current.temp}°C</p>
                  <p>Wind: {weatherData.current.wind_speed} m/s</p>
                </div>
              ):(

                <p>Loading weather data</p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
