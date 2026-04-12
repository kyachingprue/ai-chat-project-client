import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'
import Spline from '@splinetool/react-spline'

const ServiceBanner = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 text-white">
      {/* 🌈 Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b]"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-sky-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Powerful AI Services for
            <span className="bg-linear-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
              {' '}
              Next-Level Social Media
            </span>
          </h1>

          <p className="text-gray-400 max-w-lg mb-6">
            Boost your social presence with AI-driven automation, smart
            analytics, and real-time engagement tools. We help you grow faster
            and smarter in the digital world.
          </p>

          {/* 🚀 Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl
            bg-linear-to-r from-sky-500 via-blue-600 to-purple-600
            shadow-lg overflow-hidden transition-all duration-500"
          >
            {/* Shine */}
            <span
              className="absolute -left-20 top-0 h-full w-20 bg-white/20 blur-md rotate-12
            group-hover:left-full transition-all duration-700"
            ></span>

            <FaRocket className="relative z-10" />
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </motion.div>

        {/* 🧊 RIGHT SIDE SPLINE 3D */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-75 md:h-100 lg:h-125"
        >
          <Spline scene="https://prod.spline.design/Q-5-LrTwmQmgllsH/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceBanner
