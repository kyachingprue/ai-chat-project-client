import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { FaRobot } from 'react-icons/fa'

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
          <FaRobot className="text-2xl text-sky-500" />
          <h2 className="text-white text-xl font-bold">AI Social</h2>
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
