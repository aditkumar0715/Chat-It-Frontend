import { Outlet } from "react-router"
import Navbar from "./components/common/Navbar"


function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
