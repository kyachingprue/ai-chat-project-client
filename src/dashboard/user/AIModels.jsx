import { useState } from 'react'

export default function AIModels() {
  const [filter, setFilter] = useState('all')

  const models = [
    {
      name: 'Aether Vision Pro',
      type: 'Image Generation',
      desc: 'Generate cinematic AI visuals for ads, films, and product branding.',
      usage: 'High',
      users: '120K+',
      accuracy: '98%',
      tag: 'Creative AI',
      status: 'Active'
    },
    {
      name: 'Aether VoiceX',
      type: 'Voice AI',
      desc: 'Human-like speech synthesis for assistants and customer support bots.',
      usage: 'Medium',
      users: '80K+',
      accuracy: '96%',
      tag: 'Speech Model',
      status: 'Running'
    },
    {
      name: 'Aether Analytics Core',
      type: 'Data Intelligence',
      desc: 'Real-time business analytics powered by predictive AI systems.',
      usage: 'High',
      users: '210K+',
      accuracy: '99%',
      tag: 'Analytics',
      status: 'Optimized'
    },
    {
      name: 'Aether CodeMind',
      type: 'Code AI',
      desc: 'AI-powered code generation for full-stack applications.',
      usage: 'Very High',
      users: '300K+',
      accuracy: '97%',
      tag: 'Developer Tools',
      status: 'Live'
    },
    {
      name: 'Aether ChatBrain',
      type: 'LLM Assistant',
      desc: 'Advanced conversational AI for enterprise automation.',
      usage: 'High',
      users: '500K+',
      accuracy: '99%',
      tag: 'AI Chat',
      status: 'Active'
    }
  ]

  const filtered =
    filter === 'all'
      ? models
      : models.filter(m => m.type.toLowerCase().includes(filter))

  return (
    <div className="relative min-h-screen px-4 py-10 sm:px-6 lg:px-10">
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
          AI Models Dashboard
        </h1>

        <p
          className="mt-2 text-sm sm:text-base"
          style={{ color: 'var(--muted)' }}
        >
          Explore, monitor and manage all AetherAI models in real-time.
        </p>

        {/* FILTERS */}
        <div className="mt-6 flex flex-wrap gap-3">
          {['all', 'image', 'voice', 'data', 'code', 'llm'].map(item => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className="rounded-full px-4 py-2 text-xs sm:text-sm backdrop-blur-xl transition hover:scale-105"
              style={{
                background: filter === item ? 'var(--primary)' : 'var(--card)',
                color: filter === item ? '#fff' : 'var(--text)',
                border: '1px solid var(--border)'
              }}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((model, i) => (
          <div
            key={i}
            className="group rounded-3xl border p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            {/* TAG */}
            <div
              className="mb-3 inline-flex rounded-full px-3 py-1 text-xs"
              style={{
                background: 'var(--primary-bg-1)',
                color: 'var(--primary)'
              }}
            >
              {model.tag}
            </div>

            {/* NAME */}
            <h2
              className="text-lg font-semibold sm:text-xl"
              style={{ color: 'var(--text)' }}
            >
              {model.name}
            </h2>

            <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
              {model.desc}
            </p>

            {/* INFO */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div
                className="rounded-xl p-2"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                ⚡ Usage: {model.usage}
              </div>

              <div
                className="rounded-xl p-2"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                👥 {model.users}
              </div>

              <div
                className="rounded-xl p-2"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                🎯 {model.accuracy}
              </div>

              <div
                className="rounded-xl p-2"
                style={{
                  background:
                    model.status === 'Live'
                      ? 'rgba(34,197,94,0.12)'
                      : 'rgba(59,130,246,0.12)',
                  color:
                    model.status === 'Live'
                      ? 'var(--success)'
                      : 'var(--primary)'
                }}
              >
                {model.status}
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="mt-5 w-full rounded-2xl py-3 text-sm font-medium transition-all group-hover:scale-[1.02]"
              style={{
                background: 'var(--primary)',
                color: '#fff'
              }}
            >
              Open Model
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER STATS */}
      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {[
          ['1.2M+', 'Total API Requests'],
          ['99.8%', 'System Uptime'],
          ['450K+', 'Active Users']
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-3xl border p-5 text-center backdrop-blur-xl"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: 'var(--text)' }}
            >
              {item[0]}
            </h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {item[1]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
