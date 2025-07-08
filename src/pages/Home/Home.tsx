import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import WeatherCard from '@/components/organisms/WeatherCard/WeatherCard'
import { useState } from 'react'

const Home = () => {
  const [weather, setWeather] = useState<any | null>(null)

  const handleSearch = (city: string) => {
    console.log('Search:', city)
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center justify-start gap-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
        Weather-Based Outfit Recommender
      </h1>
      <SearchBar onSearch={handleSearch} />
      {weather && (
        <WeatherCard
          temperature="28"
          description="Sunny"
          humidity="55"
          wind="3.5"
          outfit="Sunglasses and light clothes suggested"
        />
      )}
    </main>
  )
}

export default Home
