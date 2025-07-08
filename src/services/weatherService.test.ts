import axios from 'axios'
import { getGeoCoords, getWeather } from './weatherService'

vi.mock('axios')

describe('weatherService', () => {
  it('getGeoCoords returns lat/lon', async () => {
    axios.get.mockResolvedValueOnce({ data: [{ lat: 1, lon: 2 }] })
    const coords = await getGeoCoords('London')
    expect(coords).toEqual({ lat: 1, lon: 2 })
  })

  it('getGeoCoords throws if not found', async () => {
    axios.get.mockResolvedValueOnce({ data: [] })
    await expect(getGeoCoords('Nowhere')).rejects.toThrow('City not found')
  })

  it('getWeather returns data', async () => {
    axios.get.mockResolvedValueOnce({ data: { temp: 10 } })
    const data = await getWeather(1, 2)
    expect(data).toEqual({ temp: 10 })
  })
})
