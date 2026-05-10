import { Home, Gift, Newspaper, MessageSquare, User, BarChart3, FileText, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../lib/auth'

const NAV_AFILIADO = [
  { to: '/', label: 'Inicio', icon: Home, end: true },
  { to: '/beneficios', label: 'Beneficios', icon: Gift },
  { to: '/novedades', label: 'Novedades', icon: Newspaper },
  { to: '/consultas', label: 'Consultas', icon: MessageSquare },
  { to: '/perfil', label: 'Perfil', icon: User }
]

const NAV_DIRECTIVO = [
  { to: '/', label: 'Panel', icon: BarChart3, end: true },
  { to: '/directivo/reclamos', label: 'Reclamos', icon: FileText },
  { to: '/directivo/publicar', label: 'Publicar', icon: Newspaper },
  { to: '/directivo/padron', label: 'Padrón', icon: Users },
  { to: '/perfil', label: 'Perfil', icon: User }
]

export function BottomNav() {
  const { isDirectivo } = useAuth()
  const items = isDirectivo ? NAV_DIRECTIVO : NAV_AFILIADO

  return (
    <nav className="sticky bottom-0 z-20 bg-cream border-t border-rule/70 backdrop-blur">
      <div className="grid grid-cols-5 px-1 pt-1.5 pb-2 safe-bottom">
        {items.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 py-1 transition ${
                isActive ? 'text-navy' : 'text-ink-mute hover:text-ink-soft'
              }`
            }>
            {({ isActive }) => (
              <>
                <Icon size={20} strokeWidth={isActive ? 2 : 1.7} />
                <span className={`text-[10px] tracking-tight ${isActive ? 'font-medium' : ''}`}>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
