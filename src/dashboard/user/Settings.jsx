export default function Settings() {
  const profileSettings = [
    {
      title: 'Realtime Notifications',
      desc: 'Receive AI system alerts and realtime activity updates.',
      active: true
    },
    {
      title: 'Cloud Synchronization',
      desc: 'Sync database activity and analytics across all devices.',
      active: true
    },
    {
      title: 'Advanced Security',
      desc: 'Enable intelligent protection and AI threat monitoring.',
      active: false
    },
    {
      title: 'Smart AI Assistant',
      desc: 'Use AI powered recommendations and workflow automation.',
      active: true
    }
  ]

  const integrations = [
    {
      name: 'OpenAI API',
      status: 'Connected'
    },
    {
      name: 'Firebase Cloud',
      status: 'Active'
    },
    {
      name: 'MongoDB Atlas',
      status: 'Connected'
    },
    {
      name: 'Stripe Payments',
      status: 'Enabled'
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
            opacity: 0.14
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
              AI User Preferences
            </div>

            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Intelligent User
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--primary), var(--text))`
                }}
              >
                Settings Center
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
              style={{
                color: 'var(--muted)'
              }}
            >
              Manage intelligent AI preferences, security systems, integrations
              and modern cloud infrastructure from one centralized dashboard.
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
              Save Changes
            </button>

            <button
              className="rounded-2xl border px-6 py-4 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
            >
              Export Settings
            </button>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* PROFILE CARD */}
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
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                  {/* AVATAR */}
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-[28px] text-3xl font-semibold"
                    style={{
                      background: 'var(--primary-bg-1)',
                      color: 'var(--primary)'
                    }}
                  >
                    KC
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-semibold">
                      Kyachingprue Marma
                    </h2>

                    <p
                      className="mt-2 text-sm"
                      style={{
                        color: 'var(--muted)'
                      }}
                    >
                      Full Stack AI Developer • Cloud Infrastructure Engineer
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <div
                        className="rounded-xl px-3 py-2 text-xs"
                        style={{
                          background: 'var(--success-bg)',
                          color: 'var(--success)'
                        }}
                      >
                        VERIFIED ACCOUNT
                      </div>

                      <div
                        className="rounded-xl px-3 py-2 text-xs"
                        style={{
                          background: 'var(--primary-bg-1)',
                          color: 'var(--primary)'
                        }}
                      >
                        PRO AI PLAN
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SETTINGS LIST */}
            <div
              className="rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Smart Preferences</h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Customize intelligent AI workflow and cloud systems.
                </p>
              </div>

              <div className="space-y-4">
                {profileSettings.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-5 rounded-3xl border p-5 sm:flex-row sm:items-center sm:justify-between"
                    style={{
                      background: 'var(--primary-bg-2)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>

                      <p
                        className="mt-2 max-w-xl text-sm leading-6"
                        style={{
                          color: 'var(--muted)'
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>

                    {/* TOGGLE */}
                    <div
                      className={`relative flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-all duration-300 ${
                        item.active ? 'justify-end' : 'justify-start'
                      }`}
                      style={{
                        background: item.active
                          ? 'var(--primary)'
                          : 'var(--primary-bg-1)'
                      }}
                    >
                      <div className="h-6 w-6 rounded-full bg-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ACCOUNT SETTINGS */}
            <div
              className="rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Account Information</h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Manage personal account and cloud profile settings.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  'Full Name',
                  'Email Address',
                  'Cloud Workspace',
                  'Password'
                ].map((field, index) => (
                  <div key={index}>
                    <label
                      className="mb-3 block text-sm"
                      style={{
                        color: 'var(--muted)'
                      }}
                    >
                      {field}
                    </label>

                    <input
                      type="text"
                      defaultValue={
                        field === 'Full Name'
                          ? 'Kyachingprue Marma'
                          : field === 'Email Address'
                            ? 'kyaching@example.com'
                            : field === 'Cloud Workspace'
                              ? 'AI Workspace Pro'
                              : '••••••••••'
                      }
                      className="w-full rounded-2xl border px-4 py-4 text-sm outline-none"
                      style={{
                        background: 'var(--primary-bg-2)',
                        borderColor: 'var(--border)',
                        color: 'var(--text)'
                      }}
                    />
                  </div>
                ))}
              </div>
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

                <h3 className="text-2xl font-semibold">82% Storage Used</h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  AI cloud systems currently using 1.8TB storage across neural
                  infrastructure and intelligent analytics.
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
                      width: '82%',
                      background: 'var(--primary)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* INTEGRATIONS */}
            <div
              className="rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">Connected Services</h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Manage AI integrations and cloud connected systems.
                </p>
              </div>

              <div className="space-y-4">
                {integrations.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-3xl border p-5"
                    style={{
                      background: 'var(--primary-bg-2)',
                      borderColor: 'var(--border)'
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* ICON */}
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
                        style={{
                          background: 'var(--primary-bg-1)',
                          color: 'var(--primary)'
                        }}
                      >
                        ⚡
                      </div>

                      <div>
                        <h4 className="font-semibold">{item.name}</h4>

                        <p
                          className="mt-1 text-sm"
                          style={{
                            color: 'var(--muted)'
                          }}
                        >
                          Cloud Integration
                        </p>
                      </div>
                    </div>

                    <div
                      className="rounded-xl px-3 py-2 text-xs"
                      style={{
                        background: 'var(--success-bg)',
                        color: 'var(--success)'
                      }}
                    >
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECURITY */}
            <div
              className="relative overflow-hidden rounded-4xl border p-6"
              style={{
                background: 'var(--card)',
                borderColor: 'var(--border)'
              }}
            >
              <div
                className="absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl"
                style={{
                  background: 'var(--primary)',
                  opacity: 0.1
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
                  SECURITY ACTIVE
                </div>

                <h3 className="text-2xl font-semibold">
                  AI Security Protection
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{
                    color: 'var(--muted)'
                  }}
                >
                  Your intelligent cloud systems are protected using realtime
                  monitoring, encrypted storage and AI-powered threat detection.
                </p>

                <button
                  className="mt-6 rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'var(--primary)',
                    color: '#fff'
                  }}
                >
                  Open Security Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
