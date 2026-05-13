import { useAuth } from '../../lib/auth'
import { UPSFLogo } from '../../components/UPSFLogo'
import { Bell, IdCard, Scale, Users, FileCheck, ChevronRight, MessageSquare } from 'lucide-react'

export function PanelAdministrativa() {
  const { user } = useAuth()
  const p = user.profile

  const STATS = [
    { label: 'Credenciales emitidas', value: '612', delta: '+18' },
    { label: 'Consultas jurídicas', value: '34', delta: '+8' },
    { label: 'Consultas contables', value: '19', delta: '+4' },
  ]

  const EQUIPO = [
    { nombre: 'Dr. Juan Manuel Roel', rol: 'Abogado', consultas: 12 },
    { nombre: 'Dra. Mayra Di Mónica', rol: 'Abogada', consultas: 9 },
    { nombre: 'Dr. Gabriel Pozzi', rol: 'Abogado', consultas: 13 },
    { nombre: 'Cont. Gabriel Galimini', rol: 'Contador', consultas: 11 },
    { nombre: 'Cont. Gastón Pacheco', rol: 'Contador', consultas: 8 },
  ]

  const CREDENCIALES = [
    { afiliado: 'L. Fernández', tipo: 'Nueva emisión', fecha: '08/05/2026' },
    { afiliado: 'A. Romero', tipo: 'Renovación', fecha: '07/05/2026' },
    { afiliado: 'D. Castillo', tipo: 'Nueva emisión', fecha: '05/05/2026' },
  ]

  return (
    <div className="flex-1">
      <div className="bg-navy text-white pt-6 pb-7 px-5">
        <div className="flex items-center gap-3 mb-7">
          <UPSFLogo size={42} />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[12px] font-medium">Secretaría Administrativa</div>
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
        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Equipo jurídico y contable</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          {EQUIPO.map((e, i) => (
            <div key={i} className="px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-accent-mauve/15 text-accent-mauve grid place-items-center text-[10px] font-medium flex-shrink-0">
                {e.nombre.split(' ').slice(-2).map(s => s[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="text-[12px] font-medium">{e.nombre}</div>
                <div className="text-[10px] text-ink-mute">{e.rol}</div>
              </div>
              <div className="text-right">
                <div className="text-[13px] font-mono font-medium text-navy">{e.consultas}</div>
                <div className="text-[8px] text-ink-mute">este mes</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Últimas credenciales emitidas</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          {CREDENCIALES.map((c, i) => (
            <div key={i} className="px-4 py-3 flex items-center gap-3">
              <IdCard size={16} className="text-ink-soft flex-shrink-0" />
              <div className="flex-1">
                <div className="text-[12px] font-medium">{c.afiliado}</div>
                <div className="text-[10px] text-ink-mute">{c.tipo} · {c.fecha}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3 mt-5">Gestión</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white border border-rule rounded-xl p-3">
            <div className="w-9 h-9 rounded-lg grid place-items-center bg-navy-50 text-navy mb-2"><IdCard size={17} /></div>
            <div className="text-[12px] font-medium">Credenciales</div>
            <div className="text-[10px] text-ink-mute mt-0.5">Emitir y renovar</div>
          </div>
          <div className="bg-white border border-rule rounded-xl p-3">
            <div className="w-9 h-9 rounded-lg grid place-items-center bg-violet-50 text-accent-mauve mb-2"><Scale size={17} /></div>
            <div className="text-[12px] font-medium">Asesoría</div>
            <div className="text-[10px] text-ink-mute mt-0.5">Consultas y turnos</div>
          </div>
        </div>
      </div>
    </div>
  )
}
