import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '@/features/weather/weatherSlice'
import { getOutfitSuggestion } from '@/utils/getOutfitSuggestion'
import type { RootState } from '@/app/store'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import WeatherCard from '@/components/organisms/WeatherCard/WeatherCard'

const Home = () => {
  const dispatch = useDispatch()
  const { data, loading, error, city: SelectedCity } = useSelector((state: RootState) => state.weather)

  const handleSearch = (city: string) => {
    dispatch(fetchWeather({ city }))
  }

  const current = data?.current
  const weatherMain = current?.weather?.[0]?.main || ''
  const outfit = getOutfitSuggestion(current?.temp, weatherMain)

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center justify-start gap-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
        Weather-Based Outfit Recommender
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-gray-800 dark:text-gray-200">Loading...</p>}
      {error && <p className="text-red-700 dark:text-red-400">{error}</p>}

      {current && (
        <WeatherCard
          temperature={Math.round(current.temp)}
          description={current.weather[0].description}
          humidity={current.humidity}
          wind={current.wind_speed}
          outfit={outfit}
          city={SelectedCity}
        />
      )}
    </main>
  )
}

export default Home
