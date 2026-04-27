import React from 'react'
import { motion } from 'motion/react'
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaRocket,
  FaComments
} from 'react-icons/fa'

export default function ContactModern() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] overflow-hidden py-20">
      {/* Animated Glow Background */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Let’s Build Something{' '}
            <span className="text-cyan-400">Powerful</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Connect with AetherAI — we turn ideas into viral social media growth
            systems.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {/* Left Floating Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400 transition duration-500"
          >
            <FaRocket className="text-cyan-400 text-3xl" />

            <h3 className="text-xl font-bold mt-5 text-white">
              Fast Growth System
            </h3>

            <p className="text-gray-400 mt-3 text-sm leading-7">
              AI-powered marketing funnels that increase your reach, engagement,
              and conversions automatically.
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-500">
              Start Now
            </button>
          </motion.div>

          {/* Middle Main Contact Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition duration-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Contact
            </h3>

            <div className="space-y-4">
              <input
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-white outline-none"
                placeholder="Your Name"
              />
              <input
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-white outline-none"
                placeholder="Your Email"
              />
              <textarea
                rows="4"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 text-white outline-none"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="w-full mt-6 py-4 rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 hover:scale-105 transition duration-500 font-semibold">
              Send Message
            </button>
          </motion.div>

          {/* Right Social Card */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-pink-400 transition duration-500"
          >
            <FaComments className="text-pink-400 text-3xl" />

            <h3 className="text-xl font-bold mt-5">Stay Connected</h3>

            <p className="text-gray-400 mt-3 text-sm">
              Follow us on social platforms and stay updated with latest AI
              marketing trends.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition duration-500 cursor-pointer"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>

            {/* Extra Info */}
            <div className="mt-6 text-sm text-gray-400">
              📍 Dhaka, Bangladesh <br />
              📧 support@aetherai.com <br />
              📞 +880 1234 567 890
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
