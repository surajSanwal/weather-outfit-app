import { all, fork } from 'redux-saga/effects'
import weatherSaga from '@/features/weather/weatherSaga'

export default function* rootSaga() {
  yield all([fork(weatherSaga)])
}
