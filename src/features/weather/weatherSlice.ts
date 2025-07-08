import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type WeatherState } from './weatherTypes'

const initialState: WeatherState = {
  loading: false,
  data: null,
  error: null,
  city: ''
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeather(state, action: PayloadAction<{ city: string }>) {
      state.loading = true
      state.error = null
      state.city = action.payload.city
    },
    fetchWeatherSuccess(state, action: PayloadAction<any>) {
      state.loading = false
      state.data = action.payload
    },
    fetchWeatherFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  fetchWeather,
  fetchWeatherSuccess,
  fetchWeatherFailure
} = weatherSlice.actions

export default weatherSlice.reducer
