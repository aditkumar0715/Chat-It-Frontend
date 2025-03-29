import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { X, Menu, UserCircle, LogOut } from 'lucide-react' // for icons
import { cn } from '@/lib/utils' // utility function for conditional classes
import { useNavLink } from '@/hooks/customHooks' // custom hook for navigation link
import ThemeButton from './ThemeButton'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false) // Added state for mobile menu
  const handleLinkClick = useNavLink(setMenuOpen) // Custom hook to handle link click
  // const { user, logout } = useContext(UserContext) // Assuming we have user and logout function
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false) // State for user menu
  const [user, setUser] = useState(true);
  const logout = () => {
    setIsUserMenuOpen(false)
    setUser(false) // Simulating logout
    console.log('User logged out')
  }

  return (
    <header className="border-b bg-white transition-colors duration-300 dark:bg-gray-900">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
        >
          MyLogo
        </Link>

        {/* Navigation Links */}
        <div className="hidden space-x-4 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                'rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800',
                isActive && 'bg-gray-200 dark:bg-gray-800'
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                'rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800',
                isActive && 'bg-gray-200 dark:bg-gray-800'
              )
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              cn(
                'rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800',
                isActive && 'bg-gray-200 dark:bg-gray-800'
              )
            }
          >
            Services
          </NavLink>
        </div>

        {/* Buttons: Login/Sign Up */}
        {/* <div className="hidden space-x-4 md:flex">
          <Link to="/login">
            <Button
              variant="outline"
              className="transition-transform duration-300 hover:scale-105"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="transition-transform duration-300 hover:scale-105">
              Sign Up
            </Button>
          </Link>
        </div> */}

        {/* Conditional Rendering Based on User Authentication */}
        <div className="flex items-center space-x-4">
          {!user ? (
            // Render Login/Signup Buttons when user is not logged in
            <>
              <Link to="/login">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 dark:text-blue-400"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            // Render Profile Avatar and Dropdown Menu when user is logged in
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                <UserCircle className="h-6 w-6" />
                <span>{user?.username} hello</span>
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg dark:bg-gray-800">
                  <Link
                    onClick={() => setIsUserMenuOpen(false)}
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                  <Link
                    onClick={() => setIsUserMenuOpen(false)}
                    to="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-700"
                  >
                    <LogOut className="mr-2 inline h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <ThemeButton />

        {/* Mobile Menu Toggle */}
        <button
          className="block text-gray-800 transition-transform duration-300 focus:outline-none md:hidden dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-800 dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={cn(
            'transition-all duration-500 ease-in-out md:hidden',
            menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          )}
        >
          <div className="space-y-2 px-2 pt-2 pb-3">
            <NavLink
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={handleLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
            <Link
              to="/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={handleLinkClick}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={handleLinkClick}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
