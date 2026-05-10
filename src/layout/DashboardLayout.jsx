import ThemeSwitcher from '@/components/ThemeSwitcher'
import { motion, AnimatePresence } from 'motion/react'
import { TextAlignJustify, X } from 'lucide-react'
import {
  FaRobot,
  FaChartPie,
  FaUsers,
  FaDatabase,
  FaBell,
  FaCog,
  FaShieldAlt,
  FaCode,
  FaCube
} from 'react-icons/fa'
import { HiOutlineSparkles, HiOutlineMenuAlt2 } from 'react-icons/hi'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

const menu = [
  { name: 'Dashboard', path: '/dashboard/user-dashboard', icon: <FaCube /> },
  { name: 'AI Models', path: '/dashboard/ai-models', icon: <FaRobot /> },
  { name: 'Analytics', path: '/dashboard/analytics', icon: <FaChartPie /> },
  { name: 'PlayGround', path: '/dashboard/playground', icon: <FaCode /> },
  { name: 'Usage Stats', path: '/dashboard/usage-stats', icon: <FaUsers /> },
  { name: 'Database', path: '/dashboard/database', icon: <FaDatabase /> },
  { name: 'Security', path: '/dashboard/security', icon: <FaShieldAlt /> },
  { name: 'Settings', path: '/dashboard/settings', icon: <FaCog /> }
]

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex bg-(--bg) text-(--text) transition-all duration-300">
      {/* DESKTOP SIDEBAR */}
      <aside
        className="
    hidden lg:block
    fixed left-0 top-0 z-40
    h-screen w-65
    border-r border-(--primary)/20
    backdrop-blur-2xl
    bg-(--bg)/80
  "
      >
        {/* LOGO */}
        <div className="h-20 flex items-center px-5 border-b border-(--primary)/10">
          <Link to="/" className="w-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={() => setOpen(true)}
                className="
    w-11 h-11 rounded-xl
    flex items-center justify-center
    border border-(--primary)/10
    lg:hidden
  "
              >
                <HiOutlineMenuAlt2 />
              </button>

              <div>
                <h2 className="text-xl font-bold">AetherAI</h2>
                <p className="text-xs opacity-60">Neural Dashboard</p>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* MENU */}
        <div className="p-4 space-y-2">
          {menu.map((item, i) => (
            <NavLink key={i} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300"
                  style={{
                    background: isActive ? 'var(--card)' : 'transparent',
                    border: isActive
                      ? '1px solid var(--primary)'
                      : '1px solid transparent'
                  }}
                >
                  <span
                    className="text-lg"
                    style={{
                      color: isActive ? 'var(--primary)' : 'var(--text)'
                    }}
                  >
                    {item.icon}
                  </span>

                  <span className="text-sm">{item.name}</span>
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* USER */}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <div className="flex items-center gap-3 p-4 rounded-2xl border border-(--primary)/10 bg-(--card)/30">
            <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold bg-(--primary) text-black">
              K
            </div>

            <div>
              <h4 className="text-sm font-semibold">Kyaching</h4>
              <p className="text-xs opacity-60">Pro Access</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
          fixed inset-0 z-40
          bg-black/60 backdrop-blur-sm
          lg:hidden
        "
            />

            {/* MOBILE MENU */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 260
              }}
              className="
          fixed left-0 top-0 z-50
          h-screen w-full
          bg-(--bg)
          lg:hidden
          overflow-y-auto
        "
            >
              {/* TOP */}
              <div className="h-20 px-5 border-b border-(--primary)/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-(--primary) text-black">
                    <HiOutlineSparkles className="text-xl" />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">AetherAI</h2>
                    <p className="text-xs opacity-60">Neural Dashboard</p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
              w-11 h-11 rounded-xl
              flex items-center justify-center
              border border-(--primary)/10
            "
                >
                  <X />
                </button>
              </div>

              {/* MENU */}
              <div className="p-5 space-y-3">
                {menu.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    {({ isActive }) => (
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className="
                    flex items-center gap-4
                    px-5 py-4
                    rounded-2xl
                  "
                        style={{
                          background: isActive ? 'var(--card)' : 'transparent',

                          border: isActive
                            ? '1px solid var(--primary)'
                            : '1px solid transparent'
                        }}
                      >
                        <span
                          className="text-xl"
                          style={{
                            color: isActive ? 'var(--primary)' : 'var(--text)'
                          }}
                        >
                          {item.icon}
                        </span>

                        <span className="font-medium">{item.name}</span>
                      </motion.div>
                    )}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <div className="flex-1 lg:ml-65">
        {/* TOP BAR */}
        <header
          className="
    fixed top-0 right-0 left-0 lg:left-65
    z-30 h-20
    border-b border-(--primary)/10
    backdrop-blur-2xl
    bg-(--bg)/80
  "
        >
          <div
            className="
      h-full
      flex items-center justify-between
      px-2 md:px-4 lg:px-8
      gap-3
    "
          >
            {/* LEFT */}
            <div className="flex items-center gap-3 min-w-0">
              {/* MOBILE MENU */}
              <button
                onClick={() => setOpen(true)}
                className="
          w-10 h-10 sm:w-11 sm:h-11
          rounded-xl
          flex items-center justify-center
          border border-(--primary)/10
          bg-(--card)/20
          shrink-0
          lg:hidden
        "
              >
                <TextAlignJustify size={28} />
              </button>

              {/* TITLE */}
              <div className="min-w-0 hidden sm:block">
                <h1
                  className="
            text-sm sm:text-lg lg:text-xl
            font-bold
            truncate
          "
                >
                  OVERVIEW
                </h1>

                <div
                  className="
            hidden sm:flex
            items-center gap-2
            text-[10px] sm:text-xs
            mt-1
            text-(--primary)
          "
                >
                  <div className="w-2 h-2 rounded-full bg-(--primary) animate-pulse" />
                  LIVE SYSTEM
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* THEME */}
              <ThemeSwitcher />

              {/* NOTIFICATION */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="
          w-10 h-10 sm:w-11 sm:h-11
          rounded-xl
          flex items-center justify-center
          border border-(--primary)/10
          bg-(--card)/20
          shrink-0
        "
              >
                <FaBell className="text-sm sm:text-base" />
              </motion.div>

              {/* PROFILE */}
              <div
                className="
          flex items-center
          gap-2 sm:gap-3
          px-2 sm:px-3
          py-2
          rounded-xl
          border border-(--primary)/10
          bg-(--card)/20
        "
              >
                <div
                  className="
            w-9 h-9 lg:w-10 lg:h-10
            rounded-xl
            flex items-center justify-center
            bg-(--primary)
            text-black
            font-bold
            text-sm
            shrink-0
          "
                >
                  K
                </div>

                <div className="hidden md:block">
                  <h4 className="text-sm font-semibold">Kyaching</h4>
                  <p className="text-xs opacity-60">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE */}
        <main className="pt-16 sm:pt-20 lg:pt-24 p-2 sm:p-3 lg:p-4">
          <div className="min-h-screen rounded-2xl lg:rounded-[30px] border bg-(--card)/10 border-(--primary)/10 overflow-hidden ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
