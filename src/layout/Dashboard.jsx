import { motion } from 'motion/react'
import {
  FaRobot,
  FaChartPie,
  FaUsers,
  FaDatabase,
  FaBell,
  FaCog
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#021a12] to-[#033d2e] text-white flex">
      {/* SIDEBAR */}
      <div className="w-20 md:w-64 bg-black/40 backdrop-blur-xl border-r border-green-900 p-4 flex flex-col justify-between">
        <div>
          <Link to="/">
            <button className="hidden md:block text-xl md:text-2xl font-bold mb-5 px-3 text-green-400">
              AetherAI
            </button>
          </Link>

          <div className="space-y-4">
            {menu.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-500/10 cursor-pointer transition"
              >
                <span className="text-green-400 text-lg">{item.icon}</span>
                <span className="hidden md:block text-sm">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-500/10 cursor-pointer"
        >
          <FaCog className="text-green-400" />
          <span className="hidden md:block text-sm">Settings</span>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              <FaBell className="text-green-400" />
            </motion.div>
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              U
            </div>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-black/40 backdrop-blur-xl border border-green-900 p-5 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-400 text-xl">{item.icon}</span>
                <span className="text-xs text-gray-400">+12%</span>
              </div>
              <h3 className="text-xl font-bold">{item.value}</h3>
              <p className="text-gray-400 text-sm">{item.title}</p>
            </motion.div>
          ))}
        </div>

        {/* AI ACTIVITY PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 bg-black/40 backdrop-blur-xl border border-green-900 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">AI Activity</h2>

            <div className="space-y-4">
              {activities.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center p-4 bg-green-500/5 rounded-xl"
                >
                  <div>
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                  <span className="text-green-400 text-xs">{item.status}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-black/40 backdrop-blur-xl border border-green-900 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">AI Status</h2>

            <div className="flex flex-col items-center justify-center h-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="w-32 h-32 border border-green-500 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-16 h-16 bg-green-500/20 rounded-full"
                />
              </motion.div>

              <p className="mt-6 text-green-400">System Running Smoothly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const menu = [
  { name: 'AI Overview', icon: <FaRobot /> },
  { name: 'Analytics', icon: <FaChartPie /> },
  { name: 'Users', icon: <FaUsers /> },
  { name: 'Database', icon: <FaDatabase /> }
]

const stats = [
  { title: 'Active AI Models', value: '24', icon: <FaRobot /> },
  { title: 'Total Users', value: '1.2K', icon: <FaUsers /> },
  { title: 'Data Processed', value: '8.4TB', icon: <FaDatabase /> },
  { title: 'Performance', value: '98%', icon: <FaChartPie /> }
]

const activities = [
  { title: 'AI Model Training Completed', time: '2 min ago', status: 'Done' },
  { title: 'New User Registered', time: '10 min ago', status: 'New' },
  { title: 'Data Sync in Progress', time: '30 min ago', status: 'Running' },
  { title: 'System Optimization', time: '1 hour ago', status: 'Completed' }
]
