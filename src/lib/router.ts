import { createBrowserRouter } from 'react-router'
import App from '@/App'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import NotFoundPage from '@/pages/NotFoundPage'
import HomePage from '@/pages/HomePage'
import Services from '@/components/UpdateProfile'
import UserChats from '@/pages/UserChats'
import EmptyChat from '@/components/chat/EmptyChat'
import ChatPage from '@/pages/ChatPage'

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
    Component: ChatPage,
    children: [
      {
        index: true,
        Component: EmptyChat,
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
