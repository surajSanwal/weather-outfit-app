import axios from 'axios'
import { searchCities } from './citySearchService'

vi.mock('axios')

describe('citySearchService', () => {
  it('returns city suggestions', async () => {
    axios.get.mockResolvedValueOnce({ data: [{ name: 'London', country: 'GB' }] })
    const result = await searchCities('Lon')
    expect(result).toEqual(['London, GB'])
  })

  it('returns empty for blank query', async () => {
    const result = await searchCities(' ')
    expect(result).toEqual([])
  })
})
