import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaRocket, FaUserCircle } from 'react-icons/fa'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'
import useAuth from '../../../hooks/useAuth'
import GoogleLogin from '../google/GoogleLogin'

const Login = () => {
  const { signInUser, forgetPassword } = useAuth()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()

  const [showPassword, setShowPassword] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const onSubmit = data => {
    setBtnLoading(true)

    signInUser(data.email, data.password)
      .then(() => {
        toast.success('Login Successful 🚀')
        navigate(from, { replace: true })
      })
      .catch(error => {
        toast.error(error.message)
      })
      .finally(() => {
        setBtnLoading(false)
      })
  }

  // ✅ Forgot Password
  const handleForgetPassword = () => {
    const email = getValues('email')

    if (!email) {
      return toast.error('Please enter your email first')
    }

    forgetPassword(email)
      .then(() => {
        toast.success('Password reset link sent to your email 📩')
      })
      .catch(error => {
        toast.error(error.message)
      })
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        {/* Left Side Animation Section */}
        <div className="hidden lg:flex relative items-center justify-center p-10 bg-linear-to-br from-cyan-500/20 to-purple-600/20">
          <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative z-10 w-72 h-72 rounded-full border-10 border-cyan-400/40 flex items-center justify-center shadow-[0_0_60px_#22d3ee]"
          >
            <div className="w-48 h-48 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-2xl">
              <FaRocket className="text-white text-7xl" />
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold">Welcome to AetherAI</h2>
            <p className="text-gray-300 mt-2">
              Smart Social Media Platform with AI Power 🚀
            </p>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div className="p-6 sm:p-10 md:p-14">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              Login Account
            </h2>
            <p className="text-gray-400 mb-8">Access your AetherAI dashboard</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="text-gray-300 text-sm">Email</label>
                <div className="relative mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required'
                    })}
                    className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <FaUserCircle className="absolute right-4 top-4 text-gray-400" />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-gray-300 text-sm">Password</label>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    {...register('password', {
                      required: 'Password is required'
                    })}
                    className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={btnLoading}
                className="w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 hover:shadow-[0_0_30px_#22d3ee] transition-all duration-300"
              >
                {btnLoading ? (
                  <span className="flex justify-center items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Logging In...
                  </span>
                ) : (
                  'Login Now'
                )}
              </motion.button>

              {/* Google Login */}
              <GoogleLogin/>

              {/* Register */}
              <p className="text-center text-gray-400 pt-4">
                Don’t have an account?{' '}
                <Link
                  to="/register"
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  Register
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login
