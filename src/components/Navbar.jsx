import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { FaRobot } from 'react-icons/fa'
import chatbot from "../../public/chat-bot.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
            <h2 className="text-xl font-bold text-white relative z-10">
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

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#0ea5e9' }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-md border border-sky-500 text-white hover:bg-sky-500 transition-colors duration-300"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px #38bdf8' }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-md bg-sky-500 text-black font-semibold hover:bg-sky-600 transition-all duration-300"
          >
            Register
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
