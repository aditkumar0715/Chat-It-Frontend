import { Outlet } from 'react-router'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
