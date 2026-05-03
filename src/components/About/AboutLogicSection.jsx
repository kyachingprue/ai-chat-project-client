import { motion } from 'motion/react';
import { FaBrain, FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa'

export default function AboutLogicSection() {
  return (
    <section className="w-full bg-linear-to-b from-gray-950 via-gray-900 to-black text-white py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Transforming Ideas into{' '}
            <span className="text-indigo-500">Intelligent Solutions</span>
          </h2>

          <p className="text-gray-300 mb-6 text-base md:text-lg">
            We build next-generation AI-powered systems that help businesses
            grow faster, smarter, and more efficiently. Our mission is to merge
            creativity with cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 border border-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition"
              >
                <div className="text-indigo-500 text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT 3D STYLE VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-70 h-70 md:w-87.5 md:h-87.5">
            {/* Rotating Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute inset-0 border-2 border-indigo-500 rounded-full"
            />

            {/* Inner Glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-10 bg-indigo-500/20 blur-2xl rounded-full"
            />

            {/* Center Brain Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 flex justify-center items-center text-6xl text-indigo-500"
            >
              <FaBrain />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <FaBrain />,
    title: 'AI Intelligence',
    desc: 'Advanced machine learning models to automate and optimize workflows.'
  },
  {
    icon: <FaRocket />,
    title: 'Fast Performance',
    desc: 'Lightning-fast systems built for modern scalable applications.'
  },
  {
    icon: <FaUsers />,
    title: 'User Focused',
    desc: 'Designed with real users in mind for better experience.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure Systems',
    desc: 'Enterprise-grade security to protect your data.'
  }
]
