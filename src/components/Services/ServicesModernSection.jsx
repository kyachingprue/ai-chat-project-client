import { motion } from 'motion/react'
import {
  FaRobot,
  FaCode,
  FaCloud,
  FaChartLine,
  FaCogs,
  FaBrain
} from 'react-icons/fa'

export default function ServicesModernSection() {
  return (
    <section className="w-full bg-linear-to-b from-black via-gray-950 to-gray-900 text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our <span className="text-indigo-500">AI Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Powerful AI-driven solutions designed to transform your business with
          automation, intelligence, and scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 overflow-hidden hover:border-indigo-500 transition"
          >
            {/* 3D ROTATING GLOW ORB */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"
            />

            {/* FLOAT ICON */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="text-4xl text-indigo-500 mb-4"
            >
              {service.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

            <p className="text-gray-400 text-sm mb-4">{service.desc}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto inline-block px-5 py-2 text-sm bg-indigo-500/10 border border-indigo-500 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
            >
              Learn More
            </motion.button>

            {/* HOVER 3D TILT EFFECT */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              whileHover={{ rotateX: 5, rotateY: -5 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
          </motion.div>
        ))}
      </div>

      {/* CENTER 360 ANIMATION VISUAL */}
      <div className="flex justify-center mt-20">
        <div className="relative w-65 h-65 md:w-[320px] md:h-80">
          {/* OUTER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="absolute inset-0 border border-indigo-500 rounded-full"
          />

          {/* MIDDLE RING */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="absolute inset-6 border border-indigo-400/60 rounded-full"
          />

          {/* INNER GLOW */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute inset-12 bg-indigo-500/20 blur-2xl rounded-full"
          />

          {/* CENTER ICON */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute inset-0 flex justify-center items-center text-5xl text-indigo-500"
          >
            <FaBrain />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: <FaRobot />,
    title: 'AI Automation',
    desc: 'Automate repetitive tasks using intelligent AI systems to boost productivity.'
  },
  {
    icon: <FaCode />,
    title: 'Custom AI Development',
    desc: 'Tailor-made AI solutions designed specifically for your business needs.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud AI Integration',
    desc: 'Seamless AI integration with cloud infrastructure for scalability.'
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analytics',
    desc: 'Advanced data insights powered by machine learning models.'
  },
  {
    icon: <FaCogs />,
    title: 'AI Optimization',
    desc: 'Improve system performance using intelligent optimization techniques.'
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning',
    desc: 'Build smart systems that learn and evolve with your data.'
  }
]
