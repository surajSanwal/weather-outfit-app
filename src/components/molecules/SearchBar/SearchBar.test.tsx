import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import SearchBar from './SearchBar'

const mockStore = configureStore([])
const initialState = {
  suggestion: { suggestions: ['London, GB', 'Paris, FR'], loading: false, error: null },
  searchHistory: { history: ['Berlin, DE', 'Madrid, ES'] }
}

describe('SearchBar', () => {
  it('renders input and button', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <SearchBar onSearch={vi.fn()} />
      </Provider>
    )
    expect(screen.getByPlaceholderText(/enter city name/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('shows suggestions when present', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <SearchBar onSearch={vi.fn()} />
      </Provider>
    )
    expect(screen.getByText('London, GB')).toBeInTheDocument()
    expect(screen.getByText('Paris, FR')).toBeInTheDocument()
  })

  it('shows recent search history', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <SearchBar onSearch={vi.fn()} />
      </Provider>
    )
    expect(screen.getByText('Berlin, DE')).toBeInTheDocument()
    expect(screen.getByText('Madrid, ES')).toBeInTheDocument()
  })

  it('calls onSearch when form is submitted', () => {
    const store = mockStore(initialState)
    const onSearch = vi.fn()
    render(
      <Provider store={store}>
        <SearchBar onSearch={onSearch} />
      </Provider>
    )
    const input = screen.getByPlaceholderText(/enter city name/i)
    fireEvent.change(input, { target: { value: 'Rome' } })
    fireEvent.submit(input.closest('form')!)
    expect(onSearch).toHaveBeenCalledWith('Rome')
  })

  it('calls onSearch when suggestion is clicked', () => {
    const store = mockStore(initialState)
    const onSearch = vi.fn()
    render(
      <Provider store={store}>
        <SearchBar onSearch={onSearch} />
      </Provider>
    )
    fireEvent.mouseDown(screen.getByText('London, GB'))
    expect(onSearch).toHaveBeenCalledWith('London, GB')
  })

  it('calls onSearch when history item is clicked', () => {
    const store = mockStore(initialState)
    const onSearch = vi.fn()
    render(
      <Provider store={store}>
        <SearchBar onSearch={onSearch} />
      </Provider>
    )
    fireEvent.click(screen.getByText('Berlin, DE'))
    fireEvent.submit(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByDisplayValue('Berlin, DE')).toBeInTheDocument()
  })
})
