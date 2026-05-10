import { motion } from 'motion/react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar
} from 'recharts'

import {
  FaChartLine,
  FaBrain,
  FaUsers,
  FaDatabase,
  FaArrowUp,
  FaArrowDown,
  FaBolt,
  FaRobot,
  FaServer,
  FaCircle
} from 'react-icons/fa'

const stats = [
  {
    title: 'AI Requests',
    value: '8.2M',
    growth: '+18.6%',
    positive: true,
    icon: <FaRobot />
  },
  {
    title: 'Realtime Users',
    value: '48.3K',
    growth: '+12.4%',
    positive: true,
    icon: <FaUsers />
  },
  {
    title: 'Cloud Processing',
    value: '97%',
    growth: '+4.1%',
    positive: true,
    icon: <FaServer />
  },
  {
    title: 'Storage Usage',
    value: '14.8TB',
    growth: '-2.7%',
    positive: false,
    icon: <FaDatabase />
  }
]

const trafficData = [
  { name: 'Jan', ai: 2400, users: 1800 },
  { name: 'Feb', ai: 3200, users: 2500 },
  { name: 'Mar', ai: 4100, users: 3400 },
  { name: 'Apr', ai: 3800, users: 3000 },
  { name: 'May', ai: 5200, users: 4300 },
  { name: 'Jun', ai: 6100, users: 5100 },
  { name: 'Jul', ai: 7300, users: 6200 }
]

const radialData = [
  {
    name: 'Performance',
    value: 92,
    fill: 'var(--primary)'
  }
]

const pieData = [
  { name: 'GPT Models', value: 42 },
  { name: 'Vision AI', value: 24 },
  { name: 'Voice AI', value: 18 },
  { name: 'Custom Models', value: 16 }
]

const activityData = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 68 },
  { name: 'Wed', value: 54 },
  { name: 'Thu', value: 82 },
  { name: 'Fri', value: 90 },
  { name: 'Sat', value: 75 },
  { name: 'Sun', value: 95 }
]

const recentActivity = [
  {
    title: 'Neural GPT Model Updated',
    status: 'Completed',
    time: '2 min ago'
  },
  {
    title: 'Vision AI Deployed',
    status: 'Running',
    time: '12 min ago'
  },
  {
    title: 'Cloud GPU Synced',
    status: 'Active',
    time: '25 min ago'
  },
  {
    title: 'Realtime Analytics Generated',
    status: 'Success',
    time: '1 hour ago'
  }
]

const COLORS = ['#38bdf8', '#22c55e', '#a855f7', '#f97316']

