import React from 'react'
import { motion } from 'motion/react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import Spline from '@splinetool/react-spline'

const AboutBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white py-32 px-4 lg:py-20">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="max-w-full md:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-start relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The Future of
            <span className="bg-linear-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
              {' '}
              AI Social Media
            </span>
          </h1>

          <p className="text-gray-400 mb-6 text-center lg:text-start">
            Our platform connects people across the world using intelligent AI,
            real-time interaction, and next-generation social experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="p-3 rounded-full bg-white/10 hover:bg-linear-to-r
                from-sky-500 to-purple-500 transition-all duration-300 cursor-pointer"
              >
                <Icon />
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-linear-to-r
            from-sky-500 via-blue-600 to-purple-600
            shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
            transition duration-500"
          >
            Explore Platform 🚀
          </motion.button>
        </motion.div>

        {/* RIGHT 3D SPLINE / ROTATING OBJECT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-75 md:h-100 lg:h-125 rounded-2xl overflow-hidden border border-white/10 shadow-xl"
        >
          <Spline scene="https://prod.spline.design/2PZOdd84M-SRHYFR/scene.splinecode" />
        </motion.div>
      </div>

      {/* Floating Blur Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl"></div>
    </section>
  )
}

export default AboutBanner
