import { motion } from 'motion/react'
import { FaGlobe, FaComments, FaHeadset, FaNetworkWired } from 'react-icons/fa'

export default function ContactModernSection() {
  return (
    <section className="w-full bg-linear-to-br from-[#000608e8] via-[#1f0218] to-black text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Connect With Our <span className="text-indigo-500">AI Network</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore multiple smart ways to interact with our AI ecosystem —
            beyond traditional contact methods.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-6 overflow-hidden"
            >
              {/* animated background glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full"
              />

              <div className="text-indigo-500 text-3xl mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

              <button className="text-sm text-indigo-400 border border-indigo-500 px-4 py-1 rounded-full hover:bg-indigo-500 hover:text-white transition">
                Explore
              </button>
            </motion.div>
          ))}
        </div>

        {/* INTERACTIVE CENTER VISUAL */}
        <div className="flex justify-center mt-24">
          <div className="relative w-65 h-65 md:w-[320px] md:h-80">
            {/* rotating dots ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute inset-0 border border-dashed border-indigo-500 rounded-full"
            />

            {/* pulse core */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-16 bg-indigo-500/20 blur-2xl rounded-full"
            />

            {/* floating nodes */}
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i }}
                className={`absolute ${node.position} text-indigo-400 text-xl`}
              >
                {node.icon}
              </motion.div>
            ))}

            {/* center */}
            <div className="absolute inset-0 flex items-center justify-center text-indigo-500 text-4xl">
              <FaNetworkWired />
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="text-center mt-16 max-w-xl mx-auto">
          <p className="text-gray-400">
            Our AI communication layer allows seamless interaction through smart
            channels, automation, and real-time responses.
          </p>
        </div>
      </div>
    </section>
  )
}

const cards = [
  {
    icon: <FaGlobe />,
    title: 'Global AI Access',
    desc: 'Connect to our AI services from anywhere in the world instantly.'
  },
  {
    icon: <FaComments />,
    title: 'Smart Chat Interface',
    desc: 'Interact with intelligent assistants trained for your needs.'
  },
  {
    icon: <FaHeadset />,
    title: '24/7 AI Support',
    desc: 'Always-on support powered by advanced AI systems.'
  },
  {
    icon: <FaNetworkWired />,
    title: 'AI Integration Hub',
    desc: 'Connect APIs and systems into one unified AI network.'
  }
]

const nodes = [
  { icon: <FaGlobe />, position: 'top-0 left-1/2 -translate-x-1/2' },
  { icon: <FaComments />, position: 'bottom-0 left-1/2 -translate-x-1/2' },
  { icon: <FaHeadset />, position: 'left-0 top-1/2 -translate-y-1/2' },
  { icon: <FaNetworkWired />, position: 'right-0 top-1/2 -translate-y-1/2' }
]
