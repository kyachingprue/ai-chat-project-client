import { motion } from 'motion/react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts'

import {
  FaRobot,
  FaBrain,
  FaBolt,
  FaCloud,
  FaPlay,
  FaPause,
  FaArrowUp,
  FaMicrochip,
  FaServer
} from 'react-icons/fa'

const modelStats = [
  {
    title: 'Active Models',
    value: '24',
    growth: '+12%',
    icon: <FaRobot />
  },
  {
    title: 'Inference Speed',
    value: '142ms',
    growth: '+6%',
    icon: <FaBolt />
  },
  {
    title: 'GPU Usage',
    value: '78%',
    growth: '+18%',
    icon: <FaMicrochip />
  },
  {
    title: 'Cloud Nodes',
    value: '12',
    growth: '+4%',
    icon: <FaCloud />
  }
]

const chartData = [
  { name: 'Mon', performance: 40 },
  { name: 'Tue', performance: 55 },
  { name: 'Wed', performance: 70 },
  { name: 'Thu', performance: 65 },
  { name: 'Fri', performance: 85 },
  { name: 'Sat', performance: 78 },
  { name: 'Sun', performance: 95 }
]

const aiModels = [
  {
    name: 'Neural GPT X',
    status: 'Running',
    type: 'Language Model',
    accuracy: '98.2%',
    requests: '2.4M',
    icon: <FaBrain />
  },
  {
    name: 'Vision AI Pro',
    status: 'Training',
    type: 'Image Recognition',
    accuracy: '94.8%',
    requests: '820K',
    icon: <FaRobot />
  },
  {
    name: 'Voice Matrix',
    status: 'Running',
    type: 'Speech AI',
    accuracy: '96.1%',
    requests: '1.2M',
    icon: <FaServer />
  },
  {
    name: 'Quantum Neural',
    status: 'Paused',
    type: 'Prediction Engine',
    accuracy: '92.4%',
    requests: '540K',
    icon: <FaMicrochip />
  }
]

export default function AIModels() {
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
      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-0
            w-100
            h-100
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
            rounded-[30px]
            border
            p-6 md:p-10
            mb-8
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
                AI MODELS HUB
              </p>

              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Neural AI <br />
                Infrastructure
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
                Manage and monitor all AI models, neural engines, GPU systems,
                and inference performance in one futuristic control center.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="
                  px-6 py-4 rounded-2xl
                  font-semibold
                  border
                  backdrop-blur-xl
                "
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                Deploy Model
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
                + Create AI
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {modelStats.map((item, index) => (
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
                <div className="flex justify-between items-center mb-8">
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
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
                      flex
                      items-center
                      gap-1
                      text-sm
                      font-semibold
                      px-3
                      py-1
                      rounded-full
                    "
                    style={{
                      background: 'var(--success-bg)',
                      color: 'var(--success)'
                    }}
                  >
                    <FaArrowUp />

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

        {/* CHART + STATUS */}
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mb-8">
          {/* CHART */}
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
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                Neural Performance Analytics
              </h2>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Real-time AI processing performance
              </p>
            </div>

            <div className="h-87.5">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient
                      id="performance"
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
                    dataKey="performance"
                    stroke="var(--primary)"
                    fill="url(#performance)"
                    strokeWidth={4}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* LIVE STATUS */}
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
              <h2 className="text-2xl font-bold">Live Status</h2>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Realtime AI system monitoring
              </p>
            </div>

            <div className="space-y-5">
              {[
                'Inference Engine Active',
                'GPU Cluster Running',
                'Cloud Sync Enabled',
                'Realtime Backup Active',
                'AI Optimization Online'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    x: 5
                  }}
                  className="
                    rounded-2xl
                    border
                    p-4
                    flex
                    items-center
                    justify-between
                  "
                  style={{
                    background: 'var(--bg-gradient-1)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <span>{item}</span>

                  <div className="flex items-center gap-2">
                    <div
                      className="
                        w-2.5
                        h-2.5
                        rounded-full
                        animate-pulse
                      "
                      style={{
                        background: 'var(--primary)'
                      }}
                    />

                    <span
                      className="text-sm font-semibold"
                      style={{
                        color: 'var(--primary)'
                      }}
                    >
                      Active
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* AI MODELS TABLE */}
        <div
          className="
            rounded-[30px]
            border
            p-6
            overflow-hidden
          "
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-5 mb-8">
            <div>
              <h2 className="text-3xl font-black">AI Neural Models</h2>

              <p
                className="mt-2"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Monitor all deployed artificial intelligence systems
              </p>
            </div>

            <input
              type="text"
              placeholder="Search AI models..."
              className="
                w-full lg:w-[320px]
                px-5 py-3
                rounded-2xl
                outline-none
                border
                bg-transparent
              "
              style={{
                borderColor: 'var(--border)'
              }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-200">
              <thead>
                <tr
                  className="border-b"
                  style={{
                    borderColor: 'var(--border)'
                  }}
                >
                  <th className="text-left pb-5">AI Model</th>

                  <th className="text-left pb-5">Status</th>

                  <th className="text-left pb-5">Type</th>

                  <th className="text-left pb-5">Accuracy</th>

                  <th className="text-left pb-5">Requests</th>

                  <th className="text-left pb-5">Action</th>
                </tr>
              </thead>

              <tbody>
                {aiModels.map((item, i) => (
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
                            w-14
                            h-14
                            rounded-2xl
                            flex
                            items-center
                            justify-center
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

                        <div>
                          <h3 className="font-bold text-lg">{item.name}</h3>

                          <p
                            className="text-sm"
                            style={{
                              color: 'var(--muted)'
                            }}
                          >
                            Neural Intelligence Engine
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-5">
                      <span
                        className="
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                        "
                        style={{
                          background:
                            item.status === 'Paused'
                              ? 'var(--danger-bg)'
                              : 'var(--success-bg)',

                          color:
                            item.status === 'Paused'
                              ? 'var(--danger)'
                              : 'var(--success)'
                        }}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="py-5">{item.type}</td>

                    <td className="py-5 font-bold">{item.accuracy}</td>

                    <td className="py-5">{item.requests}</td>

                    <td className="py-5">
                      <button
                        className="
                          px-4
                          py-2
                          rounded-xl
                          flex
                          items-center
                          gap-2
                          font-semibold
                        "
                        style={{
                          background: 'var(--primary)',
                          color: 'var(--bg)'
                        }}
                      >
                        {item.status === 'Paused' ? (
                          <>
                            <FaPlay />
                            Start
                          </>
                        ) : (
                          <>
                            <FaPause />
                            Manage
                          </>
                        )}
                      </button>
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
