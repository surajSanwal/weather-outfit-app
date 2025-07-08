import type { WeatherState, WeatherPayload } from './weatherTypes'

describe('weatherTypes', () => {
  it('WeatherState type exists', () => {
    const state: WeatherState = { loading: false, data: null, error: null, city: '' }
    expect(state).toBeDefined()
  })
  it('WeatherPayload type exists', () => {
    const payload: WeatherPayload = { city: 'London' }
    expect(payload).toBeDefined()
  })
})
