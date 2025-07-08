import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

vi.mock('./pages/Home/Home', () => ({
  __esModule: true,
  default: () => <div>HomePage</div>
}))
vi.mock('./components/atoms/ThemeSwitcher/ThemeSwitcher', () => ({
  __esModule: true,
  default: () => <div>ThemeSwitcher</div>
}))

describe('App', () => {
  it('renders Home and ThemeSwitcher', () => {
    render(<App />)
    expect(screen.getByText('HomePage')).toBeInTheDocument()
    expect(screen.getByText('ThemeSwitcher')).toBeInTheDocument()
  })
})
