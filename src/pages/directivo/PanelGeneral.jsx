import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/auth'
import { UPSFLogo } from '../../components/UPSFLogo'
import { Bell, Users, Newspaper, FileText, Calendar, TrendingUp, ChevronRight, Shield, Building2, BarChart3 } from 'lucide-react'

// Panel del Secretario General — vista ejecutiva global
export function PanelGeneral() {
  const { user } = useAuth()
  const p = user.profile

  const STATS = [
    { label: 'Afiliados activos', value: '612', delta: '+4', icon: Users },
    { label: 'Seccionales', value: '8', delta: '', icon: Building2 },
    { label: 'Delegados', value: '24', delta: '+1', icon: Shield },
  ]

  const AREAS = [
    { label: 'Previsión y Mutual', estado: '3 solicitudes pendientes', color: 'bg-emerald-50 text-accent-forest', icon: TrendingUp },
    { label: 'Turismo', estado: '105 convenios activos', color: 'bg-amber-50 text-accent-ochre', icon: BarChart3 },
    { label: 'Gremial e Interior', estado: '7 reclamos abiertos', color: 'bg-orange-50 text-accent-rust', icon: FileText },
    { label: 'Prensa y Propaganda', estado: '5 novedades este mes', color: 'bg-navy-50 text-navy', icon: Newspaper },
    { label: 'Administrativa', estado: '612 credenciales emitidas', color: 'bg-violet-50 text-accent-mauve', icon: Users },
  ]

  return (
    <div className="flex-1">
      <div className="bg-navy text-white pt-6 pb-7 px-5">
        <div className="flex items-center gap-3 mb-7">
          <UPSFLogo size={42} />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[12px] font-medium">Secretaría General</div>
          </div>
          <button className="ml-auto relative p-2 hover:bg-white/10 rounded-full transition">
            <Bell size={19} strokeWidth={1.6} className="opacity-90" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-rust rounded-full ring-2 ring-navy" />
          </button>
        </div>
        <div className="text-[13px] text-white/70">Bienvenido,</div>
        <div className="text-[22px] font-light tracking-tight">{p.nombre}</div>
        <div className="text-[11px] text-white/65 mt-1">{p.cargo}</div>

        <div className="grid grid-cols-3 gap-2 mt-5">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-3 py-2.5">
              <div className="flex items-baseline gap-1">
                <div className="text-[20px] font-light tabular font-mono">{s.value}</div>
                {s.delta && <div className="text-[9px] text-white/55 font-mono">{s.delta}</div>}
              </div>
              <div className="text-[9px] text-white/55 leading-tight mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cream px-4 pt-5 pb-6">
        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Estado de las áreas</div>
        <div className="space-y-2">
          {AREAS.map((a, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3">
              <div className={`w-10 h-10 rounded-lg grid place-items-center flex-shrink-0 ${a.color}`}>
                <a.icon size={18} strokeWidth={1.7} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium">{a.label}</div>
                <div className="text-[11px] text-ink-mute mt-0.5">{a.estado}</div>
              </div>
              <ChevronRight size={15} className="text-ink-faint" />
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Herramientas</div>
        <div className="space-y-2">
          <Link to="/directivo/publicar" className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3 hover:shadow-card transition">
            <div className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0 bg-navy-50 text-navy"><Newspaper size={18} strokeWidth={1.7} /></div>
            <div className="flex-1"><div className="text-[13px] font-medium">Publicar novedad</div><div className="text-[11px] text-ink-mute mt-0.5">Push a todos los afiliados</div></div>
            <ChevronRight size={15} className="text-ink-faint" />
          </Link>
          <Link to="/directivo/padron" className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3 hover:shadow-card transition">
            <div className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0 bg-violet-50 text-accent-mauve"><Users size={18} strokeWidth={1.7} /></div>
            <div className="flex-1"><div className="text-[13px] font-medium">Padrón de afiliados</div><div className="text-[11px] text-ink-mute mt-0.5">612 afiliados registrados</div></div>
            <ChevronRight size={15} className="text-ink-faint" />
          </Link>
          <Link to="/directivo/reclamos" className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3 hover:shadow-card transition">
            <div className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0 bg-orange-50 text-accent-rust"><FileText size={18} strokeWidth={1.7} /></div>
            <div className="flex-1"><div className="text-[13px] font-medium">Reclamos generales</div><div className="text-[11px] text-ink-mute mt-0.5">Vista global de todas las áreas</div></div>
            <ChevronRight size={15} className="text-ink-faint" />
          </Link>
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Agenda institucional</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          <div className="px-4 py-3">
            <div className="text-[10px] text-accent-ochre uppercase tracking-wider font-mono font-medium">15/05 · 17:00 hs</div>
            <div className="text-[12px] font-medium mt-1">Asamblea Ordinaria — Sede Constitución</div>
            <div className="text-[10px] text-ink-mute mt-1">87 afiliados confirmados</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-[10px] text-navy uppercase tracking-wider font-mono font-medium">22/05 · 10:00 hs</div>
            <div className="text-[12px] font-medium mt-1">Reunión paritaria — Mesa de negociación</div>
            <div className="text-[10px] text-ink-mute mt-1">Segundo tramo del acuerdo 2026</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-[10px] text-accent-forest uppercase tracking-wider font-mono font-medium">01/06 · 09:00 hs</div>
            <div className="text-[12px] font-medium mt-1">Plenario Nacional de Delegados</div>
            <div className="text-[10px] text-ink-mute mt-1">Orden del día en preparación</div>
          </div>
        </div>
      </div>
    </div>
  )
}
