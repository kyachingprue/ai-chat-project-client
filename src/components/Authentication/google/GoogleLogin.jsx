import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'
import useAuth from '../../../hooks/useAuth'

const GoogleLogin = () => {
  const { googleLogin } = useAuth()

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleGoogleLogin = () => {
    setLoading(true)

    googleLogin()
      .then(() => {
        toast.success('Google Login Successful 🚀')
        navigate(from, { replace: true })
      })
      .catch(error => {
        toast.error(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <motion.button
      type="button"
      onClick={handleGoogleLogin}
      disabled={loading}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 0 25px rgba(255,255,255,0.15)'
      }}
      whileTap={{ scale: 0.96 }}
      className="w-full py-3 px-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300"
    >
      {/* Google Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-6 h-6"
      >
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.1 0 9.8-1.9 13.3-5.1l-6.1-5C29.2 36 26.8 37 24 37c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 39.5 16.2 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.1 6.9l6.1 5C39.6 36.2 44 30.7 44 24c0-1.3-.1-2.4-.4-3.5z"
        />
      </svg>

      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Signing In...
        </span>
      ) : (
        <span>Continue with Google</span>
      )}
    </motion.button>
  )
}

export default GoogleLogin
