export default function PlayGround() {
  const cards = [
    {
      title: 'AI Image Generator',
      desc: 'Generate cinematic visuals and modern artwork with intelligent prompts.',
      tag: 'Creative AI',
      status: 'Active',
      users: '12.4K',
      progress: '92%'
    },
    {
      title: 'Voice Assistant',
      desc: 'Build responsive voice experiences with natural AI conversations.',
      tag: 'Speech Model',
      status: 'Running',
      users: '8.7K',
      progress: '87%'
    },
    {
      title: 'Smart Analytics',
      desc: 'Understand trends, insights and performance using AI powered data.',
      tag: 'Analytics',
      status: 'Optimized',
      users: '15.1K',
      progress: '96%'
    },
    {
      title: 'AI Code Builder',
      desc: 'Generate production-ready applications with intelligent automation.',
      tag: 'Developer Tools',
      status: 'Live',
      users: '21.2K',
      progress: '98%'
    }
  ]

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8"
      style={{
        background: 'var(--bg)',
        color: 'var(--text)'
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--text) 1px, transparent 1px),
              linear-gradient(to bottom, var(--text) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* GLOW 1 */}
        <div
          className="absolute -left-30 -top-30 h-80 w-[320px] rounded-full blur-3xl"
          style={{
            background: 'var(--primary)',
            opacity: 0.18
          }}
        />

        {/* GLOW 2 */}
        <div
          className="absolute -bottom-30 -right-30 h-80 w-[320px] rounded-full blur-3xl"
          style={{
            background: 'var(--primary)',
            opacity: 0.12
          }}
        />

        {/* CENTER GRADIENT */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at top left, var(--bg-gradient-1), transparent 30%),
              radial-gradient(circle at bottom right, var(--bg-gradient-2), transparent 30%)
            `
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* BADGE */}
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-xl"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--muted)'
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: 'var(--primary)'
                }}
              />
              AI Playground
            </div>

            {/* TITLE */}
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Build Modern
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--primary), var(--text))`
                }}
              >
                AI Experiences
              </span>
            </h1>

            {/* DESC */}
            <p
              className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
              style={{
                color: 'var(--muted)'
              }}
            >
              Create intelligent automation systems, futuristic AI workflows and
              immersive dashboard experiences with scalable modern tools.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              className="rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--primary)',
                color: '#fff',
                boxShadow: 'var(--shadow)'
              }}
            >
              Launch Playground
            </button>

            <button
              className="rounded-2xl border px-6 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
            >
              Explore Features
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            ['50K+', 'Users'],
            ['99%', 'Accuracy'],
            ['24/7', 'Runtime'],
            ['4.9★', 'Reviews']
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border p-5 backdrop-blur-2xl"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <h3 className="text-2xl font-semibold">{item[0]}</h3>

              <p
                className="mt-2 text-sm"
                style={{
                  color: 'var(--muted)'
                }}
              >
                {item[1]}
              </p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT LARGE PANEL */}
          <div
            className="relative overflow-hidden rounded-4xl border p-6"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            {/* TOP BAR */}
            <div
              className="mb-8 flex items-center justify-between border-b pb-5"
              style={{
                borderColor: 'var(--border)'
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span
                className="text-xs"
                style={{
                  color: 'var(--muted)'
                }}
              >
                Neural Workspace
              </span>
            </div>

            {/* BIG AI PANEL */}
            <div
              className="relative overflow-hidden rounded-[28px] border p-6"
              style={{
                background:
                  'linear-gradient(to bottom right, var(--primary-bg-1), var(--primary-bg-2))',
                borderColor: 'var(--primary-border)'
              }}
            >
              {/* GLOW */}
              <div
                className="absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background: 'var(--primary)',
                  opacity: 0.15
                }}
              />

              <div className="relative z-10">
                <div
                  className="mb-4 inline-flex rounded-full px-4 py-2 text-xs font-medium"
                  style={{
                    background: 'var(--primary-bg-1)',
                    color: 'var(--primary)'
                  }}
                >
                  AI SYSTEM ACTIVE
                </div>

                <h2 className="max-w-xl text-2xl font-semibold leading-tight sm:text-4xl">
                  Intelligent AI Workspace For Modern SaaS Platforms
                </h2>

                <p
                  className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Manage automation systems, realtime analytics, AI generation
                  and futuristic neural workflows inside one modern platform.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    className="rounded-2xl px-6 py-4 text-sm font-medium"
                    style={{
                      background: 'var(--primary)',
                      color: '#fff'
                    }}
                  >
                    Generate AI
                  </button>

                  <button
                    className="rounded-2xl border px-6 py-4 text-sm font-medium"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text)'
                    }}
                  >
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group rounded-[30px] border p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)'
                }}
              >
                {/* TAG */}
                <div
                  className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: 'var(--primary-bg-1)',
                    color: 'var(--primary)'
                  }}
                >
                  {card.tag}
                </div>

                {/* TITLE */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>

                    <p
                      className="mt-3 text-sm leading-7"
                      style={{
                        color: 'var(--muted)'
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  <button
                    className="rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: 'var(--primary)',
                      color: '#fff'
                    }}
                  >
                    Open
                  </button>
                </div>

                {/* DATA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <div
                    className="rounded-xl px-3 py-2 text-xs"
                    style={{
                      background: 'var(--primary-bg-2)',
                      color: 'var(--text)'
                    }}
                  >
                    👥 {card.users} Users
                  </div>

                  <div
                    className="rounded-xl px-3 py-2 text-xs"
                    style={{
                      background: 'var(--success-bg)',
                      color: 'var(--success)'
                    }}
                  >
                    ⚡ {card.progress}
                  </div>

                  <div
                    className="rounded-xl px-3 py-2 text-xs"
                    style={{
                      background: 'var(--primary-bg-1)',
                      color: 'var(--primary)'
                    }}
                  >
                    🚀 {card.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
