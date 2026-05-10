import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Error from '../pages/Error'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Login from '../components/Authentication/Login/Login'
import Register from '../components/Authentication/Register/Register'
import Profile from '../pages/Profile'
import DashboardLayout from '@/layout/DashboardLayout'
import UserDashboard from '@/dashboard/user/UserDashboard'
import AIModels from '@/dashboard/user/AIModels'
import Analytics from '@/dashboard/user/Analytics'
import PlayGround from '@/dashboard/user/PlayGround'
import UsageStats from '@/dashboard/user/UsageStats'
import Database from '@/dashboard/user/Database'
import Security from '@/dashboard/user/Security'
import Settings from '@/dashboard/user/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'profile',
        element: <Profile />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'user-dashboard',
        element: <UserDashboard/>
      },
      {
        path: 'ai-models',
        element:<AIModels/>
      },
      {
        path: 'analytics',
        element: <Analytics/>
      },
      {
        path: 'playground',
        element: <PlayGround/>
      },
      {
        path: 'usage-stats',
        element: <UsageStats/>
      },
      {
        path: 'database',
        element: <Database/>
      },
      {
        path: 'security',
        element: <Security/>
      },
      {
        path: 'settings',
        element: <Settings/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export default router
