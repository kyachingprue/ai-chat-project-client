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
  BarChart,
  Bar
} from 'recharts'

import {
  FaArrowUp,
  FaArrowDown,
  FaRobot,
  FaUsers,
  FaDatabase,
  FaBolt,
  FaCircle
} from 'react-icons/fa'

const stats = [
  {
    title: 'Total API Calls',
    value: '2.84M',
    growth: '+18.4%',
    icon: <FaRobot />,
    positive: true
  },
  {
    title: 'System Uptime',
    value: '98.7%',
    growth: '+6.2%',
    icon: <FaBolt />,
    positive: true
  },
  {
    title: 'Monthly Spend',
    value: '$1,247',
    growth: '-2.1%',
    icon: <FaDatabase />,
    positive: false
  },
  {
    title: 'Active Users',
    value: '18.2K',
    growth: '+12.9%',
    icon: <FaUsers />,
    positive: true
  }
]

const analyticsData = [
  { name: 'Apr 1', requests: 1200, tokens: 900 },
  { name: 'Apr 5', requests: 2100, tokens: 1700 },
  { name: 'Apr 10', requests: 3200, tokens: 2400 },
  { name: 'Apr 15', requests: 2800, tokens: 2600 },
  { name: 'Apr 20', requests: 4200, tokens: 3500 },
  { name: 'Apr 25', requests: 3900, tokens: 3300 },
  { name: 'May 1', requests: 5100, tokens: 4100 }
]

const pieData = [
  { name: 'Sonnet', value: 40 },
  { name: 'Haiku', value: 24 },
  { name: 'Opus', value: 16 },
  { name: 'Custom', value: 20 }
]

const performanceData = [
  { name: 'Mon', latency: 80 },
  { name: 'Tue', latency: 62 },
  { name: 'Wed', latency: 94 },
  { name: 'Thu', latency: 70 },
  { name: 'Fri', latency: 55 },
  { name: 'Sat', latency: 48 },
  { name: 'Sun', latency: 66 }
]

const activityData = [
  {
    model: 'GPT Vision Pro',
    status: 'Running',
    requests: '184K',
    latency: '142ms'
  },
  {
    model: 'Neural Alpha',
    status: 'Optimizing',
    requests: '92K',
    latency: '98ms'
  },
  {
    model: 'Quantum AI',
    status: 'Running',
    requests: '421K',
    latency: '84ms'
  },
  {
    model: 'Vector Engine',
    status: 'Offline',
    requests: '12K',
    latency: '—'
  }
]

const COLORS = ['#00ffb3', '#00d9ff', '#ffe600', '#ff5e7a']

