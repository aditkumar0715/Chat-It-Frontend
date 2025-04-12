import { Sun, Moon } from 'lucide-react' // for icons
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/redux/store' // for Redux state
import { toggleTheme } from '@/lib/redux/themeSlice' // for theme actions

const ThemeButton = () => {
  const { theme } = useSelector((state: RootState) => state.theme) // Get theme from Redux store
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(toggleTheme())} // Dispatch action to toggle theme
      className="cursor-pointer"
    >
      {theme === 'light' && <Sun size={35} className="text-yellow-500" />}
      {theme === 'dark' && <Moon size={35} className="text-gray-400" />}
    </button>
  )
}

export default ThemeButton
