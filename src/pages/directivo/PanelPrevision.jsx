import { useAuth } from '../../lib/auth'
import { UPSFLogo } from '../../components/UPSFLogo'
import { Bell, Heart, DollarSign, Pill, Eye, Bone, ChevronRight, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export function PanelPrevision() {
  const { user } = useAuth()
  const p = user.profile

  const STATS = [
    { label: 'Préstamos activos', value: '48', delta: '+3' },
    { label: 'Subsidios este mes', value: '12', delta: '+5' },
    { label: 'Solicitudes pendientes', value: '3', delta: '' },
  ]

  const SOLICITUDES = [
    { id: 'SOL-0089', afiliado: 'R. Gómez', tipo: 'Préstamo', monto: '$85.000', estado: 'pendiente', fecha: '08/05/2026' },
    { id: 'SOL-0088', afiliado: 'M. Salazar', tipo: 'Subsidio nacimiento', monto: '$45.000', estado: 'pendiente', fecha: '06/05/2026' },
    { id: 'SOL-0087', afiliado: 'J. Pereyra', tipo: 'Préstamo', monto: '$100.000', estado: 'pendiente', fecha: '05/05/2026' },
    { id: 'SOL-0086', afiliado: 'C. Méndez', tipo: 'Subsidio mudanza', monto: '$50.000', estado: 'aprobado', fecha: '02/05/2026' },
    { id: 'SOL-0085', afiliado: 'F. Aguirre', tipo: 'Préstamo', monto: '$70.000', estado: 'aprobado', fecha: '30/04/2026' },
  ]

  const SERVICIOS = [
    { nombre: 'Farmacias adheridas', cant: '12 convenios', icon: Pill, color: 'bg-emerald-50 text-accent-forest' },
    { nombre: 'Odontología', cant: '3 centros', icon: Heart, color: 'bg-navy-50 text-navy' },
    { nombre: 'Óptica', cant: 'Cadeo Optired + Hipervisión', icon: Eye, color: 'bg-amber-50 text-accent-ochre' },
    { nombre: 'Ortopedia', cant: 'Ans. Care + Pasco', icon: Bone, color: 'bg-violet-50 text-accent-mauve' },
  ]

  const ESTADO_ICON = { pendiente: AlertCircle, aprobado: CheckCircle }
  const ESTADO_COLOR = { pendiente: 'text-accent-ochre', aprobado: 'text-accent-forest' }

  return (
    <div className="flex-1">
      <div className="bg-navy text-white pt-6 pb-7 px-5">
        <div className="flex items-center gap-3 mb-7">
          <UPSFLogo size={42} />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[12px] font-medium">Previsión y Acción Social</div>
          </div>
          <button className="ml-auto relative p-2 hover:bg-white/10 rounded-full transition">
            <Bell size={19} strokeWidth={1.6} className="opacity-90" />
          </button>
        </div>
        <div className="text-[13px] text-white/70">Bienvenido,</div>
        <div className="text-[22px] font-light tracking-tight">{p.nombre}</div>
        <div className="text-[11px] text-white/65 mt-1">{p.cargo}</div>

        <div className="grid grid-cols-3 gap-2 mt-5">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-3 py-2.5">
              <div className="text-[20px] font-light tabular font-mono">{s.value}</div>
              <div className="text-[9px] text-white/55 leading-tight mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cream px-4 pt-5 pb-6">
        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Solicitudes recientes</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          {SOLICITUDES.map((s, i) => {
            const Icon = ESTADO_ICON[s.estado] || Clock
            return (
              <div key={i} className="px-4 py-3 flex items-center gap-3">
                <Icon size={16} className={`flex-shrink-0 ${ESTADO_COLOR[s.estado] || 'text-ink-mute'}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium">{s.afiliado}</span>
                    <span className="text-[11px] font-mono tabular font-medium">{s.monto}</span>
                  </div>
                  <div className="text-[10px] text-ink-mute mt-0.5">
                    <span className="font-mono">{s.id}</span> · {s.tipo} · {s.fecha}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Red de servicios</div>
        <div className="grid grid-cols-2 gap-2">
          {SERVICIOS.map((s, i) => (
            <div key={i} className="bg-white border border-rule rounded-xl p-3">
              <div className={`w-9 h-9 rounded-lg grid place-items-center mb-2 ${s.color}`}>
                <s.icon size={17} strokeWidth={1.7} />
              </div>
              <div className="text-[12px] font-medium">{s.nombre}</div>
              <div className="text-[10px] text-ink-mute mt-0.5">{s.cant}</div>
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Sepelios</div>
        <div className="bg-white border border-rule rounded-xl p-3">
          <div className="text-[12px] font-medium">Cobertura activa — grupo familiar</div>
          <div className="text-[10px] text-ink-mute mt-1">Atención 24 hs en todo el territorio nacional. 0 casos abiertos.</div>
        </div>
      </div>
    </div>
  )
}
