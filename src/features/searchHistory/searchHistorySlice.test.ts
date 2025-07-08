import reducer, { addToHistory, clearHistory } from './searchHistorySlice'

describe('searchHistorySlice', () => {
  const initialState = { history: [] }

  it('should add to history', () => {
    let state = reducer(initialState, addToHistory('London'))
    expect(state.history).toContain('London')
    state = reducer(state, addToHistory('Paris'))
    expect(state.history).toEqual(['Paris', 'London'])
  })

  it('should not add empty or duplicate', () => {
    let state = reducer({ history: ['London'] }, addToHistory('London'))
    expect(state.history).toEqual(['London'])
    state = reducer(state, addToHistory(''))
    expect(state.history).toEqual(['London'])
  })

  it('should clear history', () => {
    const state = reducer({ history: ['London'] }, clearHistory())
    expect(state.history).toEqual([])
  })
})
