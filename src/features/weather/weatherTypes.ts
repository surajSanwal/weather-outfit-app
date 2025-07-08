export interface WeatherState {
  loading: boolean
  data: any | null
  error: string | null
  city: string
}

export interface WeatherPayload {
  city: string
}
