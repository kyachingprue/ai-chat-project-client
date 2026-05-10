export default function Database() {
  const users = [
    {
      id: '#DB-1021',
      name: 'Sophia Carter',
      role: 'AI Engineer',
      status: 'Active',
      storage: '148GB',
      projects: 12
    },
    {
      id: '#DB-1842',
      name: 'Ethan Walker',
      role: 'Data Analyst',
      status: 'Online',
      storage: '96GB',
      projects: 9
    },
    {
      id: '#DB-2944',
      name: 'Ava Thompson',
      role: 'ML Researcher',
      status: 'Active',
      storage: '212GB',
      projects: 14
    },
    {
      id: '#DB-4092',
      name: 'Noah Wilson',
      role: 'System Admin',
      status: 'Syncing',
      storage: '78GB',
      projects: 7
    }
  ]

  const stats = [
    {
      title: 'Database Requests',
      value: '8.4M',
      growth: '+22%'
    },
    {
      title: 'Cloud Storage',
      value: '1.8TB',
      growth: '+11%'
    },
    {
      title: 'Realtime Sync',
      value: '99.9%',
      growth: '+4%'
    },
    {
      title: 'Active Users',
      value: '24.8K',
      growth: '+18%'
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

        {/* GLOW */}
        <div
          className="absolute -left-25 -top-25 h-80 w-[320px] rounded-full blur-3xl"
          style={{
            background: 'var(--primary)',
            opacity: 0.15
          }}
        />

        <div
          className="absolute -bottom-30 -right-30 h-80 w-[320px] rounded-full blur-3xl"
          style={{
            background: 'var(--primary)',
            opacity: 0.1
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
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
                className="h-2 w-2 animate-pulse rounded-full"
                style={{
                  background: 'var(--success)'
                }}
              />
              Database Management
            </div>

            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Intelligent Cloud
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--primary), var(--text))`
                }}
              >
                Database System
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
              style={{
                color: 'var(--muted)'
              }}
            >
              Monitor user activity, neural storage systems, realtime syncing
              and AI-powered cloud infrastructure with modern analytics.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              className="rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--primary)',
                color: '#fff',
                boxShadow: 'var(--shadow)'
              }}
            >
              Add Database
            </button>

            <button
              className="rounded-2xl border px-6 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
            >
              Export Analytics
            </button>
          </div>
        </div>

        {/* STATS */}
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
                <p
                  className="text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  {item.title}
                </p>

                <h2 className="mt-4 text-3xl font-semibold">{item.value}</h2>

                <div
                  className="mt-5 inline-flex rounded-xl px-3 py-2 text-xs font-medium"
                  style={{
                    background: 'var(--success-bg)',
                    color: 'var(--success)'
                  }}
                >
                  {item.growth}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT SIDE */}
          <div
            className="rounded-4xl border p-5 sm:p-6"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)'
            }}
          >
            {/* TOP */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Database Users</h2>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Active users connected with AI cloud infrastructure.
                </p>
              </div>

              <input
                type="text"
                placeholder="Search users..."
                className="rounded-2xl border px-4 py-3 text-sm outline-none"
                style={{
                  background: 'var(--primary-bg-2)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>

            {/* USER TABLE */}
            <div className="space-y-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--primary-bg-2)',
                    borderColor: 'var(--border)'
                  }}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                      {/* AVATAR */}
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-semibold"
                        style={{
                          background: 'var(--primary-bg-1)',
                          color: 'var(--primary)'
                        }}
                      >
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">{user.name}</h3>

                        <p
                          className="mt-1 text-sm"
                          style={{
                            color: 'var(--muted)'
                          }}
                        >
                          {user.role}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <div
                            className="rounded-xl px-3 py-2 text-xs"
                            style={{
                              background: 'var(--primary-bg-1)',
                              color: 'var(--primary)'
                            }}
                          >
                            {user.id}
                          </div>

                          <div
                            className="rounded-xl px-3 py-2 text-xs"
                            style={{
                              background: 'var(--success-bg)',
                              color: 'var(--success)'
                            }}
                          >
                            {user.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-wrap gap-3">
                      <div
                        className="rounded-2xl px-4 py-3 text-sm"
                        style={{
                          background: 'var(--card)'
                        }}
                      >
                        💾 {user.storage}
                      </div>

                      <div
                        className="rounded-2xl px-4 py-3 text-sm"
                        style={{
                          background: 'var(--card)'
                        }}
                      >
                        🚀 {user.projects} Projects
                      </div>

                      <button
                        className="rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'var(--primary)',
                          color: '#fff'
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* STORAGE */}
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
                  CLOUD STORAGE
                </div>

                <h3 className="text-2xl font-semibold">78% Storage Used</h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Neural database systems are currently using 1.8TB cloud
                  storage with realtime synchronization active.
                </p>

                {/* PROGRESS */}
                <div
                  className="mt-6 h-3 overflow-hidden rounded-full"
                  style={{
                    background: 'var(--primary-bg-2)'
                  }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: '78%',
                      background: 'var(--primary)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ACTIVITY */}
            <div
              className="rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">Realtime Activity</h3>

                <span
                  className="text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Live
                </span>
              </div>

              <div className="space-y-4">
                {[
                  'AI database synced successfully.',
                  'New user connected to cloud server.',
                  'Realtime analytics processing active.',
                  'Storage optimization completed.'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl p-4"
                    style={{
                      background: 'var(--primary-bg-2)'
                    }}
                  >
                    <div
                      className="mt-1 h-2.5 w-2.5 rounded-full"
                      style={{
                        background: 'var(--primary)'
                      }}
                    />

                    <p
                      className="text-sm leading-6"
                      style={{
                        color: 'var(--muted)'
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
