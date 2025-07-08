import reducer, {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherFailure
} from './weatherSlice'

describe('weatherSlice', () => {
  const initialState = {
    loading: false,
    data: null,
    error: null,
    city: ''
  }

  it('should handle fetchWeather', () => {
    const state = reducer(initialState, fetchWeather({ city: 'London' }))
    expect(state.loading).toBe(true)
    expect(state.city).toBe('London')
    expect(state.error).toBeNull()
  })

  it('should handle fetchWeatherSuccess', () => {
    const state = reducer({ ...initialState, loading: true }, fetchWeatherSuccess({ temp: 10 }))
    expect(state.loading).toBe(false)
    expect(state.data).toEqual({ temp: 10 })
  })

  it('should handle fetchWeatherFailure', () => {
    const state = reducer({ ...initialState, loading: true }, fetchWeatherFailure('error'))
    expect(state.loading).toBe(false)
    expect(state.error).toBe('error')
  })
})
