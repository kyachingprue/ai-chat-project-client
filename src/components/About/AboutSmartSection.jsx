import { motion } from 'motion/react'
import { FaRobot, FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa'

const AboutSmartSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1677442136019-21780ecad995')"
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617]/90 via-[#0f172a]/90 to-[#020617]/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Smart AI Social Platform
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the future of social media powered by artificial
            intelligence. Connect, analyze, and grow faster with smart
            automation tools.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition"
            >
              <FaRobot className="text-sky-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Automation
              </h3>
              <p className="text-gray-300 text-sm">
                Automate your posts, responses, and engagement with powerful AI
                tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition"
            >
              <FaChartLine className="text-pink-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Analytics
              </h3>
              <p className="text-gray-300 text-sm">
                Track performance and improve your strategy with AI-driven
                insights.
              </p>
            </motion.div>
          </div>

          {/* CENTER DESIGN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-linear-to-tr from-sky-500 via-purple-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition"
            >
              <FaUsers className="text-yellow-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Community Growth
              </h3>
              <p className="text-gray-300 text-sm">
                Grow your audience with smart targeting and engagement features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition"
            >
              <FaGlobe className="text-green-400 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Global Reach
              </h3>
              <p className="text-gray-300 text-sm">
                Connect worldwide and expand your influence with AI-powered
                tools.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSmartSection
