import {
  put,
  call,
  delay,
  cancelled,
  take,
  fork,
  cancel
} from 'redux-saga/effects'
import {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherFailure
} from './weatherSlice'
import { getGeoCoords, getWeather } from '@/services/weatherService'

import type { SagaIterator } from 'redux-saga'

export function* handleFetchWeather(action: ReturnType<typeof fetchWeather>): SagaIterator {
  try {
    yield delay(500); // Simulate debounce delay

    const geo = yield call(getGeoCoords, action.payload.city)
    const weather = yield call(getWeather, geo.lat, geo.lon)

    yield put(fetchWeatherSuccess(weather))
  } catch (error: any) {
    yield put(fetchWeatherFailure(error?.message || 'Could not fetch weather'))
  } finally {
    if (yield call(cancelled)) {
      console.log('Weather fetch cancelled due to new input')
    }
  }
}

function* watchFetchWeather(): SagaIterator {
  let task: any
  while (true) {
    const action: ReturnType<typeof fetchWeather> = yield take(fetchWeather.type)

    if (task) {
      yield cancel(task) // cancel previous task
    }

    task = yield fork(handleFetchWeather, action)
  }
}

export default function* weatherSaga(): SagaIterator {
  yield fork(watchFetchWeather)
}