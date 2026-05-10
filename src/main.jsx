import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './provider/AuthProvider.jsx'
import './index.css'
import SplashCursor from './components/SplashCursor.jsx'
import { HelmetProvider } from 'react-helmet-async'
import ThemeProvider  from './context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
      <AuthProvider>
        <SplashCursor />
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
)
