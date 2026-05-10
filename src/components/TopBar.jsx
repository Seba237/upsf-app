import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function TopBar({ title, subtitle, onBack, right, theme = 'light' }) {
  const navigate = useNavigate()
  const dark = theme === 'dark'
  const handleBack = onBack || (() => navigate(-1))

  return (
    <div className={`sticky top-0 z-30 ${dark ? 'bg-navy text-white' : 'bg-cream text-ink'} backdrop-blur`}>
      <div className="px-4 pt-3 pb-3 flex items-center gap-3">
        <button onClick={handleBack}
                className={`-ml-2 p-2 rounded-full transition active:scale-95 ${dark ? 'hover:bg-white/10' : 'hover:bg-ink/5'}`}>
          <ChevronLeft size={22} strokeWidth={1.8} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-[15px] font-medium tracking-tight truncate">{title}</h1>
          {subtitle && <p className={`text-[11px] mt-0.5 truncate ${dark ? 'text-white/65' : 'text-ink-mute'}`}>{subtitle}</p>}
        </div>
        {right}
      </div>
    </div>
  )
}
