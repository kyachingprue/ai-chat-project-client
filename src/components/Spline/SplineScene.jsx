import React from 'react'
import { motion } from 'motion/react'
import {
  FaPlay,
  FaArrowRight,
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from 'react-icons/fa'
import Spline from '@splinetool/react-spline'
import './SplineScene.scss'

export default function SplineScene() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#040404]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#07152d] to-[#12061f]"></div>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-cyan-400 text-sm font-medium">
              🚀 AI Powered Social Media Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight">
              Grow Your Brand With
              <span className="block bg-linear-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                AetherAI Marketing
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 mt-6 leading-8 max-w-xl text-sm md:text-base">
              Smart automation, viral content strategies, powerful analytics, AI
              engagement tools, and high-converting campaigns designed for
              modern businesses.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="group px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition duration-500 shadow-xl flex items-center gap-2">
                Launch Campaign
                <FaArrowRight className="group-hover:translate-x-1 transition duration-500" />
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition duration-500 flex items-center gap-2">
                <FaPlay />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <h3 className="text-cyan-400 text-2xl font-bold">25K+</h3>
                <p className="text-gray-400 text-sm mt-1">Followers Growth</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <h3 className="text-pink-400 text-2xl font-bold">320%</h3>
                <p className="text-gray-400 text-sm mt-1">ROI Increase</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <h3 className="text-blue-400 text-2xl font-bold">10K+</h3>
                <p className="text-gray-400 text-sm mt-1">Clients Served</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition duration-500 cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Spline 3D Section */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Card Frame */}
            <div className="relative h-100 md:h-162.5 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Spline scene="https://prod.spline.design/F6af7Pj44nohTbHa/scene.splinecode" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-5 left-4 md:left-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4"
            >
              <p className="text-cyan-400 font-bold text-lg">
                AI Insights Live
              </p>
              <p className="text-gray-300 text-sm">
                Tracking audience behavior
              </p>
            </motion.div>

            {/* Floating Top Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-5 right-5 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3"
            >
              <p className="text-white text-sm">+5.2K Today</p>
              <p className="text-pink-400 text-xs">New Engagement</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
