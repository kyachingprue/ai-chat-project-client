import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import chatbot from "../../public/chat-bot.png"
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { user } = useAuth();
  console.log("user data-->",user);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-full md:max-w-7xl mx-auto px-2 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={chatbot}
            alt="Chatbot"
            className="w-7 h-7 md:w-9 md:h-9 object-contain"
          />
          <Link
            to="/"
            className="relative inline-block px-2 py-0.5 rounded-lg overflow-hidden"
          >
            {/* Text */}
            <h2 className="text-md md:text-xl font-bold text-white relative z-10">
              AetherAI
            </h2>

            {/* Animated border */}
            <span
              className="absolute inset-0 rounded-lg border-2 border-transparent
                   bg-[linear-gradient(270deg,#ec4899,#3b82f6,#7e22ce,#ec4899)]
                   bg-size-[600%_600%] animate-borderGradient"
            ></span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-3 md:space-x-6 lg:space-x-9">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? 'text-sky-400 underline underline-offset-8'
                  : 'text-white hover:text-sky-300'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? 'text-sky-400 underline underline-offset-8'
                  : 'text-white hover:text-sky-300'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? 'text-sky-400 underline underline-offset-8'
                  : 'text-white hover:text-sky-300'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive
                  ? 'text-sky-400 underline underline-offset-8'
                  : 'text-white hover:text-sky-300'
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-1 md:space-x-4">
          {user ? (
            <Link to="/profile">
              <div className="relative group cursor-pointer">
                {/* User Image */}
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : 'https://i.ibb.co/4pDNDk1/avatar.png'
                  }
                  alt="user"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-sky-500 object-cover hover:scale-110 transition duration-300 shadow-lg"
                />

                {/* Hover Name */}
                <div className="absolute right-0 top-12 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50">
                  <div className="px-3 py-2 rounded-lg bg-black text-white text-sm whitespace-nowrap border border-sky-500 shadow-xl">
                    {user.displayName || 'User'}
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#0ea5e9' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md border border-sky-500 text-white hover:bg-sky-500 transition-colors duration-300"
                >
                  Login
                </motion.button>
              </Link>

              <Link to="/register">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 15px #38bdf8'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md bg-sky-500 text-black hover:text-white font-semibold hover:bg-sky-600 transition-all duration-300"
                >
                  Register
                </motion.button>
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
