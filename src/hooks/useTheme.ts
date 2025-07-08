import { useCallback, useEffect, useState } from 'react'

const THEME_KEY = 'theme'

export function useTheme() {
  // Check localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === 'dark') return true
    if (stored === 'light') return false
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem(THEME_KEY, 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem(THEME_KEY, 'light')
    }
  }, [isDark])

  const toggleTheme = useCallback(() => setIsDark((d) => !d), [])

  return { isDark, toggleTheme }
}