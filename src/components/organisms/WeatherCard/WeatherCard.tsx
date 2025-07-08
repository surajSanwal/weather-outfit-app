type Props = {
  temperature: string
  description: string
  humidity: string
  wind: string
  outfit: string
}

const WeatherCard = ({ temperature, description, humidity, wind, outfit }: Props) => (
  <section
    className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md w-full max-w-xl"
    aria-label="Weather details"
  >
    <div className="text-xl font-semibold">{description}</div>
    <p className="text-4xl font-bold">{temperature}°C</p>
    <div className="mt-2 text-sm">
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind} m/s</p>
    </div>
    <p className="mt-4 font-medium">🧥 {outfit}</p>
  </section>
)

export default WeatherCard
