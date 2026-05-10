import { Link } from 'react-router-dom'
import { useAuth } from '../lib/auth'
import { UPSFLogo } from '../components/UPSFLogo'
import { Bell, ChevronRight, IdCard, Heart, Map, Scale, Phone, BookOpen } from 'lucide-react'
import { NOVEDADES } from '../data/institucional'

const QUICK_ACTIONS = [
  { to: '/credencial', label: 'Mi Credencial', Icon: IdCard, tone: 'bg-navy-50 text-navy' },
  { to: '/beneficios/mutual', label: 'Mutual', Icon: Heart, tone: 'bg-emerald-50 text-accent-forest' },
  { to: '/beneficios/turismo', label: 'Turismo', Icon: Map, tone: 'bg-amber-50 text-accent-ochre' },
  { to: '/beneficios/asesoria', label: 'Asesoría legal', Icon: Scale, tone: 'bg-violet-50 text-accent-mauve' }
]

const COLOR_BG = {
  rust: 'bg-orange-50 text-accent-rust',
  forest: 'bg-emerald-50 text-accent-forest',
  navy: 'bg-navy-50 text-navy',
  ochre: 'bg-amber-50 text-accent-ochre',
  mauve: 'bg-violet-50 text-accent-mauve'
}

export function HomeAfiliado() {
  const { user } = useAuth()
  const p = user.profile
  const ahora = new Date()
  const hora = ahora.getHours()
  const saludo = hora < 12 ? 'Buen día' : hora < 19 ? 'Buenas tardes' : 'Buenas noches'

  return (
    <div className="flex-1">
      {/* Header navy */}
      <div className="bg-navy text-white pt-6 pb-8 px-5">
        <div className="flex items-center gap-3 mb-7">
          <UPSFLogo size={42} />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[12px] font-medium">Unión Personal Superior Ferroviario</div>
          </div>
          <button className="ml-auto relative p-2 hover:bg-white/10 rounded-full transition">
            <Bell size={19} strokeWidth={1.6} className="opacity-90" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-rust rounded-full ring-2 ring-navy" />
          </button>
        </div>

        <div className="text-[13px] text-white/70">{saludo},</div>
        <div className="text-[22px] font-light tracking-tight">{p.nombre}</div>
        <div className="text-[11px] text-white/65 mt-1">{p.cargo} · {p.base} · {p.linea}</div>
      </div>

      {/* Credencial card overlap */}
      <div className="px-4 -mt-5">
        <Link to="/credencial"
          className="block bg-white border border-rule rounded-2xl p-3 shadow-card hover:shadow-soft transition active:scale-[0.99]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-navy-50 rounded-lg grid place-items-center flex-shrink-0">
              <IdCard size={22} className="text-navy" strokeWidth={1.6} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-ink-mute uppercase tracking-wider font-medium">Mi credencial</div>
              <div className="text-[14px] font-medium mt-0.5 tabular font-mono">N° {p.id}</div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 bg-accent-forest rounded-full" />
                <span className="text-[11px] text-ink-soft">{p.estadoAfiliacion}</span>
              </div>
            </div>
            <ChevronRight size={16} className="text-ink-faint" />
          </div>
        </Link>
      </div>

      {/* Quick actions */}
      <div className="px-4 pt-6 pb-2">
        <div className="text-[11px] text-ink-mute uppercase tracking-wider font-medium mb-3">Accesos rápidos</div>
        <div className="grid grid-cols-2 gap-2.5">
          {QUICK_ACTIONS.map(({ to, label, Icon, tone }) => (
            <Link key={to} to={to}
              className="bg-white border border-rule rounded-xl p-3 flex flex-col gap-2.5 hover:shadow-card transition active:scale-[0.99]">
              <div className={`w-9 h-9 rounded-lg grid place-items-center ${tone}`}>
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <div className="text-[13px] font-medium text-ink leading-tight">{label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Novedades */}
      <div className="px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] text-ink-mute uppercase tracking-wider font-medium">Últimas novedades</div>
          <Link to="/novedades" className="text-[11px] text-navy font-medium">Ver todas</Link>
        </div>
        <div className="space-y-2.5">
          {NOVEDADES.slice(0, 3).map((n) => (
            <Link key={n.id} to={`/novedades/${n.id}`}
              className="block bg-white border border-rule rounded-xl p-3 hover:shadow-card transition active:scale-[0.99]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${COLOR_BG[n.color] || COLOR_BG.navy}`}>
                  {n.categoria}
                </span>
                <span className="text-[10px] text-ink-faint font-mono tabular">{n.fechaCorta}</span>
              </div>
              <div className="text-[13px] font-medium leading-snug text-ink">{n.titulo}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Servicios institucionales */}
      <div className="px-4 pb-6">
        <div className="text-[11px] text-ink-mute uppercase tracking-wider font-medium mb-3">Servicios institucionales</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          <Link to="/biblioteca" className="flex items-center gap-3 px-4 py-3 hover:bg-cream transition">
            <BookOpen size={18} className="text-ink-soft" strokeWidth={1.7} />
            <div className="flex-1 text-[13px] font-medium">Biblioteca</div>
            <ChevronRight size={15} className="text-ink-faint" />
          </Link>
          <Link to="/contacto" className="flex items-center gap-3 px-4 py-3 hover:bg-cream transition">
            <Phone size={18} className="text-ink-soft" strokeWidth={1.7} />
            <div className="flex-1 text-[13px] font-medium">Contacto y delegados</div>
            <ChevronRight size={15} className="text-ink-faint" />
          </Link>
        </div>
      </div>
    </div>
  )
}
