import reducer, {
  fetchSuggestions,
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure,
  clearSuggestions
} from './suggestionSlice'

describe('suggestionSlice', () => {
  const initialState = {
    suggestions: [],
    loading: false,
    error: null
  }

  it('should handle fetchSuggestions', () => {
    const state = reducer(initialState, fetchSuggestions({ query: 'Lon' }))
    expect(state.loading).toBe(true)
    expect(state.error).toBeNull()
  })

  it('should handle fetchSuggestionsSuccess', () => {
    const state = reducer({ ...initialState, loading: true }, fetchSuggestionsSuccess(['London']))
    expect(state.loading).toBe(false)
    expect(state.suggestions).toEqual(['London'])
  })

  it('should handle fetchSuggestionsFailure', () => {
    const state = reducer({ ...initialState, loading: true }, fetchSuggestionsFailure('fail'))
    expect(state.loading).toBe(false)
    expect(state.error).toBe('fail')
  })

  it('should handle clearSuggestions', () => {
    const state = reducer({ ...initialState, suggestions: ['A'] }, clearSuggestions())
    expect(state.suggestions).toEqual([])
  })
})
