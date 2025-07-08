import axios from 'axios'

const API_KEY = import.meta.env.VITE_OWM_API_KEY

export const searchCities = async (query: string) => {
  if (!query.trim()) return []
  const { data } = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
  )

  return data.map((item: any) => `${item.name}, ${item.country}`)
}
