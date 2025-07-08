import axios from 'axios'

const API_KEY = import.meta.env.VITE_OWM_API_KEY

export const getGeoCoords = async (city: string) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  )

  if (!data.length) throw new Error('City not found')
  return {
    lat: data[0].lat,
    lon: data[0].lon
  }
}

export const getWeather = async (lat: number, lon: number) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`
  )
  return data
}
