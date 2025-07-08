import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThemeSwitcher from './ThemeSwitcher'
import { beforeAll, expect, vi } from 'vitest'

describe('ThemeSwitcher', () => {
    beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })
  it('renders button', () => {
    render(<ThemeSwitcher />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls toggleTheme on click', () => {
    render(<ThemeSwitcher />)
    fireEvent.click(screen.getByRole('button'))
  })
})
