import { call, put, takeLatest, delay, cancelled } from 'redux-saga/effects'
import {
  fetchSuggestions,
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure
} from './suggestionSlice'
import { searchCities } from '@/services/citySearchService'

import { type SagaIterator } from 'redux-saga';

export function* handleFetchSuggestions(action: ReturnType<typeof fetchSuggestions>): SagaIterator {
  try {
    yield delay(300) // debounce input
    const results: string[] = yield call(searchCities, action.payload.query)
    yield put(fetchSuggestionsSuccess(results))
  } catch (error: any) {
    yield put(fetchSuggestionsFailure(error?.message || 'City suggestions failed'))
  } finally {
    if (yield cancelled()) {
      console.log('Suggestion fetch cancelled')
    }
  }
}

export default function* suggestionSaga() {
  yield takeLatest(fetchSuggestions.type, handleFetchSuggestions)
}