export default function UserDashboard() {
  return (
      // MAIN WRAPPER
    <div className="relative overflow-hidden sm:pt-20 lg:pt-14 bg-(--bg) text-(--text)">
      {/* BG EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="
        absolute top-0 left-0
        w-60 h-60 md:w-96
        rounded-full blur-[120px]
      "
          style={{
            background: 'var(--primary)'
          }}
        />

        <div
          className="
        absolute bottom-0 right-0
        w-60 h-60 md:w-96
        rounded-full blur-[120px]
      "
          style={{
            background: 'var(--primary)'
          }}
        />
      </div>

      <div className="relative z-10 p-2 lg:p-6">
        {/* HERO */}
        <div
          className="
            relative overflow-hidden
            rounded-4xl
            border
            p-3 md:p-5
            mb-8
          "
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow)'
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                'radial-gradient(circle at top, var(--primary), transparent 60%)'
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <p
                className="
                  text-sm uppercase tracking-[0.3em]
                  mb-4
                  text-(--primary)
                "
              >
                Neural Command Center
              </p>

              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                AI Infrastructure <br />
                Monitoring Dashboard
              </h1>

              <p className="opacity-70 mt-5 max-w-2xl">
                Monitor AI systems, neural performance, token usage and realtime
                analytics with a futuristic responsive dashboard.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                  px-6 py-4 rounded-2xl
                  border font-semibold
                  backdrop-blur-xl
                "
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                Export Report
              </button>

              <button
                className="
                  px-6 py-4 rounded-2xl
                  font-semibold
                  text-black
                "
                style={{
                  background: 'var(--primary)',
                  boxShadow: 'var(--shadow)'
                }}
              >
                + New Project
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -6
              }}
              className="
                relative overflow-hidden
                rounded-[28px]
                border
                p-6
              "
              style={{
                background:
                  'linear-gradient(180deg, var(--bg-gradient-1), var(--bg-gradient-2))',
                borderColor: 'var(--border)'
              }}
            >
              <div
                className="
                  absolute top-0 right-0
                  w-32 h-32 rounded-full
                  blur-3xl opacity-20
                "
                style={{
                  background: 'var(--primary)'
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="
                      w-14 h-14 rounded-2xl
                      flex items-center justify-center
                      text-xl
                    "
                    style={{
                      background:
                        'linear-gradient(135deg, var(--primary-bg-1), var(--primary-bg-2))',
                      color: 'var(--primary)'
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    className="
                      px-3 py-1 rounded-full
                      text-xs font-semibold
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

                <p className="opacity-70">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mb-8">
          {/* AREA CHART */}
          <div
            className="
              2xl:col-span-2
              rounded-[28px]
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
                <h2 className="text-2xl font-bold">API Request Volume</h2>

                <p className="opacity-60 text-sm mt-1">Real-time analytics</p>
              </div>

              <div className="flex gap-2">
                {['7D', '30D', '90D'].map(item => (
                  <button
                    key={item}
                    className={`
                      px-4 py-2 rounded-xl
                      text-sm transition-all
                      ${
                        item === '30D'
                          ? 'text-black font-bold'
                          : 'text-(--text)'
                      }
                    `}
                    style={{
                      background:
                        item === '30D' ? 'var(--primary)' : 'var(--card)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-90">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="var(--primary)"
                        stopOpacity={0.4}
                      />

                      <stop
                        offset="100%"
                        stopColor="var(--primary)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid stroke="var(--border)" vertical={false} />

                  <XAxis dataKey="name" stroke="var(--muted)" />

                  <YAxis stroke="var(--muted)" />

                  <Tooltip
                    contentStyle={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                      color: 'var(--text)'
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="requests"
                    stroke="var(--primary)"
                    fill="url(#colorReq)"
                    strokeWidth={4}
                  />

                  <Area
                    type="monotone"
                    dataKey="tokens"
                    stroke="#00d9ff"
                    fillOpacity={0}
                    strokeWidth={3}
                    strokeDasharray="6 6"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PIE CHART */}
          <div
            className="
              rounded-[28px]
              border
              p-6
            "
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold">Model Distribution</h2>

                <p className="opacity-60 text-sm">Active model usage</p>
              </div>

              <p
                className="
                  text-sm font-semibold
                  text-(--primary)
                "
              >
                May 2026
              </p>
            </div>

            <div className="h-70">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={75}
                    outerRadius={105}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4 mt-4">
              {pieData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaCircle
                      style={{
                        color: COLORS[i]
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

        {/* LOWER GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* BAR CHART */}
          <div
            className="
              xl:col-span-2
              rounded-[28px]
              border
              p-6
            "
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Weekly Latency Report</h2>

              <p className="opacity-60 text-sm mt-1">AI response monitoring</p>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid stroke="var(--border)" vertical={false} />

                  <XAxis dataKey="name" stroke="var(--muted)" />

                  <YAxis stroke="var(--muted)" />

                  <Tooltip
                    contentStyle={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: '16px',
                      color: 'var(--text)'
                    }}
                  />

                  <Bar
                    dataKey="latency"
                    fill="var(--primary)"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* STATUS */}
          <div
            className="
              rounded-[28px]
              border
              p-6
            "
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <h2 className="text-2xl font-bold mb-8">Live AI Status</h2>

            <div className="space-y-5">
              {[
                'Neural Network Online',
                'GPU Cluster Active',
                'Realtime Sync Enabled',
                'Cloud Backup Running',
                'Security Firewall Active'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    x: 5
                  }}
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    px-4 py-4 border
                  "
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <span>{item}</span>

                  <div className="flex items-center gap-2">
                    <div
                      className="
                        w-2.5 h-2.5 rounded-full
                        animate-pulse
                      "
                      style={{
                        background: 'var(--primary)'
                      }}
                    />

                    <span
                      className="
                        text-sm font-semibold
                        text-(--primary)
                      "
                    >
                      Active
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div
          className="
            rounded-[28px]
            border
            p-6 overflow-hidden
          "
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black">AI Model Activity</h2>

              <p className="opacity-60 mt-1">Live neural infrastructure</p>
            </div>

            <input
              type="text"
              placeholder="Search models..."
              className="
                px-5 py-3 rounded-2xl
                outline-none border
                bg-transparent
                w-full md:w-[320px]
              "
              style={{
                borderColor: 'var(--border)'
              }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-175">
              <thead>
                <tr
                  className="text-left border-b"
                  style={{
                    borderColor: 'var(--border)'
                  }}
                >
                  <th className="pb-5 font-semibold">Model Name</th>

                  <th className="pb-5 font-semibold">Status</th>

                  <th className="pb-5 font-semibold">Requests</th>

                  <th className="pb-5 font-semibold">Latency</th>

                  <th className="pb-5 font-semibold">Performance</th>
                </tr>
              </thead>

              <tbody>
                {activityData.map((item, i) => (
                  <motion.tr
                    key={i}
                    whileHover={{
                      backgroundColor: 'rgba(255,255,255,0.02)'
                    }}
                    className="border-b"
                    style={{
                      borderColor: 'var(--border)'
                    }}
                  >
                    <td className="py-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="
                            w-12 h-12 rounded-2xl
                            flex items-center justify-center
                          "
                          style={{
                            background:
                              'linear-gradient(135deg, var(--primary-bg-1), var(--primary-bg-2))',

                            color: 'var(--primary)'
                          }}
                        >
                          <FaRobot />
                        </div>

                        <div>
                          <h4 className="font-semibold">{item.model}</h4>

                          <p className="text-sm opacity-60">Neural AI Engine</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-5">
                      <span
                        className="
                          px-4 py-2 rounded-full
                          text-sm font-semibold
                        "
                        style={{
                          background:
                            item.status === 'Offline'
                              ? 'var(--danger-bg)'
                              : 'var(--success-bg)',

                          color:
                            item.status === 'Offline'
                              ? 'var(--danger)'
                              : 'var(--success)'
                        }}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="py-5 font-semibold">{item.requests}</td>

                    <td className="py-5">{item.latency}</td>

                    <td className="py-5">
                      <div
                        className="
                          w-full h-3 rounded-full
                          overflow-hidden
                          bg-white/5
                        "
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${70 + i * 5}%`,
                            background: 'var(--primary)'
                          }}
                        />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
