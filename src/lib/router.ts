import { createBrowserRouter } from 'react-router';
import App from '@/App';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import NotFoundPage from '@/pages/NotFoundPage';
import HomePage from '@/pages/HomePage';
import UpdateProfile from '@/components/UpdateProfile';
import UserChats from '@/pages/UserChats';
import EmptyChat from '@/components/chat/EmptyChat';
import ChatPage from '@/pages/ChatPage';
import MyDetailsPage from '@/pages/MyDetailsPage';

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
        Component: UpdateProfile,
      },
      {
        path: 'user',
        Component: MyDetailsPage,
        children: [
          {
            index: true,
            Component: MyDetailsPage,
          }
          
        ]
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
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
