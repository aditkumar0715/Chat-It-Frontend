import { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/common/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { useNavigate } from 'react-router';

function App() {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate('/chat');
    }
  }, []);

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
