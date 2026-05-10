import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'

export default function UserDashboard() {
  // 📊 FAKE REAL-WORLD DATA
  const usageData = [
    { day: 'Mon', ai: 30, api: 50 },
    { day: 'Tue', ai: 45, api: 70 },
    { day: 'Wed', ai: 60, api: 90 },
    { day: 'Thu', ai: 80, api: 120 },
    { day: 'Fri', ai: 70, api: 110 },
    { day: 'Sat', ai: 95, api: 140 },
    { day: 'Sun', ai: 120, api: 180 }
  ]

  const projectData = [
    { name: 'AI Chatbot', value: 40 },
    { name: 'Vision AI', value: 25 },
    { name: 'Analytics', value: 20 },
    { name: 'Voice AI', value: 15 }
  ]

  const COLORS = ['#3b82f6', '#22c55e', '#a855f7', '#f59e0b']

  const activities = [
    'AI Chatbot deployed successfully',
    'Vision model trained on dataset',
    'API request spike detected',
    'User analytics updated in real-time',
    'Voice assistant optimized'
  ]

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-100 w-100 rounded-full blur-3xl"
          style={{ background: 'rgba(59,130,246,0.18)' }}
        />
        <div
          className="absolute bottom-0 right-0 h-87.5 w-87.5 rounded-full blur-3xl"
          style={{ background: 'rgba(34,197,94,0.14)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom right, var(--bg), rgba(255,255,255,0.02))'
          }}
        />
      </div>

      {/* HEADER */}
      <div className="mb-10">
        <h1
          className="text-3xl font-semibold sm:text-4xl lg:text-5xl"
          style={{ color: 'var(--text)' }}
        >
          User Dashboard
        </h1>

        <p style={{ color: 'var(--muted)' }} className="mt-2">
          Real-time AI usage, analytics, and project insights for AetherAI
          platform.
        </p>
      </div>

      {/* TOP CARDS */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['12.4K', 'AI Requests'],
          ['98.7%', 'System Accuracy'],
          ['450K+', 'Active Users'],
          ['24/7', 'AI Runtime']
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl border p-5 backdrop-blur-xl"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <h2
              className="text-2xl font-semibold"
              style={{ color: 'var(--text)' }}
            >
              {item[0]}
            </h2>
            <p style={{ color: 'var(--muted)' }}>{item[1]}</p>
          </div>
        ))}
      </div>

      {/* CHART SECTION */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* LINE CHART */}
        <div
          className="rounded-3xl border p-5 backdrop-blur-xl"
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <h3
            className="mb-4 text-lg font-semibold"
            style={{ color: 'var(--text)' }}
          >
            AI & API Usage Trend
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={usageData}>
              <XAxis dataKey="day" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="ai"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="api"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div
          className="rounded-3xl border p-5 backdrop-blur-xl"
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <h3
            className="mb-4 text-lg font-semibold"
            style={{ color: 'var(--text)' }}
          >
            Project Distribution
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={projectData} dataKey="value" outerRadius={100} label>
                {projectData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BAR CHART */}
      <div
        className="mt-6 rounded-3xl border p-5 backdrop-blur-xl"
        style={{
          background: 'var(--card)',
          borderColor: 'var(--border)'
        }}
      >
        <h3
          className="mb-4 text-lg font-semibold"
          style={{ color: 'var(--text)' }}
        >
          Weekly Performance Overview
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={usageData}>
            <XAxis dataKey="day" stroke="var(--muted)" />
            <YAxis stroke="var(--muted)" />
            <Tooltip />
            <Bar dataKey="ai" fill="#3b82f6" />
            <Bar dataKey="api" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ACTIVITY + PROJECT INSIGHTS */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* ACTIVITY FEED */}
        <div
          className="rounded-3xl border p-5 backdrop-blur-xl"
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <h3
            className="mb-4 text-lg font-semibold"
            style={{ color: 'var(--text)' }}
          >
            Live AI Activity
          </h3>

          <div className="space-y-3">
            {activities.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-3"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  color: 'var(--muted)'
                }}
              >
                ⚡ {item}
              </div>
            ))}
          </div>
        </div>

        {/* INSIGHTS */}
        <div
          className="rounded-3xl border p-5 backdrop-blur-xl"
          style={{
            background: 'var(--card)',
            borderColor: 'var(--border)'
          }}
        >
          <h3
            className="mb-4 text-lg font-semibold"
            style={{ color: 'var(--text)' }}
          >
            AI Insights
          </h3>

          <div className="space-y-4 text-sm" style={{ color: 'var(--muted)' }}>
            <p>📈 AI usage increased by 32% this week.</p>
            <p>🚀 Voice AI models showing highest engagement.</p>
            <p>⚙️ System latency reduced by 18%.</p>
            <p>🧠 Chat AI requests dominating traffic.</p>
          </div>

          <button
            className="mt-6 w-full rounded-2xl py-3 text-sm font-medium"
            style={{
              background: 'var(--primary)',
              color: '#fff'
            }}
          >
            View Full Analytics
          </button>
        </div>
      </div>
    </div>
  )
}
