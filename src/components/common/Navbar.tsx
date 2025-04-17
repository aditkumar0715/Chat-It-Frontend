import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { X, Menu, LogOut } from 'lucide-react'; // for icons
import { cn } from '@/lib/utils'; // utility function for conditional classes
import { useNavLink } from '@/hooks/customHooks'; // custom hook for navigation link
import ThemeButton from './ThemeButton';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { logout } from '@/lib/redux/authSlice'; // action to logout user
import { logoutUser } from '@/lib/axios/services';
import { toast } from 'react-toastify';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Added state for mobile menu
  const handleLinkClick = useNavLink(setMenuOpen); // Custom hook to handle link click
  // const { user, logout } = useContext(UserContext) // Assuming we have user and logout function
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State for user menu
  const navigate = useNavigate(); // Hook to programmatically navigate
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  ); // Assuming we have a Redux store for authentication
  const dispatch = useDispatch(); // Dispatch function from Redux
  const logoutHandler = async () => {
    setIsUserMenuOpen(false);
    const response = await logoutUser(); // Call the API to logout user
    if (response.success !== true) {
      toast.error(response.message); // Display error message using toast
      return;
    }
    navigate('/'); // Redirect to the home
    dispatch(logout()); // Dispatching the logout action
    toast.info(response.message); // Display success message using toast
  };

  return (
    <header className="bg-background max-h-[4rem] border-b transition-colors duration-300 select-none">
      <nav className="mx-auto flex max-w-[2000px] items-center justify-between p-3">
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
          {isAuthenticated && (
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                cn(
                  'text-foreground hover:bg-secondary rounded-md px-3 py-2 text-sm font-medium transition-all duration-300',
                  isActive && 'bg-secondary'
                )
              }
            >
              Chats
            </NavLink>
          )}
        </div>

        {/* Theme toggler and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Hamburger icon / cross icon */}
          <button
            className="text-foreground block transition-transform duration-300 focus:outline-none md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="text-foreground h-8 w-8" />
            ) : (
              <Menu className="text-foreground h-8 w-8" />
            )}
          </button>

          {/* Theme Toggle */}
          <ThemeButton />

          {/* Conditional Rendering Based on User Authentication */}
          <div>
            {!isAuthenticated ? (
              // Render Login/Signup Buttons when user is not logged in
              <div className="hidden items-center space-x-4 md:flex">
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
              </div>
            ) : (
              // Render Profile Avatar and Dropdown Menu when user is logged in
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="text-foreground flex items-center space-x-2"
                >
                  <img src={user?.avatar} className="h-10 w-10 rounded-full" />
                </button>
                {isUserMenuOpen && (
                  <div className="bg-popover absolute right-0 mt-2 w-48 rounded-lg shadow-lg">
                    <Link
                      onClick={() => setIsUserMenuOpen(false)}
                      to="/user"
                      className="text-foreground hover:bg-secondary/50 block px-4 py-2"
                    >
                      me
                    </Link>
                    <Link
                      onClick={() => setIsUserMenuOpen(false)}
                      to="/settings"
                      className="text-foreground hover:bg-secondary/50 block px-4 py-2"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="text-destructive hover:bg-destructive/20 block w-full px-4 py-2 text-left"
                    >
                      <LogOut className="mr-2 inline h-4 w-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={cn(
            'bg-popover relative z-10 border-b-2 transition-all duration-500 ease-in-out md:hidden',
            menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          )}
        >
          <div className="space-y-2 px-2 pt-2 pb-3" onClick={handleLinkClick}>
            <NavLink
              to="/"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
            >
              Services
            </NavLink>
            {isAuthenticated && (
              <NavLink
                to="/chat"
                className="text-foreground hover:bg-secondary block rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
              >
                Chats
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
