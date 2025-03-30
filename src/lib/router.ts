import { createBrowserRouter } from 'react-router'
import App from '@/App'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import NotFoundPage from '@/pages/NotFoundPage'
import HomePage from '@/pages/HomePage'
import Services from '@/components/UpdateProfile'
import ChatHome from '@/pages/ChatHome'
import UserChats from '@/pages/UserChats'
import { T } from 'node_modules/react-router/dist/development/fog-of-war-BQyvjjKg.d.mts'
import EmptyChat from '@/components/chat/EmptyChat'

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
  {
    path: 'chat',
    Component: ChatHome,
    children: [
      {
        index: true,
        Component:EmptyChat,
      },
      {
        path: ':id',
        Component: UserChats,
      },
      { path: '*', Component: NotFoundPage },
    ],
  },
])

export default router
