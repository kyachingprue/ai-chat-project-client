import React from 'react'
import { motion } from 'motion/react'
import { FaRobot, FaUsers, FaFire, FaComments } from 'react-icons/fa'

const features = [
  {
    icon: <FaRobot />,
    title: 'AI Smart Feed',
    desc: 'Personalized content powered by advanced AI algorithms.'
  },
  {
    icon: <FaUsers />,
    title: 'Community Driven',
    desc: 'Connect with people who share your interests instantly.'
  },
  {
    icon: <FaFire />,
    title: 'Trending Now',
    desc: 'Discover viral posts and hot topics in real-time.'
  },
  {
    icon: <FaComments />,
    title: 'Realtime Chat',
    desc: 'Engage with friends and AI in live conversations.'
  }
]

const SmartSocialSection = () => {
  return (
    <section className="py-16 h-full md:min-h-screen px-4 bg-[#020617] text-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Next-Gen AI Social Experience
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Experience the future of social media with intelligent feeds, smart
          interactions, and real-time engagement.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative group bg-[#0f172a] p-6 rounded-2xl border border-white/10 hover:border-sky-400 transition-all duration-300 shadow-lg"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/0 to-purple-500/0 group-hover:from-sky-500/10 group-hover:to-purple-500/10 blur-xl transition-all"></div>

            {/* Icon */}
            <div className="text-3xl mb-4 text-sky-400 group-hover:text-purple-400 transition-colors">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 hover:scale-110 transition-transform duration-300 shadow-lg">
          Explore AI Platform 🚀
        </button>
      </motion.div>
    </section>
  )
}

export default SmartSocialSection
