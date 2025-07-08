import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SuggestionState {
  suggestions: string[]
  loading: boolean
  error: string | null
}

const initialState: SuggestionState = {
  suggestions: [],
  loading: false,
  error: null
}

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState,
  reducers: {
    fetchSuggestions(state, action: PayloadAction<{ query: string }>) {
      state.loading = true
      state.error = null
    },
    fetchSuggestionsSuccess(state, action: PayloadAction<string[]>) {
      state.suggestions = action.payload
      state.loading = false
    },
    fetchSuggestionsFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    clearSuggestions(state) {
      state.suggestions = []
    }
  }
})

export const {
  fetchSuggestions,
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure,
  clearSuggestions
} = suggestionSlice.actions

export default suggestionSlice.reducer
