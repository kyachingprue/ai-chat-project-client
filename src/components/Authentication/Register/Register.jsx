import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaImage,
  FaRocket
} from 'react-icons/fa'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'
import useAuth from '../../../hooks/useAuth'
import GoogleLogin from '../google/GoogleLogin'

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [showPass, setShowPass] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)

  const onSubmit = async data => {
    try {
      setBtnLoading(true)

      await createUser(data.email, data.password)

      await updateUserProfile(data.name, data.photoURL)

      toast.success('Account created successfully 🚀')

      reset()

      await logOut()

      navigate('/login', {
        state: { from: { pathname: from } }
      })
    } catch (error) {
      toast.error(error.message)
    } finally {
      setBtnLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#020617] via-[#0f172a] to-[#111827] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
        {/* Left Side */}
        <div className="hidden lg:flex relative items-center justify-center p-10 bg-linear-to-br from-cyan-500/20 to-purple-600/20 overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-cyan-400/30 blur-3xl animate-pulse top-10 left-10"></div>
          <div className="absolute w-72 h-72 rounded-full bg-purple-500/30 blur-3xl animate-pulse bottom-10 right-10"></div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="w-72 h-72 rounded-full border-10 border-cyan-300/40 flex items-center justify-center relative z-10 shadow-[0_0_60px_#22d3ee]"
          >
            <div className="w-44 h-44 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center">
              <FaRocket className="text-white text-7xl" />
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-10 text-white z-10">
            <h2 className="text-4xl font-bold mb-2">Join AetherAI</h2>
            <p className="text-gray-300 max-w-sm">
              Build your future social media journey with AI power, creativity,
              and smart connections.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-6 sm:p-10 md:p-14">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h2>
            <p className="text-gray-400 mb-8">
              Register and start your AetherAI journey
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-300">Full Name</label>

                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register('name', {
                      required: 'Name is required'
                    })}
                    className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                  <FaUser className="absolute right-4 top-4 text-gray-400" />
                </div>

                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-gray-300">Email Address</label>

                <div className="relative mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required'
                    })}
                    className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <FaEnvelope className="absolute right-4 top-4 text-gray-400" />
                </div>

                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Photo URL */}
              <div>
                <label className="text-sm text-gray-300">Photo URL</label>

                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Enter photo url"
                    {...register('photoURL')}
                    className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  <FaImage className="absolute right-4 top-4 text-gray-400" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-gray-300">Password</label>

                <div className="relative mt-2">
                  <input
                    type={showPass ? 'text' : 'password'}
                    placeholder="Create password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                        message: 'Need uppercase, lowercase & number'
                      }
                    })}
                    className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-4 text-gray-300"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                disabled={btnLoading}
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 hover:shadow-[0_0_30px_#22d3ee] transition-all duration-300"
              >
                {btnLoading ? (
                  <span className="flex justify-center items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Creating...
                  </span>
                ) : (
                  'Create Account'
                )}
              </motion.button>
              
              {/* Google Register */}
              <GoogleLogin/>

              {/* Login Link */}
              <p className="text-center text-gray-400 pt-4">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Register
