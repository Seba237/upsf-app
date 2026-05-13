import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/auth'
import { UPSFLogo } from '../../components/UPSFLogo'
import { Bell, Newspaper, BookOpen, BarChart3, Eye, ChevronRight, TrendingUp, Send } from 'lucide-react'

export function PanelPrensa() {
  const { user } = useAuth()
  const p = user.profile

  const STATS = [
    { label: 'Novedades publicadas', value: '5', delta: '+2' },
    { label: 'Lecturas este mes', value: '1.847', delta: '+340' },
    { label: 'Tasa de lectura', value: '68%', delta: '+5%' },
  ]

  const NOVEDADES_STATS = [
    { titulo: 'Grilla salarial — Paritarias 2026', lecturas: 589, tasa: '96%', fecha: '02/05' },
    { titulo: 'Convocatoria a Asamblea Ordinaria', lecturas: 412, tasa: '67%', fecha: '15/05' },
    { titulo: 'Contra la reforma a la Ley de Glaciares', lecturas: 356, tasa: '58%', fecha: '09/04' },
    { titulo: 'Tren Solidario de Emergencia', lecturas: 298, tasa: '49%', fecha: '06/04' },
    { titulo: 'Vigilia por Malvinas', lecturas: 192, tasa: '31%', fecha: '01/04' },
  ]

  return (
    <div className="flex-1">
      <div className="bg-navy text-white pt-6 pb-7 px-5">
        <div className="flex items-center gap-3 mb-7">
          <UPSFLogo size={42} />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[12px] font-medium">Prensa y Propaganda</div>
          </div>
          <button className="ml-auto relative p-2 hover:bg-white/10 rounded-full transition"><Bell size={19} strokeWidth={1.6} className="opacity-90" /></button>
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
        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Rendimiento de novedades</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          {NOVEDADES_STATS.map((n, i) => (
            <div key={i} className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="text-[12px] font-medium flex-1 min-w-0 truncate pr-3">{n.titulo}</div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-right">
                    <div className="text-[12px] font-mono font-medium text-navy">{n.lecturas}</div>
                    <div className="text-[8px] text-ink-mute">lecturas</div>
                  </div>
                  <div className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded ${
                    parseInt(n.tasa) > 60 ? 'bg-emerald-50 text-accent-forest' : 'bg-amber-50 text-accent-ochre'
                  }`}>{n.tasa}</div>
                </div>
              </div>
              <div className="text-[9px] text-ink-mute mt-1 font-mono">{n.fecha}</div>
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Herramientas</div>
        <div className="space-y-2">
          <Link to="/directivo/publicar" className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3 hover:shadow-card transition">
            <div className="w-10 h-10 rounded-lg grid place-items-center bg-navy-50 text-navy"><Send size={18} /></div>
            <div className="flex-1"><div className="text-[13px] font-medium">Publicar novedad</div><div className="text-[11px] text-ink-mute mt-0.5">Redacción, segmentación y push</div></div>
            <ChevronRight size={15} className="text-ink-faint" />
          </Link>
          <div className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3">
            <div className="w-10 h-10 rounded-lg grid place-items-center bg-amber-50 text-accent-ochre"><BookOpen size={18} /></div>
            <div className="flex-1"><div className="text-[13px] font-medium">Biblioteca gremial</div><div className="text-[11px] text-ink-mute mt-0.5">6 documentos publicados</div></div>
            <ChevronRight size={15} className="text-ink-faint" />
          </div>
          <div className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3">
            <div className="w-10 h-10 rounded-lg grid place-items-center bg-violet-50 text-accent-mauve"><BarChart3 size={18} /></div>
            <div className="flex-1"><div className="text-[13px] font-medium">Efemérides</div><div className="text-[11px] text-ink-mute mt-0.5">Calendario de fechas significativas</div></div>
            <ChevronRight size={15} className="text-ink-faint" />
          </div>
        </div>
      </div>
    </div>
  )
}
