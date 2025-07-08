import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SearchHistoryState {
  history: string[]
}

const initialState: SearchHistoryState = {
  history: []
}

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<string>) {
      const query = action.payload.trim()

      if (!query) return

      const updated = state.history.filter((item) => item.toLowerCase() !== query.toLowerCase())
      updated.unshift(query)

      if (updated.length > 5) updated.pop()

      state.history = updated
    },
    clearHistory(state) {
      state.history = []
    }
  }
})

export const { addToHistory, clearHistory } = searchHistorySlice.actions
export default searchHistorySlice.reducer
