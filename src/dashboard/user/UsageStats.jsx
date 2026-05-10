export default function UsageStats() {
  const stats = [
    {
      title: 'AI Requests',
      value: '1.2M',
      growth: '+18%',
      desc: 'Realtime AI processing requests'
    },
    {
      title: 'Active Users',
      value: '48.9K',
      growth: '+12%',
      desc: 'Users currently using the platform'
    },
    {
      title: 'Response Speed',
      value: '0.8s',
      growth: '-22%',
      desc: 'Average neural response time'
    },
    {
      title: 'System Accuracy',
      value: '99.2%',
      growth: '+4%',
      desc: 'AI generated output precision'
    }
  ]

  const activity = [
    {
      name: 'Neural AI Generator',
      users: '12.4K',
      progress: '94%'
    },
    {
      name: 'Realtime Analytics',
      users: '8.9K',
      progress: '89%'
    },
    {
      name: 'Voice Intelligence',
      users: '6.2K',
      progress: '97%'
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
        <div
          className="absolute -left-25 -top-25 h-70 w-70 rounded-full blur-3xl"
          style={{
            background: 'var(--primary)',
            opacity: 0.14
          }}
        />

        <div
          className="absolute -bottom-25 -right-25 h-70 w-70 rounded-full blur-3xl"
          style={{
            background: 'var(--primary)',
            opacity: 0.1
          }}
        />

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
      </div>

      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-xl"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--muted)'
              }}
            >
              <span
                className="h-2 w-2 rounded-full animate-pulse"
                style={{
                  background: 'var(--success)'
                }}
              />
              Usage Statistics
            </div>

            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              AI Platform
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--primary), var(--text))`
                }}
              >
                Performance Insights
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
              style={{
                color: 'var(--muted)'
              }}
            >
              Monitor realtime AI performance, intelligent analytics and neural
              processing systems inside one modern dashboard experience.
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
              Export Report
            </button>

            <button
              className="rounded-2xl border px-6 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
            >
              View Analytics
            </button>
          </div>
        </div>

        {/* TOP STATS */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              {/* GLOW */}
              <div
                className="absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl transition-all duration-300 group-hover:scale-125"
                style={{
                  background: 'var(--primary)',
                  opacity: 0.12
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className="text-sm"
                      style={{
                        color: 'var(--muted)'
                      }}
                    >
                      {item.title}
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold">
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className="rounded-xl px-3 py-2 text-xs font-medium"
                    style={{
                      background: item.growth.includes('-')
                        ? 'var(--danger-bg)'
                        : 'var(--success-bg)',
                      color: item.growth.includes('-')
                        ? 'var(--danger)'
                        : 'var(--success)'
                    }}
                  >
                    {item.growth}
                  </div>
                </div>

                <p
                  className="mt-6 text-sm leading-6"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div
            className="rounded-4xl border p-6"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            {/* HEADER */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">Neural AI Activity</h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Live AI processing and intelligent analytics overview.
                </p>
              </div>

              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                style={{
                  background: 'var(--success-bg)',
                  color: 'var(--success)'
                }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
                System Active
              </div>
            </div>

            {/* CHART UI */}
            <div
              className="relative overflow-hidden rounded-[28px] border p-6"
              style={{
                background:
                  'linear-gradient(to bottom right, var(--primary-bg-1), var(--primary-bg-2))',
                borderColor: 'var(--primary-border)'
              }}
            >
              {/* CHART LINES */}
              <div className="flex h-65 items-end gap-3 sm:gap-4">
                {[40, 60, 35, 75, 52, 95, 65, 88, 55, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="relative flex-1 rounded-t-full transition-all duration-500 hover:-translate-y-2"
                      style={{
                        height: `${height}%`,
                        background: `linear-gradient(to top, var(--primary), transparent)`
                      }}
                    >
                      <div
                        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full"
                        style={{
                          background: 'var(--primary)',
                          boxShadow: `0 0 12px var(--primary)`
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* ACTIVE MODULES */}
            <div
              className="rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Active Modules</h3>

                <span
                  className="text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Realtime
                </span>
              </div>

              <div className="space-y-4">
                {activity.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border p-4"
                    style={{
                      background: 'var(--primary-bg-2)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>

                        <p
                          className="mt-2 text-sm"
                          style={{
                            color: 'var(--muted)'
                          }}
                        >
                          {item.users} active users
                        </p>
                      </div>

                      <div
                        className="rounded-xl px-3 py-2 text-xs font-medium"
                        style={{
                          background: 'var(--success-bg)',
                          color: 'var(--success)'
                        }}
                      >
                        {item.progress}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI STATUS */}
            <div
              className="relative overflow-hidden rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div
                className="absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl"
                style={{
                  background: 'var(--primary)',
                  opacity: 0.12
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
                  AI STATUS
                </div>

                <h3 className="text-2xl font-semibold">
                  Neural Systems Online
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Intelligent AI infrastructure currently processing realtime
                  automation and advanced neural analytics.
                </p>

                <button
                  className="mt-6 rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--primary)',
                    color: '#fff'
                  }}
                >
                  Open AI Console
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
