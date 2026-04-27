import React from 'react'
import { motion } from 'motion/react'
import { FaRocket, FaBrain, FaChartLine, FaUsers } from 'react-icons/fa'

export default function AboutNewSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden py-20 md:py-28">
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
            About <span className="text-cyan-400">AetherAI</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            We are building the future of social media marketing with AI-powered
            automation, smart analytics, and viral content systems designed for
            modern businesses.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {[
            { number: '25K+', label: 'Active Users' },
            { number: '320%', label: 'Growth Rate' },
            { number: '10K+', label: 'Campaigns' },
            { number: '98%', label: 'Success Rate' }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400 transition duration-500"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {item.number}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-center">
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              Smarter Marketing with AI Automation
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              AetherAI helps businesses grow faster using AI-driven social media
              strategies, content automation, and advanced analytics that
              convert audiences into customers.
            </p>

            <button className="mt-8 px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-500 font-semibold">
              Learn More
            </button>
          </motion.div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <FaBrain />,
                title: 'AI Automation',
                desc: 'Smart AI tools for content & marketing automation'
              },
              {
                icon: <FaRocket />,
                title: 'Fast Growth',
                desc: 'Rapid audience and brand growth strategies'
              },
              {
                icon: <FaChartLine />,
                title: 'Analytics',
                desc: 'Real-time performance tracking system'
              },
              {
                icon: <FaUsers />,
                title: 'Community',
                desc: 'Engaged global creator network'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-500"
              >
                <div className="text-cyan-400 text-2xl">{item.icon}</div>
                <h4 className="text-white font-semibold mt-3">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
