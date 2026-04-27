import React from 'react'
import { motion } from 'motion/react'
import {
  FaArrowRight,
  FaHeartbeat,
  FaBullhorn,
  FaChartLine,
  FaUsers
} from 'react-icons/fa'
import socialMediaImage from '../../assets/technoloy.jpg'

const features = [
  {
    id: '01',
    title: 'Healthcare Expertise',
    desc: 'Specialized marketing strategies designed for medical brands, clinics, and healthcare institutions.',
    icon: <FaHeartbeat />
  },
  {
    id: '02',
    title: 'Growth Marketing',
    desc: 'Boost engagement, leads, and audience reach using data-driven social campaigns.',
    icon: <FaBullhorn />
  },
  {
    id: '03',
    title: 'Performance Analytics',
    desc: 'Track every campaign result with smart insights, reports, and conversion optimization.',
    icon: <FaChartLine />
  }
]

export default function DigitalWorldSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-28 min-h-screen bg-linear-to-br from-black via-blue-900 to-pink-800">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="uppercase text-sm tracking-[3px] rounded-full bg-white/10 border border-white/20 text-white px-5 py-2 backdrop-blur-xl">
            Why Choose Us
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              Smarter Social Media for a Smarter World
            </h2>

            <button className="group w-fit px-7 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-500 flex items-center gap-2">
              Explore
              <FaArrowRight className="group-hover:translate-x-1 transition duration-500" />
            </button>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
              <img
                src={socialMediaImage}
                alt="Social Media"
                className="w-full h-87.5 md:h-155 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-4 right-4 bottom-4 bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="text-white text-2xl font-bold">15+</h3>
                  <p className="text-gray-300 text-sm">Years Experience</p>
                </div>

                <div>
                  <h3 className="text-cyan-400 text-2xl font-bold">435+</h3>
                  <p className="text-gray-300 text-sm">Expert Team</p>
                </div>

                <div>
                  <h3 className="text-pink-400 text-2xl font-bold">54+</h3>
                  <p className="text-gray-300 text-sm">Awards</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.1 }}
                className="group rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:border-cyan-400 hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] transition duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-cyan-400 text-xl group-hover:rotate-12 transition duration-500">
                    {item.icon}
                  </div>

                  <div>
                    <button className="text-xs px-3 py-1 rounded-full bg-white text-black font-semibold">
                      {item.id}
                    </button>

                    <h3 className="text-xl text-white font-semibold mt-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 mt-3 leading-7 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Extra Mini Card */}
            <div className="rounded-3xl p-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xl">10K+ Clients</h4>
                <p className="text-sm text-white/80 mt-1">
                  Trusted by global brands
                </p>
              </div>

              <FaUsers className="text-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
