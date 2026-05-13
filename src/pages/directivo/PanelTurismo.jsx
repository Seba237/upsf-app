import { useAuth } from '../../lib/auth'
import { UPSFLogo } from '../../components/UPSFLogo'
import { Bell, Map, Hotel, Plane, Bus, Store, TrendingUp, ChevronRight } from 'lucide-react'

export function PanelTurismo() {
  const { user } = useAuth()
  const p = user.profile

  const STATS = [
    { label: 'Convenios activos', value: '105', delta: '+6' },
    { label: 'Regiones', value: '8', delta: '' },
    { label: 'Emprendimientos', value: '23', delta: '+2' },
  ]

  const REGIONES = [
    { nombre: 'CABA', convenios: 12, uso: '28%' },
    { nombre: 'Buenos Aires', convenios: 28, uso: '35%' },
    { nombre: 'Centro', convenios: 14, uso: '12%' },
    { nombre: 'Litoral', convenios: 9, uso: '8%' },
    { nombre: 'Norte', convenios: 11, uso: '5%' },
    { nombre: 'Patagonia', convenios: 17, uso: '18%' },
    { nombre: 'Cuyo', convenios: 8, uso: '4%' },
    { nombre: 'Internacional', convenios: 6, uso: '3%' },
  ]

  const CONVENIOS_RECIENTES = [
    { nombre: 'Hotel Termas de Río Hondo', region: 'Norte', descuento: '25%', fecha: '05/05/2026' },
    { nombre: 'Complejo Las Leñas', region: 'Cuyo', descuento: '20%', fecha: '01/05/2026' },
    { nombre: 'Cabañas Lago Puelo', region: 'Patagonia', descuento: '30%', fecha: '28/04/2026' },
  ]

  return (
    <div className="flex-1">
      <div className="bg-navy text-white pt-6 pb-7 px-5">
        <div className="flex items-center gap-3 mb-7">
          <UPSFLogo size={42} />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[12px] font-medium">Secretaría de Turismo</div>
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
        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Convenios por región</div>
        <div className="grid grid-cols-2 gap-2">
          {REGIONES.map((r, i) => (
            <div key={i} className="bg-white border border-rule rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-[12px] font-medium">{r.nombre}</div>
                <div className="text-[10px] text-ink-mute mt-0.5">{r.convenios} convenios</div>
              </div>
              <div className="text-[14px] font-mono tabular font-medium text-navy">{r.uso}</div>
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Convenios recientes</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          {CONVENIOS_RECIENTES.map((c, i) => (
            <div key={i} className="px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-[12px] font-medium">{c.nombre}</div>
                <div className="text-[10px] text-ink-mute mt-0.5">{c.region} · incorporado {c.fecha}</div>
              </div>
              <span className="text-[12px] font-mono font-medium text-accent-forest bg-emerald-50 px-2 py-1 rounded">{c.descuento}</span>
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Red de emprendimientos</div>
        <div className="bg-white border border-rule rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg grid place-items-center bg-amber-50 text-accent-ochre"><Store size={18} /></div>
            <div className="flex-1">
              <div className="text-[13px] font-medium">23 emprendimientos activos</div>
              <div className="text-[11px] text-ink-mute mt-0.5">Afiliados y familiares. 4 nuevos este trimestre.</div>
            </div>
            <ChevronRight size={15} className="text-ink-faint" />
          </div>
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Transporte y agencias</div>
        <div className="bg-white border border-rule rounded-xl p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg grid place-items-center bg-navy-50 text-navy"><Bus size={17} /></div>
          <div className="flex-1">
            <div className="text-[12px] font-medium">8 agencias con descuento</div>
            <div className="text-[10px] text-ink-mute mt-0.5">Terrestres, aéreos y paquetes</div>
          </div>
        </div>
      </div>
    </div>
  )
}
