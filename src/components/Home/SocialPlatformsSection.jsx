import React from 'react'
import { motion } from 'motion/react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaDiscord
} from 'react-icons/fa'

const platforms = [
  {
    name: 'Facebook',
    icon: <FaFacebookF />,
    color: 'from-blue-500 to-blue-700',
    desc: 'Connect with friends and build communities worldwide.'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    color: 'from-sky-400 to-sky-600',
    desc: 'Stay updated with real-time news and trending topics.'
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    color: 'from-pink-500 via-red-500 to-yellow-500',
    desc: 'Share photos, reels, and creative visual content.'
  },
  {
    name: 'YouTube',
    icon: <FaYoutube />,
    color: 'from-red-500 to-red-700',
    desc: 'Watch and share videos with a global audience.'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    color: 'from-blue-400 to-blue-600',
    desc: 'Build your professional network and career.'
  },
  {
    name: 'Discord',
    icon: <FaDiscord />,
    color: 'from-indigo-500 to-purple-600',
    desc: 'Join communities and chat in real-time.'
  }
]

const SocialPlatformsSection = () => {
  return (
    <section className="py-6 md:py-28 px-4 bg-[#020617] text-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Connect Across Social Platforms
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore powerful social media platforms enhanced with AI-driven
          insights and seamless interaction.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group relative rounded-2xl p-6 bg-[#0f172a] border border-white/10
            hover:border-transparent transition-all duration-500 overflow-hidden shadow-lg"
          >
            {/* Gradient Glow Background */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-linear-to-r ${item.color} blur-2xl`}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div
                className={`text-3xl mb-4 inline-block p-3 rounded-xl bg-linear-to-r ${item.color}
              group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

              {/* Button */}
              <button
                className="text-xs px-4 py-2 rounded-full bg-white/10
              hover:bg-white/20 transition-all duration-300"
              >
                Explore →
              </button>
            </div>

            {/* Hover Shine Line */}
            <div
              className="absolute -left-full top-0 w-full h-full bg-white/10
            skew-x-12 group-hover:left-full transition-all duration-700"
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SocialPlatformsSection
