import { motion } from 'motion/react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from 'react-icons/fa'

const ContactSection = () => {
  return (
    <div className="relative w-full py-24 bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Get in Touch
          </h2>

          <p className="mt-4 text-gray-400">
            Have a question, project idea, or collaboration? We’re here to help
            you grow your social media with AI-powered tools.
          </p>

          {/* Contact Info Cards */}
          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaPhoneAlt className="text-cyan-400 text-xl" />
              <span>+880 1234 567 890</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaEnvelope className="text-purple-400 text-xl" />
              <span className='hidden md:block'>kyachingpruemarma.info@gmail.com</span>
              <span className='block md:hidden'>kyachingprue@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <FaMapMarkerAlt className="text-pink-400 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
            ></textarea>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactSection
