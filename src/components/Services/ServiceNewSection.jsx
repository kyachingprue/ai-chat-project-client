import React from 'react'
import { motion } from 'motion/react'
import {
  FaRobot,
  FaBullhorn,
  FaChartLine,
  FaVideo,
  FaSearch,
  FaPalette
} from 'react-icons/fa'

export default function ServiceNewSection() {
  const services = [
    {
      icon: <FaRobot />,
      title: 'AI Automation',
      desc: 'Automate your social media posts, replies, and campaigns using smart AI systems.'
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      desc: 'Run high-converting ad campaigns across Facebook, Instagram, and Google.'
    },
    {
      icon: <FaChartLine />,
      title: 'Growth Analytics',
      desc: 'Track performance, engagement, and ROI with real-time dashboards.'
    },
    {
      icon: <FaVideo />,
      title: 'Video Content Strategy',
      desc: 'Create viral reels, shorts, and promotional videos for social growth.'
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      desc: 'Rank your business higher on Google with advanced SEO strategies.'
    },
    {
      icon: <FaPalette />,
      title: 'Brand Design',
      desc: 'Modern UI/UX design, branding, and creative identity building.'
    }
  ]

  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white py-20 md:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Smart <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            We provide complete digital solutions powered by AI, automation, and
            modern marketing strategies for business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400 transition duration-500 overflow-hidden"
            >
              {/* Glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-cyan-500/10 to-pink-500/10"></div>

              {/* Icon */}
              <div className="relative text-cyan-400 text-3xl mb-4 group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="relative text-gray-400 mt-3 text-sm leading-7">
                {item.desc}
              </p>

              {/* Bottom Line Animation */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to grow your business with AI?
          </h3>

          <button className="mt-6 px-10 py-4 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 hover:scale-105 transition duration-500 font-semibold shadow-xl">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}
