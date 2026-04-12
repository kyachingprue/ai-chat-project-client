import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import * as THREE from 'three'

import {
  FaBrain,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaGlobe
} from 'react-icons/fa'

const features = [
  {
    icon: <FaBrain />,
    title: 'AI-Powered Content',
    desc: 'Generate viral posts, captions, and hashtags using advanced AI models.'
  },
  {
    icon: <FaRocket />,
    title: 'Fast Growth Tools',
    desc: 'Boost your social media reach with smart automation and scheduling.'
  },
  {
    icon: <FaUsers />,
    title: 'Team Collaboration',
    desc: 'Work with your team in real-time on campaigns and content planning.'
  },
  {
    icon: <FaChartLine />,
    title: 'Analytics Dashboard',
    desc: 'Track engagement, growth, and performance with real-time insights.'
  },
  {
    icon: <FaGlobe />,
    title: 'Multi-Platform Support',
    desc: 'Manage Instagram, Facebook, TikTok, X, and more in one place.'
  }
]

const AboutSection = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

 useEffect(() => {
   const loadVanta = async () => {
     const THREE = await import('three')
     await import('vanta/dist/vanta.net.min')

     if (!vantaEffect.current && window.VANTA) {
       vantaEffect.current = window.VANTA.NET({
         el: vantaRef.current,
         THREE: THREE,
         mouseControls: true,
         touchControls: true,
         gyroControls: false,
         minHeight: 200.0,
         minWidth: 200.0,
         scale: 1.0,
         scaleMobile: 1.0,
         color: 0x1515c0,
         backgroundColor: 0x020617,
         points: 12.0
       })
     }
   }

   loadVanta()

   return () => {
     if (vantaEffect.current) vantaEffect.current.destroy()
   }
 }, [])

  return (
    <div
      ref={vantaRef}
      className="relative w-full py-24 text-white overflow-hidden"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl lg:text-5xl font-bold bg-linear-to-r from-cyan-100 to-blue-50 text-transparent bg-clip-text"
        >
          About Our AI Social Media Platform
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto"
        >
          We are building the future of social media growth using AI.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400 transition"
          >
            <div className="text-3xl text-cyan-400 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-auto mt-20 px-6"
      >
        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 text-center backdrop-blur-xl">
          <h3 className="text-2xl md:text-3xl font-bold">
            Build, Grow & Automate 🚀
          </h3>

          <button className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-cyan-700 to-pink-700 font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutSection
