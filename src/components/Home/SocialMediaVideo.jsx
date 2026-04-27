import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'
import {
  FaPlay,
  FaPause,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaChartLine,
  FaUsers
} from 'react-icons/fa'
import videoPoster from '../../assets/video/project_video.mp4'

export default function SocialMediaVideo() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoPlay = async () => {
    if (!videoRef.current) return

    try {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        await videoRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
              Social Media Strategy
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 leading-tight">
              Watch How We Grow Brands Through Video Content
            </h2>

            <p className="text-gray-400 leading-8 mt-6 text-sm md:text-base">
              Powerful short-form videos, engaging reels, viral campaigns, and
              data-driven marketing strategies that increase followers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-500">
                <FaChartLine className="text-cyan-400 text-2xl" />
                <h4 className="text-white text-2xl font-bold mt-3">+320%</h4>
                <p className="text-gray-400 text-sm mt-1">Engagement Growth</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-pink-400 transition duration-500">
                <FaUsers className="text-pink-400 text-2xl" />
                <h4 className="text-white text-2xl font-bold mt-3">+50K</h4>
                <p className="text-gray-400 text-sm mt-1">New Followers</p>
              </div>
            </div>

            {/* Updated Button Logic */}
            <button
              onClick={handleVideoPlay}
              className="group relative mt-8 overflow-hidden px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 active:scale-95 transition duration-500"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

              <span className="relative z-10 flex items-center gap-3">
                {isPlaying ? 'Pause Campaign' : 'Start Campaign'}

                <span className="bg-white/20 p-2 rounded-full">
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </span>
              </span>
            </button>

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

          {/* Right Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <video
                ref={videoRef}
                loop
                controls
                playsInline
                className="w-full h-65 md:h-125 object-cover"
                poster="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb"
              >
                <source src={videoPoster} type="video/mp4" />
              </video>

              {/* Playing Badge */}
              <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md">
                {isPlaying ? 'Now Playing ●' : 'Ready To Play'}
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white text-xl font-bold">
                  Viral Content Production
                </h4>
                <p className="text-gray-300 text-sm mt-2">
                  Reels, Shorts, Ads & Promotional Campaign Videos
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-5 -left-2 md:left-5 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-4 rounded-2xl"
            >
              <p className="text-pink-400 text-lg font-bold">98% Success</p>
              <p className="text-gray-300 text-sm">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
