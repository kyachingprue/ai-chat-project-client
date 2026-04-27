import React from 'react'
import { motion } from 'motion/react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaChartLine,
  FaBullhorn
} from 'react-icons/fa'

import technologyImage from '../../../public/technoly_images.jpg'
import bg from '../../assets/dark-background.jpg'

export default function SocialMediaBanner() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Animated Blur Circle */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl">
              <img
                src={technologyImage}
                alt="Social Media Banner"
                className="w-full h-80 md:h-125 object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-5 -right-2 md:right-5 bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-4 rounded-2xl"
            >
              <p className="text-cyan-400 font-bold text-lg">+250%</p>
              <p className="text-gray-200 text-sm">Audience Growth</p>
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold mb-3">
              Grow Your Brand
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              FOR ALL YOUR SEO & ONLINE MARKETING NEEDS
            </h1>

            <p className="text-gray-300 mt-6 leading-8 text-sm md:text-base">
              Maximize your online presence and drive more traffic to your
              website with powerful social media strategies, branding solutions,
              and high-converting campaigns.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                {
                  icon: <FaChartLine />,
                  title: 'SEO Boost'
                },
                {
                  icon: <FaBullhorn />,
                  title: 'Ads Reach'
                },
                {
                  icon: <FaInstagram />,
                  title: 'Brand Growth'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-cyan-500/10 hover:border-cyan-400 transition duration-500"
                >
                  <div className="text-cyan-400 text-2xl group-hover:scale-110 transition duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-white mt-3 text-sm font-semibold">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="mt-8 space-y-4">
              <div className="collapse collapse-arrow bg-white/5 border border-white/10 rounded-2xl">
                <input type="radio" name="faq" defaultChecked />
                <div className="collapse-title text-white font-semibold">
                  How do I create an account?
                </div>
                <div className="collapse-content text-gray-300 text-sm">
                  Click the Sign Up button and complete the quick registration
                  process.
                </div>
              </div>

              <div className="collapse collapse-arrow bg-white/5 border border-white/10 rounded-2xl">
                <input type="radio" name="faq" />
                <div className="collapse-title text-white font-semibold">
                  How can I grow faster?
                </div>
                <div className="collapse-content text-gray-300 text-sm">
                  Use SEO, paid campaigns, content marketing, and analytics to
                  scale quickly.
                </div>
              </div>

              <div className="collapse collapse-arrow bg-white/5 border border-white/10 rounded-2xl">
                <input type="radio" name="faq" />
                <div className="collapse-title text-white font-semibold">
                  Do you support all platforms?
                </div>
                <div className="collapse-content text-gray-300 text-sm">
                  Yes, we support Facebook, Instagram, Twitter, YouTube, TikTok
                  and more.
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-7 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition duration-500 shadow-lg">
                Get Started
              </button>

              <button className="px-7 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition duration-500">
                Learn More
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition duration-500 cursor-pointer"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
