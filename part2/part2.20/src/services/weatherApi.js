import axios from 'axios'

const API_KEY = import.meta.env.VITE_SOME_KEY
const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall'

const getWeather = (lat, lon, exclude = 'minutely,hourly', units = 'metric') => {
    console.log("API_KEY:", import.meta.env.VITE_SOME_KEY);
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}&units=${units}`;
    
    return axios.get(url).then(response => response.data)

    .catch(error => {
        console.error('Error fetching weather data:', error)
        throw error // Lanza el error para manejarlo en el componente
    })
}

export default {
    getWeather
}