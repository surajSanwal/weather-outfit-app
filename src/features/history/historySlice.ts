import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const MAX_HISTORY = 5

const historySlice = createSlice({
  name: 'history',
  initialState: [] as string[],
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      const updated = state.filter((city) => city.toLowerCase() !== action.payload.toLowerCase())
      updated.unshift(action.payload)
      return updated.slice(0, MAX_HISTORY)
    }
  }
})

export const { addToHistory } = historySlice.actions
export default historySlice.reducer
