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

      {/* WhatsApp — Chatbot oficial */}
      <div className="px-4 pb-4">
        <a href="https://wa.me/5491123764800" target="_blank" rel="noopener noreferrer"
          className="block bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-3.5 hover:bg-[#25D366]/15 transition active:scale-[0.99]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#25D366] rounded-full grid place-items-center flex-shrink-0">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-medium text-[#128C7E]">Chatbot UPSF WhatsApp</div>
              <div className="text-[11px] text-ink-mute mt-0.5">Consultá al asistente automatizado del sindicato</div>
            </div>
            <ChevronRight size={15} className="text-[#25D366]" />
          </div>
        </a>
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
