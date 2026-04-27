import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import chatbot from '../../public/chat-bot.png'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* LEFT: MENU + LOGO */}
          <div className="flex items-center gap-3">
            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              <FaBars />
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={chatbot} className="w-8 h-8" />
              <Link
                to="/"
                className="relative inline-block px-2 py-0.5 rounded-lg overflow-hidden"
              >
                {' '}
                {/* Text */}{' '}
                <h2 className="text-md md:text-xl font-bold text-white relative z-10">
                  {' '}
                  AetherAI{' '}
                </h2>{' '}
                {/* Animated border */}{' '}
                <span className="absolute inset-0 rounded-lg border-2 border-transparent bg-[linear-gradient(270deg,#ec4899,#3b82f6,#7e22ce,#ec4899)] bg-size-[600%_600%] animate-borderGradient"></span>{' '}
              </Link>
            </div>
          </div>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-white">
            <NavLink to="/" className="hover:text-sky-400">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-sky-400">
              About
            </NavLink>
            <NavLink to="/services" className="hover:text-sky-400">
              Services
            </NavLink>
            <NavLink to="/contact" className="hover:text-sky-400">
              Contact
            </NavLink>
          </div>
          {/* RIGHT SIDE */}
          {/* Buttons */}{' '}
          <div className="flex items-center space-x-1 md:space-x-4">
            {' '}
            {user ? (
              <Link to="/profile">
                {' '}
                <div className="relative group cursor-pointer">
                  {' '}
                  {/* User Image */}{' '}
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : 'https://i.ibb.co/4pDNDk1/avatar.png'
                    }
                    alt="user"
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-sky-500 object-cover hover:scale-110 transition duration-300 shadow-lg"
                  />{' '}
                  {/* Hover Name */}{' '}
                  <div className="absolute right-0 top-12 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50">
                    {' '}
                    <div className="px-3 py-2 rounded-lg bg-black text-white text-sm whitespace-nowrap border border-sky-500 shadow-xl">
                      {' '}
                      {user.displayName || 'User'}{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </Link>
            ) : (
              <>
                {' '}
                <Link to="/login">
                  {' '}
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#0ea5e9' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md border border-sky-500 text-white hover:bg-sky-500 transition-colors duration-300"
                  >
                    {' '}
                    Login{' '}
                  </motion.button>{' '}
                </Link>{' '}
                <Link to="/register">
                  {' '}
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: '0 0 15px #38bdf8' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md bg-sky-500 text-black hover:text-white font-semibold hover:bg-sky-600 transition-all duration-300"
                  >
                    {' '}
                    Register{' '}
                  </motion.button>{' '}
                </Link>{' '}
              </>
            )}{' '}
          </div>
        </div>
      </motion.nav>

      {/* BACKDROP */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark overlay */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* LEFT SIDEBAR */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-72 h-full bg-[#0a0a0a] z-50 p-6 shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="text-white text-xl mb-8"
              >
                <FaTimes />
              </button>

              {/* Logo */}
              <div className="flex items-center gap-2 mb-10">
                <img src={chatbot} className="w-8 h-8" />
                <h2 className="text-white font-bold text-lg">AetherAI</h2>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-white text-lg">
                <NavLink onClick={() => setOpen(false)} to="/">
                  Home
                </NavLink>
                <NavLink onClick={() => setOpen(false)} to="/about">
                  About
                </NavLink>
                <NavLink onClick={() => setOpen(false)} to="/services">
                  Services
                </NavLink>
                <NavLink onClick={() => setOpen(false)} to="/contact">
                  Contact
                </NavLink>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-6 text-gray-400 text-sm">
                🚀 AetherAI Dashboard <br />
                Smart Social Media System
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