export default function Analytics() {
  return (
    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        px-1 md:px-3 lg:px-4 pt-20
      "
      style={{
        background: 'var(--bg)',
        color: 'var(--text)'
      }}
    >
      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-0
            w-105
            h-105
            rounded-full
            blur-[120px]
            opacity-20
          "
          style={{
            background: 'var(--primary)'
          }}
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            w-87.5
            h-87.5
            rounded-full
            blur-[120px]
            opacity-20
          "
          style={{
            background: 'var(--primary)'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <div
          className="
            rounded-4xl
            border
            p-6 md:p-10
            mb-8
            overflow-hidden
            relative
          "
          style={{
            background:
              'linear-gradient(180deg,var(--bg-gradient-1),var(--bg-gradient-2))',
            borderColor: 'var(--border)'
          }}
        >
          <div
            className="
              absolute
              top-0
              right-0
              w-80
              h-80
              rounded-full
              blur-[120px]
              opacity-20
            "
            style={{
              background: 'var(--primary)'
            }}
          />

          <div className="relative z-10 flex flex-col xl:flex-row justify-between gap-8">
            <div>
              <p
                className="
                  uppercase
                  tracking-[0.3em]
                  text-sm
                  mb-4
                "
                style={{
                  color: 'var(--primary)'
                }}
              >
                AI ANALYTICS SYSTEM
              </p>

              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Smart Analytics <br />
                Dashboard Center
              </h1>

              <p
                className="
                  mt-5
                  max-w-2xl
                  leading-relaxed
                "
                style={{
                  color: 'var(--muted)'
                }}
              >
                Monitor AI traffic, cloud performance, neural activity, realtime
                users, and intelligent insights from one futuristic analytics
                platform.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                  px-6 py-4 rounded-2xl
                  font-semibold border
                "
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                Export Analytics
              </button>

              <button
                className="
                  px-6 py-4 rounded-2xl
                  font-semibold
                "
                style={{
                  background: 'var(--primary)',
                  color: 'var(--bg)',
                  boxShadow: 'var(--shadow)'
                }}
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6
              }}
              className="
                rounded-[28px]
                border
                p-6
                relative
                overflow-hidden
              "
              style={{
                background:
                  'linear-gradient(180deg,var(--bg-gradient-1),var(--bg-gradient-2))',
                borderColor: 'var(--border)'
              }}
            >
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-32
                  h-32
                  rounded-full
                  blur-3xl
                  opacity-10
                "
                style={{
                  background: 'var(--primary)'
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      flex items-center justify-center
                      text-xl
                    "
                    style={{
                      background:
                        'linear-gradient(135deg,var(--primary-bg-1),var(--primary-bg-2))',
                      color: 'var(--primary)'
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    className="
                      px-3 py-1
                      rounded-full
                      text-xs
                      font-semibold
                      flex items-center gap-1
                    "
                    style={{
                      background: item.positive
                        ? 'var(--success-bg)'
                        : 'var(--danger-bg)',

                      color: item.positive ? 'var(--success)' : 'var(--danger)'
                    }}
                  >
                    {item.positive ? <FaArrowUp /> : <FaArrowDown />}

                    {item.growth}
                  </div>
                </div>

                <h2 className="text-4xl font-black mb-2">{item.value}</h2>

                <p
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CHART GRID */}
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mb-8">
          {/* AREA CHART */}
          <div
            className="
              2xl:col-span-2
              rounded-[30px]
              border
              p-6
            "
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold">AI Traffic Analytics</h2>

                <p
                  className="mt-2"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Neural traffic monitoring system
                </p>
              </div>

              <div
                className="
                  px-4 py-2
                  rounded-xl
                  text-sm
                  font-semibold
                "
                style={{
                  background: 'var(--primary)',
                  color: 'var(--bg)'
                }}
              >
                Live Data
              </div>
            </div>

            <div className="h-87.5">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient
                      id="analyticsGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="var(--primary)"
                        stopOpacity={0.5}
                      />

                      <stop
                        offset="100%"
                        stopColor="var(--primary)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="rgba(255,255,255,0.06)"
                    vertical={false}
                  />

                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" />

                  <YAxis stroke="rgba(255,255,255,0.4)" />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="ai"
                    stroke="var(--primary)"
                    fill="url(#analyticsGradient)"
                    strokeWidth={4}
                  />

                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#8b5cf6"
                    fillOpacity={0}
                    strokeWidth={3}
                    strokeDasharray="6 6"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RADIAL */}
          <div
            className="
              rounded-[30px]
              border
              p-6
            "
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold">AI Performance</h2>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Realtime neural efficiency
              </p>
            </div>

            <div className="h-75">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="70%"
                  outerRadius="100%"
                  data={radialData}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar minAngle={15} dataKey="value" cornerRadius={20} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center -mt-10">
              <h3
                className="text-6xl font-black"
                style={{
                  color: 'var(--primary)'
                }}
              >
                92%
              </h3>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Neural Performance Score
              </p>
            </div>
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* BAR CHART */}
          <div
            className="
              xl:col-span-2
              rounded-[30px]
              border
              p-6
            "
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Weekly AI Activity</h2>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Smart activity tracking
              </p>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid
                    stroke="rgba(255,255,255,0.06)"
                    vertical={false}
                  />

                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" />

                  <YAxis stroke="rgba(255,255,255,0.4)" />

                  <Tooltip />

                  <Bar
                    dataKey="value"
                    fill="var(--primary)"
                    radius={[12, 12, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PIE */}
          <div
            className="
              rounded-[30px]
              border
              p-6
            "
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold">AI Usage Distribution</h2>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Intelligent model activity
              </p>
            </div>

            <div className="h-65">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={4}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4 mt-5">
              {pieData.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div className="flex items-center gap-3">
                    <FaCircle
                      style={{
                        color: COLORS[index]
                      }}
                    />

                    <span>{item.name}</span>
                  </div>

                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div
          className="
            rounded-[30px]
            border
            p-6
          "
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black">Realtime AI Activity</h2>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Live analytics & neural monitoring logs
              </p>
            </div>

            <button
              className="
                px-5 py-3
                rounded-2xl
                font-semibold
                flex items-center gap-2
              "
              style={{
                background: 'var(--primary)',
                color: 'var(--bg)'
              }}
            >
              <FaChartLine />
              View Full Report
            </button>
          </div>

          <div className="space-y-5">
            {recentActivity.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 6
                }}
                className="
                  rounded-2xl
                  border
                  p-5
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  justify-between
                  gap-4
                "
                style={{
                  background:
                    'linear-gradient(180deg,var(--bg-gradient-1),var(--bg-gradient-2))',

                  borderColor: 'var(--border)'
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      flex items-center justify-center
                      text-xl
                    "
                    style={{
                      background:
                        'linear-gradient(135deg,var(--primary-bg-1),var(--primary-bg-2))',

                      color: 'var(--primary)'
                    }}
                  >
                    <FaBrain />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>

                    <p
                      className="text-sm mt-1"
                      style={{
                        color: 'var(--muted)'
                      }}
                    >
                      {item.time}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    px-4 py-2
                    rounded-full
                    text-sm
                    font-semibold
                    flex items-center gap-2
                    w-fit
                  "
                  style={{
                    background: 'var(--success-bg)',
                    color: 'var(--success)'
                  }}
                >
                  <FaBolt />

                  {item.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
