import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { X, Menu, UserCircle, LogOut } from 'lucide-react' // for icons
import { cn } from '@/lib/utils' // utility function for conditional classes
import { useNavLink } from '@/hooks/customHooks' // custom hook for navigation link
import ThemeButton from './ThemeButton'
import Logo from './Logo'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false) // Added state for mobile menu
  const handleLinkClick = useNavLink(setMenuOpen) // Custom hook to handle link click
  // const { user, logout } = useContext(UserContext) // Assuming we have user and logout function
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false) // State for user menu
  const [user, setUser] = useState(true)
  const logout = () => {
    setIsUserMenuOpen(false)
    setUser(false) // Simulating logout
    console.log('User logged out')
  }

  return (
    <header className="bg-background border-b transition-colors duration-300">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-foreground hover:text-primary text-2xl font-bold transition-colors duration-300"
        >
          {<Logo />}
        </Link>

        {/* Navigation Links */}
        <div className="hidden space-x-4 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                'text-foreground hover:bg-secondary rounded-md px-3 py-2 text-sm font-medium transition-all duration-300',
                isActive && 'bg-secondary'
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                'text-foreground hover:bg-secondary rounded-md px-3 py-2 text-sm font-medium transition-all duration-300',
                isActive && 'bg-secondary'
              )
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              cn(
                'text-foreground hover:bg-secondary rounded-md px-3 py-2 text-sm font-medium transition-all duration-300',
                isActive && 'bg-secondary'
              )
            }
          >
            Services
          </NavLink>
        </div>

        {/* Conditional Rendering Based on User Authentication */}
        <div className="flex items-center space-x-4">
          {!user ? (
            // Render Login/Signup Buttons when user is not logged in
            <>
              <Link to="/login">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="outline"
                  className="border-primary text-primary"
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/chat">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Try Chat-It
                </Button>
              </Link>
            </>
          ) : (
            // Render Profile Avatar and Dropdown Menu when user is logged in
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="text-foreground flex items-center space-x-2"
              >
                <UserCircle className="h-6 w-6" />
                <span>{user && 'hello'}</span>
              </button>
              {isUserMenuOpen && (
                <div className="bg-popover absolute right-0 mt-2 w-48 rounded-lg shadow-lg">
                  <Link
                    onClick={() => setIsUserMenuOpen(false)}
                    to="/profile"
                    className="text-foreground hover:bg-secondary/50 block px-4 py-2"
                  >
                    Profile
                  </Link>
                  <Link
                    onClick={() => setIsUserMenuOpen(false)}
                    to="/settings"
                    className="text-foreground hover:bg-secondary/50 block px-4 py-2"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="text-destructive hover:bg-destructive/20 block w-full px-4 py-2 text-left"
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
          className="text-foreground block transition-transform duration-300 focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="text-foreground h-6 w-6" />
          ) : (
            <Menu className="text-foreground h-6 w-6" />
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
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
              onClick={handleLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
              onClick={handleLinkClick}
            >
              Services
            </NavLink>
            <Link
              to="/login"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
              onClick={handleLinkClick}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
              onClick={handleLinkClick}
            >
              Sign Up
            </Link>
            <Link
              to="/chat"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
              onClick={handleLinkClick}
            >
              Try Chat-It
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
