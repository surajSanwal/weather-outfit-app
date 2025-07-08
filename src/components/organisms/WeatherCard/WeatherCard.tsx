type Props = {
    temperature: number
    description: string
    humidity: string
    wind: string
    outfit: string
}
const WeatherCard = ({ temperature, description, humidity, wind, outfit }: Props) => (
    <section
        className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full max-w-xl"
        aria-label="Weather details"
    >
        <div className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
            {description}
        </div>
        <p className="text-4xl font-bold text-blue-800 dark:text-blue-300">
            {temperature}°C
        </p>
        <div className="mt-2 text-sm text-gray-800 dark:text-gray-300">
            <p>Humidity: {humidity}%</p>
            <p>Wind: {wind} m/s</p>
        </div>
        <p className="mt-4 font-medium text-indigo-700 dark:text-indigo-300">
            🧥 {outfit}
        </p>
    </section>
)

export default WeatherCard
