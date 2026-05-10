export default function Security() {
  const securityLogs = [
    {
      title: 'Multi-Factor Authentication',
      status: 'Enabled',
      time: '2 mins ago',
      level: 'Secure'
    },
    {
      title: 'Cloud Firewall Protection',
      status: 'Active',
      time: '8 mins ago',
      level: 'Protected'
    },
    {
      title: 'AI Threat Detection',
      status: 'Scanning',
      time: 'Live',
      level: 'Monitoring'
    },
    {
      title: 'Database Encryption',
      status: 'Secured',
      time: '12 mins ago',
      level: 'Encrypted'
    }
  ]

  const devices = [
    {
      device: 'MacBook Pro M3',
      browser: 'Chrome Browser',
      location: 'San Francisco, USA',
      status: 'Current Session'
    },
    {
      device: 'iPhone 15 Pro',
      browser: 'Safari Browser',
      location: 'New York, USA',
      status: 'Trusted Device'
    },
    {
      device: 'Windows Desktop',
      browser: 'Edge Browser',
      location: 'London, UK',
      status: 'Recent Login'
    }
  ]

  const stats = [
    {
      title: 'Threats Blocked',
      value: '18.2K',
      growth: '+28%'
    },
    {
      title: 'Encrypted Data',
      value: '1.4TB',
      growth: '+11%'
    },
    {
      title: 'Secure Sessions',
      value: '99.9%',
      growth: '+6%'
    },
    {
      title: 'Firewall Activity',
      value: '24/7',
      growth: 'LIVE'
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
          className="absolute -left-30 -top-30 h-80 w-[320px] rounded-full blur-3xl"
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
              Security Monitoring
            </div>

            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Intelligent AI
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--primary), var(--text))`
                }}
              >
                Security Center
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
              style={{
                color: 'var(--muted)'
              }}
            >
              Protect realtime infrastructure, cloud databases and AI systems
              using modern intelligent security monitoring tools.
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
              Run Security Scan
            </button>

            <button
              className="rounded-2xl border px-6 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
            >
              Export Reports
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
                    background:
                      item.growth === 'LIVE'
                        ? 'var(--primary-bg-1)'
                        : 'var(--success-bg)',
                    color:
                      item.growth === 'LIVE'
                        ? 'var(--primary)'
                        : 'var(--success)'
                  }}
                >
                  {item.growth}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* SECURITY STATUS */}
            <div
              className="relative overflow-hidden rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              {/* GLOW */}
              <div
                className="absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background: 'var(--primary)',
                  opacity: 0.12
                }}
              />

              <div className="relative z-10">
                <div
                  className="mb-4 inline-flex rounded-full px-4 py-2 text-xs font-medium"
                  style={{
                    background: 'var(--success-bg)',
                    color: 'var(--success)'
                  }}
                >
                  SYSTEM PROTECTED
                </div>

                <h2 className="text-3xl font-semibold">
                  AI Infrastructure Security Active
                </h2>

                <p
                  className="mt-5 max-w-2xl text-sm leading-7"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Your neural cloud infrastructure is protected using realtime
                  AI monitoring, intelligent threat detection and enterprise
                  level encryption systems.
                </p>

                {/* PROGRESS */}
                <div className="mt-8">
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="text-sm"
                      style={{
                        color: 'var(--muted)'
                      }}
                    >
                      Security Score
                    </span>

                    <span
                      className="text-sm font-medium"
                      style={{
                        color: 'var(--success)'
                      }}
                    >
                      98%
                    </span>
                  </div>

                  <div
                    className="h-3 overflow-hidden rounded-full"
                    style={{
                      background: 'var(--primary-bg-2)'
                    }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: '98%',
                        background: 'var(--success)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECURITY LOGS */}
            <div
              className="rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">Security Activity</h3>

                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: 'var(--muted)'
                    }}
                  >
                    Realtime AI protection and monitoring logs.
                  </p>
                </div>

                <span
                  className="rounded-full px-4 py-2 text-xs font-medium"
                  style={{
                    background: 'var(--success-bg)',
                    color: 'var(--success)'
                  }}
                >
                  LIVE
                </span>
              </div>

              <div className="space-y-4">
                {securityLogs.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'var(--primary-bg-2)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold">{item.title}</h4>

                        <p
                          className="mt-2 text-sm"
                          style={{
                            color: 'var(--muted)'
                          }}
                        >
                          Last activity: {item.time}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <div
                          className="rounded-xl px-3 py-2 text-xs"
                          style={{
                            background: 'var(--primary-bg-1)',
                            color: 'var(--primary)'
                          }}
                        >
                          {item.status}
                        </div>

                        <div
                          className="rounded-xl px-3 py-2 text-xs"
                          style={{
                            background: 'var(--success-bg)',
                            color: 'var(--success)'
                          }}
                        >
                          {item.level}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* LOGIN DEVICES */}
            <div
              className="rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Trusted Devices</h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Devices currently connected to your AI cloud system.
                </p>
              </div>

              <div className="space-y-4">
                {devices.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border p-5"
                    style={{
                      background: 'var(--primary-bg-2)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* ICON */}
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
                        style={{
                          background: 'var(--primary-bg-1)',
                          color: 'var(--primary)'
                        }}
                      >
                        💻
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <h4 className="font-semibold">{item.device}</h4>

                            <p
                              className="mt-1 text-sm"
                              style={{
                                color: 'var(--muted)'
                              }}
                            >
                              {item.browser}
                            </p>
                          </div>

                          <div
                            className="inline-flex rounded-xl px-3 py-2 text-xs"
                            style={{
                              background: 'var(--success-bg)',
                              color: 'var(--success)'
                            }}
                          >
                            {item.status}
                          </div>
                        </div>

                        <p
                          className="mt-4 text-sm"
                          style={{
                            color: 'var(--muted)'
                          }}
                        >
                          📍 {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI SECURITY ALERT */}
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
                  AI DEFENSE SYSTEM
                </div>

                <h3 className="text-2xl font-semibold">
                  Intelligent Threat Detection
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Neural AI systems are continuously monitoring suspicious
                  activities, unauthorized access attempts and realtime cloud
                  vulnerabilities.
                </p>

                <button
                  className="mt-6 rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--primary)',
                    color: '#fff'
                  }}
                >
                  Open Security Console
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
