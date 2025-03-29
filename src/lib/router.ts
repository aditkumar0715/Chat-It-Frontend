import { createBrowserRouter } from 'react-router'
import App from '@/App'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import NotFoundPage from '@/pages/NotFoundPage'
import HomePage from '@/pages/HomePage'
import Services from '@/components/UpdateProfile'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
      {
        path: 'signup',
        Component: SignupPage,
      },
      // {
      //   path: "chat",
      //   Component:
      // },
      {
        path: 'services',
        Component: Services,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
])

export default router
