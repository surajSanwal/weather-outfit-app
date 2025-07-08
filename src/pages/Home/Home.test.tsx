import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Home from './Home'

const mockStore = configureStore([])
const initialState = {
  weather: {
    data: {
      current: {
        temp: 20,
        weather: [{ main: 'Clear', description: 'clear sky' }],
        humidity: 50,
        wind_speed: 3
      }
    },
    loading: false,
    error: null,
    city: 'London'
  },
  suggestion: { suggestions: [], loading: false, error: null },
  searchHistory: { history: [] }
}

vi.mock('@/components/organisms/WeatherCard/WeatherCard', () => ({
  __esModule: true,
  default: (props: any) => <div>WeatherCard {props.city}</div>
}))

describe('Home', () => {
  it('renders title and search bar', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    expect(screen.getByText(/Weather-Based Outfit Recommender/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/enter city name/i)).toBeInTheDocument()
  })

  it('shows loading and error', () => {
    const store = mockStore({ ...initialState, weather: { ...initialState.weather, loading: true, error: 'fail' } })
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    expect(screen.getByText(/fail/i)).toBeInTheDocument()
  })

  it('renders WeatherCard when data is present', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    expect(screen.getByText(/WeatherCard London/)).toBeInTheDocument()
  })
})
