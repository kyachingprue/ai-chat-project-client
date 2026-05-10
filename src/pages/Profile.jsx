import { motion } from 'motion/react'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaHeart,
  FaUsers,
  FaImages,
  FaSignOutAlt,
  FaCheckCircle
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'

const Profile = () => {
  const { user, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/login')
      toast.success("Logout successfull!")
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <>
      <Helmet>
        <title> AetherAI | Profile</title>
      </Helmet>
      <div className="min-h-screen w-full bg-linear-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white overflow-hidden">
        {/* Cover Banner */}
        <div
          className="relative h-80 lg:h-100 w-full"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/WpgCBh14/beautiful-shot-natural-scenery-autumn.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Floating Glow */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-300/30 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/30 blur-3xl rounded-full animate-pulse"></div>

          {/* Top Info */}
          <div className="absolute bottom-8 left-6 md:left-14 flex items-end gap-6">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              src={
                user?.photoURL
                  ? user.photoURL
                  : 'https://i.ibb.co/4pDNDk1/avatar.png'
              }
              alt="profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-2xl"
            />

            <div className="pb-2">
              <h2 className="text-2xl md:text-5xl font-bold flex items-center md:gap-2">
                {user?.displayName || 'Aether User'}
                <FaCheckCircle className="text-cyan-300 text-2xl" />
              </h2>

              <p className="text-gray-100 mt-1 text-sm md:text-base">
                Digital Creator • AI Influencer • Social Visionary
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-5">About</h3>

              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-400" />
                  {user?.email || 'No email found'}
                </p>

                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-pink-400" />
                  Dhaka, Bangladesh
                </p>

                <p className="flex items-center gap-3">
                  <FaGlobe className="text-green-400" />
                  www.aethercreator_AI.com
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <motion.button
              onClick={handleLogout}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(239, 68, 68, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-2xl relative overflow-hidden group font-semibold text-lg flex items-center justify-center gap-3 text-white
            bg-linear-to-r from-red-500 via-rose-500 to-pink-500 shadow-lg"
            >
              {/* Glow effect layer */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>

              {/* Icon with animation */}
              <motion.span
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-xl"
              >
                <FaSignOutAlt />
              </motion.span>

              <span className="tracking-wide">Logout</span>
            </motion.button>
          </div>

          {/* Center */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: <FaUsers />, title: 'Followers', value: '28.5K' },
                { icon: <FaHeart />, title: 'Likes', value: '190K' },
                { icon: <FaImages />, title: 'Posts', value: '248' },
                { icon: <FaCheckCircle />, title: 'Verified', value: 'Yes' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-xl"
                >
                  <div className="text-2xl text-cyan-400 flex justify-center mb-2">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold">{item.value}</h4>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </motion.div>
              ))}
            </div>

            {/* Fake Posts */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>

              <div className="space-y-5">
                {[
                  '🚀 Posted new AI social media strategy tips.',
                  '🔥 Reached 10K engagement this week.',
                  '📸 Shared premium creator content.',
                  '💬 Connected with 250 new followers.'
                ].map((post, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    className="p-4 rounded-2xl bg-black/20 border border-white/10 text-gray-300"
                  >
                    {post}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(item => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.03 }}
                  className="h-40 rounded-2xl bg-linear-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 border border-white/10 backdrop-blur-xl flex items-center justify-center text-xl font-bold"
                >
                  Post {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
