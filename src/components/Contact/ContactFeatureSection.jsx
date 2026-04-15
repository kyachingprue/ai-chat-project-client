import { motion } from 'motion/react'
import { FaBolt, FaUsers, FaRocket, FaHeadset } from 'react-icons/fa'

const features = [
  {
    icon: <FaBolt />,
    title: 'Fast Response',
    desc: 'We reply within minutes to ensure your business never stops growing.'
  },
  {
    icon: <FaUsers />,
    title: 'Expert Team',
    desc: 'Our professionals help you scale your social media with smart strategies.'
  },
  {
    icon: <FaRocket />,
    title: 'Growth Focused',
    desc: 'We don’t just work, we focus on real results and audience growth.'
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Support',
    desc: 'Always available to support you anytime, anywhere.'
  }
]

const ContactFeatureSection = () => {
  return (
    <section className="relative py-20 px-6 bg-[#020617] text-white overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute w-100 h-100 bg-purple-600/20 blur-[120px] -top-25 -right-25"></div>
      <div className="absolute w-100 h-100 bg-cyan-500/20 blur-[120px] -bottom-25 -left-25"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Why Contact Us?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We provide smart solutions to boost your social media growth with
            real results.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-px rounded-2xl bg-linear-to-r from-purple-500 via-cyan-500 to-pink-500 group"
            >
              <div className="bg-[#020617]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-transparent transition duration-300 h-full">
                {/* Icon */}
                <div className="text-3xl mb-4 text-cyan-400 group-hover:text-pink-400 transition duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">{item.desc}</p>

                {/* Hover line */}
                <div className="mt-4 h-0.5 w-0 bg-linear-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Still thinking? Let’s start your journey today 🚀
          </p>

          <button className="px-8 py-3 rounded-full font-semibold bg-linear-to-r from-purple-500 via-cyan-500 to-pink-500 hover:scale-110 transition duration-300 shadow-lg">
            Get In Touch ⚡
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactFeatureSection
