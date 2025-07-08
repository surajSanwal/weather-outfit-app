import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import WeatherCard from './WeatherCard'

describe('WeatherCard', () => {
  it('renders weather info', () => {
    render(
      <WeatherCard
        temperature={20}
        description="clear sky"
        humidity="50"
        wind="3"
        outfit="T-shirt"
        city="London"
      />
    )
    expect(screen.getByText(/Weather in London/)).toBeInTheDocument()
    expect(screen.getByText(/clear sky/i)).toBeInTheDocument()
    expect(screen.getByText(/20°C/)).toBeInTheDocument()
    expect(screen.getByText(/Humidity: 50%/)).toBeInTheDocument()
    expect(screen.getByText(/Wind: 3 m\/s/)).toBeInTheDocument()
    expect(screen.getByText(/T-shirt/)).toBeInTheDocument()
  })
})
