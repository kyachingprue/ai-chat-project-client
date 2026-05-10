import useTheme from '@/hooks/useTheme'

const themes = [
  {
    name: 'black',
    color: '#02030a',
    border: '#38bdf8'
  },
  {
    name: 'blue',
    color: '#3b82f6',
    border: '#60a5fa'
  },
  {
    name: 'white',
    color: '#ffffff',
    border: '#002966'
  },
  {
    name: 'green',
    color: '#22c55e',
    border: '#4ade80'
  }
]

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="flex items-center gap-3 rounded-2xl border py-1 px-2 backdrop-blur-2xl"
      style={{
        background: 'var(--card)',
        borderColor: 'var(--border)'
      }}
    >
      {themes.map(item => {
        const active = theme === item.name

        return (
          <button
            key={item.name}
            onClick={() => setTheme(item.name)}
            className="relative flex h-9 w-9 items-center justify-center rounded-md transition-all duration-300 hover:scale-110"
            style={{
              background: active ? 'var(--primary-bg-1)' : 'transparent'
            }}
          >
            {/* ACTIVE ANIMATED BORDER */}
            {active && (
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  border: `1.5px solid ${item.border}`,
                  boxShadow: `0 0 18px ${item.border}40`
                }}
              />
            )}

            {/* COLOR */}
            <div
              className="relative z-10 h-5 w-5 rounded-md border"
              style={{
                background: item.color,
                borderColor:
                  item.name === 'white'
                    ? 'rgba(15,23,42,0.15)'
                    : 'rgba(255,255,255,0.15)'
              }}
            />

            {/* SMALL ACTIVE DOT */}
            {active && (
              <span
                className="absolute -bottom-1 h-1.5 w-1.5 rounded-full"
                style={{
                  background: item.border
                }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

export default ThemeSwitcher
