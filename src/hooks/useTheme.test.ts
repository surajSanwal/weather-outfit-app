import { renderHook, act } from '@testing-library/react'
import { useTheme } from './useTheme'

describe('useTheme', () => {
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

  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('toggles theme', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.isDark).toBeTypeOf('boolean')
    act(() => {
      result.current.toggleTheme()
    })
    expect(document.documentElement.classList.contains('dark')).toBe(result.current.isDark)
  })
})
