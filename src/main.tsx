import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/lib/redux/store'
import { RouterProvider } from 'react-router'
import router from './lib/router'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'

const AppWrapper = () => {
  const { theme } = useSelector((state: RootState) => state.theme)!
  document.documentElement.classList.toggle('dark', theme === 'dark')
  return (
    <div className="selection:bg-chart-3 selection:text-white">
      <RouterProvider router={router} />
      <ToastContainer theme={theme === 'dark' ? 'dark' : 'light'} position='bottom-right'/>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </StrictMode>
)
