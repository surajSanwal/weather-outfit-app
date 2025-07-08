import { renderHook, act } from '@testing-library/react'
import { useDebouncedValue } from './useDebouncedValue'

vi.useFakeTimers()

describe('useDebouncedValue', () => {
  it('debounces value', () => {
    const { result, rerender } = renderHook(({ value }) => useDebouncedValue(value), {
      initialProps: { value: 'a' }
    })
    rerender({ value: 'b' })
    expect(result.current).toBe('a')
    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(result.current).toBe('b')
  })
})
