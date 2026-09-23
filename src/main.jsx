import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout.jsx'
import Dashboard from './Component/Dashboard/Dashboard.jsx'
import Home from './Pages/Home/Home.jsx'
import Discover from '../src/Pages/Discover/Discover.jsx'
import Users from './Pages/Users/Users.jsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Developers from './Pages/Developers/Developers.jsx'
import Folders from './Pages/Folders/Folders.jsx'
import Service from './Component/Services/Service/Service.jsx'
import Signin from './Pages/Auth/Signin.jsx'
import ActivateAccount from './Pages/Auth/ActivateAccount.jsx'
import Settings from './Component/Settings/Settings.jsx'
import Saved from './Component/Saved/Saved.jsx'
import Profile from './Component/Identitiy/Profile/Profile.jsx'
import { ThemeContext } from './Context/ThemeContext.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'

const Routing = createBrowserRouter([
  {
    path: '/', Component: Layout, children: [
      { path: '', Component: Home },
      { path: 'dashboard', Component: Dashboard },
      { path: 'discover', Component: Discover },
      { path: 'users', Component: Users },
      { path: 'developers', Component: Developers },
      {
        path: 'folders', Component: Folders, children: [
          {
            path: 'service/:servname', Component: Service
          }
        ]
      },
      {
        path: 'settings', Component: Settings
      },
      {
        path: 'saved', Component: Saved
      },
      {
        path: 'profile', Component: Profile
      },
    ]
  }
  , {
    path: '/signin', Component: Signin
  },
  {
    path: '/activateAccount', Component: ActivateAccount
  }
])
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routing}>
          <Layout />
        </RouterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
)
