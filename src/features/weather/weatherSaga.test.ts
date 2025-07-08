import { runSaga } from 'redux-saga'
import * as service from '../../services/weatherService'
import { fetchWeather, fetchWeatherSuccess, fetchWeatherFailure } from './weatherSlice'
import { handleFetchWeather } from './weatherSaga'

vi.mock('../../services/weatherService')

describe('weatherSaga', () => {
  it('dispatches success on valid city', async () => {
    service.getGeoCoords.mockResolvedValue({ lat: 1, lon: 2 })
    service.getWeather.mockResolvedValue({ temp: 10 })
    const dispatched: any[] = []
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({})
    }, handleFetchWeather, fetchWeather({ city: 'London' })).toPromise()
    expect(dispatched).toContainEqual(fetchWeatherSuccess({ temp: 10 }))
  })

  it('dispatches failure on error', async () => {
    service.getGeoCoords.mockRejectedValue(new Error('fail'))
    const dispatched: any[] = []
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({})
    }, handleFetchWeather, fetchWeather({ city: 'Nowhere' })).toPromise()
    expect(dispatched.some(a => a.type === fetchWeatherFailure.type)).toBe(true)
  })
})
