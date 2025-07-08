import { call, put, takeLatest } from 'redux-saga/effects'
import {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherFailure
} from './weatherSlice'
import { getGeoCoords, getWeather } from '@/services/weatherService'

function* handleFetchWeather(action: ReturnType<typeof fetchWeather>): Generator<any, void, any> {
  try {
    const geo = yield call(getGeoCoords, action.payload.city)
    const weather = yield call(getWeather, geo.lat, geo.lon)
    yield put(fetchWeatherSuccess(weather))
  } catch (error: any) {
    yield put(fetchWeatherFailure('Could not fetch weather'))
  }
}

export default function* weatherSaga() {
  yield takeLatest(fetchWeather.type, handleFetchWeather)
}
