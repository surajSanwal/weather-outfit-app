import { all, fork } from 'redux-saga/effects'
import weatherSaga from '@/features/weather/weatherSaga'
import suggestionSaga from '@/features/suggestion/suggestionSaga'

export default function* rootSaga() {
    yield all([
        fork(weatherSaga),
        suggestionSaga()
    ])
}
