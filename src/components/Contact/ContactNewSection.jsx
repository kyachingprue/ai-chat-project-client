import React from 'react'
import { motion } from 'motion/react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa'

export default function ContactNewSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white py-20 overflow-hidden">
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
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Let’s build something amazing together. Contact us for social media
            marketing, AI automation, and digital growth solutions.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-start">
          {/* Left Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              ></textarea>

              <button className="w-full py-4 rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 hover:scale-105 transition duration-500 font-semibold">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid gap-5">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 transition duration-500">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400 text-sm">support@aetherai.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-pink-400 transition duration-500">
                <FaPhoneAlt className="text-pink-400 text-xl" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400 text-sm">+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-400 transition duration-500">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>

              <div className="flex gap-4">
                {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition duration-500 cursor-pointer"
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-linear-to-r from-cyan-500/20 to-pink-500/20 border border-white/10 rounded-3xl p-6 mt-8">
              <h3 className="text-xl font-bold">Let’s Build Your Brand 🚀</h3>
              <p className="text-gray-300 text-sm mt-2">
                We help businesses grow with AI marketing, social media
                strategy, and viral content systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
