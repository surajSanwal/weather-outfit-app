import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '@/hooks/useTheme'

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 text-xl transition-colors"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>
  )
}

export default ThemeSwitcher