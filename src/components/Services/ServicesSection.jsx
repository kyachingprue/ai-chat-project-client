import { motion } from 'motion/react'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const services = [
  {
    icon: <FaInstagram />,
    title: 'Instagram Growth',
    desc: 'Boost your followers with smart AI strategies and engaging content planning.'
  },
  {
    icon: <FaFacebookF />,
    title: 'Facebook Marketing',
    desc: 'Reach targeted audiences and grow your brand with powerful campaigns.'
  },
  {
    icon: <FaTwitter />,
    title: 'Twitter Engagement',
    desc: 'Increase impressions and engagement with trending strategies.'
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube Optimization',
    desc: 'Optimize your videos for SEO and get more views and subscribers.'
  }
]

const ServicesSection = () => {
  return (
    <section className="relative py-20 px-6 bg-linear-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-125 h-125 bg-purple-600/20 rounded-full blur-[120px] -top-25 -left-25"></div>
      <div className="absolute w-100 h-100 bg-cyan-500/20 rounded-full blur-[120px] -bottom-25 -right-25"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Powerful Social Media Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We provide cutting-edge solutions to grow your digital presence and
            dominate social platforms.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-px rounded-2xl bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500"
            >
              <div className="bg-[#020617]/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 group-hover:border-transparent transition duration-300">
                {/* Icon */}
                <div className="text-4xl mb-4 text-cyan-400 group-hover:text-pink-400 transition duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">{service.desc}</p>

                {/* Hover line */}
                <div className="mt-4 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-3 rounded-full font-semibold bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 hover:scale-110 transition duration-300 shadow-lg">
            Explore More 🚀
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
