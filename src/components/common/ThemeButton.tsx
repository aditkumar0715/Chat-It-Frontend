import { useEffect, useState } from 'react' // for state and effect hooks
import { Sun, Moon, SunMoon } from 'lucide-react' // for icons

type Theme = 'light' | 'dark' | 'system'

const ThemeButton = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage or fallback to system theme detection
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) return savedTheme

    // Detect system theme if no saved preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  // Apply selected theme to <html> class
  useEffect(() => {
    if (theme === 'system') {
      const systemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      document.documentElement.classList.toggle('dark', systemDark)
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }

    localStorage.setItem('theme', theme) // Save theme to localStorage
  }, [theme])

  // Cycle through themes: light → dark → system
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'light' ? 'dark' : prevTheme === 'dark' ? 'system' : 'light'
    )
  }

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {theme === 'light' && <Sun size={35} className="text-yellow-500" />}
      {theme === 'dark' && <Moon size={35} className="text-gray-400" />}
      {theme === 'system' && <SunMoon size={35} className="text-blue-500" />}
    </button>
  )
}

export default ThemeButton
