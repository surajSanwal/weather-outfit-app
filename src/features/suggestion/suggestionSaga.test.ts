import { runSaga } from 'redux-saga'
import * as service from '../../services/citySearchService'
import { fetchSuggestions, fetchSuggestionsSuccess, fetchSuggestionsFailure } from './suggestionSlice'
import { handleFetchSuggestions } from './suggestionSaga'

vi.mock('../../services/citySearchService')

describe('suggestionSaga', () => {
  it('dispatches success on valid query', async () => {
    service.searchCities.mockResolvedValue(['London, GB'])
    const dispatched: any[] = []
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({})
    }, handleFetchSuggestions, fetchSuggestions({ query: 'Lon' })).toPromise()
    expect(dispatched).toContainEqual(fetchSuggestionsSuccess(['London, GB']))
  })

  it('dispatches failure on error', async () => {
    service.searchCities.mockRejectedValue(new Error('fail'))
    const dispatched: any[] = []
    await runSaga({
      dispatch: (action) => dispatched.push(action),
      getState: () => ({})
    }, handleFetchSuggestions, fetchSuggestions({ query: 'X' })).toPromise()
    expect(dispatched.some(a => a.type === fetchSuggestionsFailure.type)).toBe(true)
  })
})
