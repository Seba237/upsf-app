import { TopBar } from '../../components/TopBar'
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react'

const EVENTOS = [
  {
    fecha: '15/05', dia: 'Jueves', mes: 'MAY',
    titulo: 'Asamblea Ordinaria',
    hora: '17:00 hs', lugar: 'Sede Constitución — Av. Brasil 1138, CABA',
    tipo: 'asamblea', color: 'bg-accent-ochre',
    detalle: '87 afiliados confirmados. Orden del día: lectura acta anterior, informe tesorería, estado paritarias.',
    participantes: 'Todos los afiliados'
  },
  {
    fecha: '20/05', dia: 'Martes', mes: 'MAY',
    titulo: 'Entrega de informes de área',
    hora: 'Fecha límite', lugar: 'Digital — subir a la app',
    tipo: 'tarea', color: 'bg-accent-rust',
    detalle: 'Cada secretaría debe tener listo su informe para la mesa paritaria del 22/05.',
    participantes: 'Todas las secretarías'
  },
  {
    fecha: '22/05', dia: 'Jueves', mes: 'MAY',
    titulo: 'Reunión paritaria — Mesa de negociación',
    hora: '10:00 hs', lugar: 'Ministerio de Trabajo',
    tipo: 'paritaria', color: 'bg-navy',
    detalle: 'Segundo tramo del acuerdo 2026. Presentar informe de impacto del primer tramo y propuesta para el segundo.',
    participantes: 'Sec. General, Sec. Gremial, Hacienda'
  },
  {
    fecha: '28/05', dia: 'Miércoles', mes: 'MAY',
    titulo: 'Reunión de Comisión Directiva',
    hora: '14:00 hs', lugar: 'Sede Constitución',
    tipo: 'reunion', color: 'bg-accent-mauve',
    detalle: 'Revisión mensual. Temas: resultado paritaria, informe mutual, avance app institucional.',
    participantes: 'Comisión Directiva completa'
  },
  {
    fecha: '01/06', dia: 'Domingo', mes: 'JUN',
    titulo: 'Plenario Nacional de Delegados',
    hora: '09:00 hs', lugar: 'Sede Constitución',
    tipo: 'plenario', color: 'bg-accent-forest',
    detalle: 'Plenario anual. Informe de gestión, estado de paritarias, presentación de la app institucional, elección de comisión revisora.',
    participantes: 'Delegados de todo el país'
  },
  {
    fecha: '10/06', dia: 'Martes', mes: 'JUN',
    titulo: 'Capacitación — Seguridad eléctrica 2x25kV',
    hora: '08:00 hs', lugar: 'Base Constitución — Aula 3',
    tipo: 'capacitacion', color: 'bg-accent-ochre',
    detalle: 'Capacitación obligatoria para personal de catenaria y subestaciones. Duración: 4 hs.',
    participantes: 'Personal jerárquico de Energía'
  },
]

const TIPO_LABEL = {
  asamblea: 'Asamblea',
  tarea: 'Vencimiento',
  paritaria: 'Paritaria',
  reunion: 'Reunión CD',
  plenario: 'Plenario',
  capacitacion: 'Capacitación',
}

export function CalendarioPage() {
  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Calendario compartido" subtitle="Agenda unificada de la conducción" />

      <div className="px-4 pt-2">
        {/* Mes actual */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-[16px] font-medium text-ink">Mayo — Junio 2026</div>
          <div className="text-[10px] text-ink-mute font-mono">{EVENTOS.length} eventos</div>
        </div>

        {/* Timeline */}
        <div className="space-y-3">
          {EVENTOS.map((e, i) => (
            <div key={i} className="flex gap-3">
              {/* Fecha */}
              <div className="w-14 flex-shrink-0 text-center pt-1">
                <div className="text-[9px] text-ink-mute uppercase tracking-wider font-medium">{e.mes}</div>
                <div className="text-[22px] font-light text-navy font-mono leading-tight">{e.fecha.split('/')[0]}</div>
                <div className="text-[9px] text-ink-faint">{e.dia}</div>
              </div>

              {/* Línea vertical */}
              <div className="flex flex-col items-center pt-2">
                <div className={`w-3 h-3 rounded-full ${e.color} flex-shrink-0`} />
                {i < EVENTOS.length - 1 && <div className="w-0.5 flex-1 bg-rule mt-1" />}
              </div>

              {/* Contenido */}
              <div className="flex-1 bg-white border border-rule rounded-xl p-3 mb-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium text-white ${e.color}`}>
                    {TIPO_LABEL[e.tipo] || e.tipo}
                  </span>
                  <span className="text-[10px] text-ink-mute flex items-center gap-1">
                    <Clock size={10} /> {e.hora}
                  </span>
                </div>
                <div className="text-[13px] font-medium leading-snug">{e.titulo}</div>
                <div className="text-[10px] text-ink-mute mt-1.5 flex items-start gap-1.5">
                  <MapPin size={10} className="mt-0.5 flex-shrink-0" /> {e.lugar}
                </div>
                <div className="text-[10px] text-ink-soft mt-1.5 leading-relaxed">{e.detalle}</div>
                <div className="text-[9px] text-ink-faint mt-2 flex items-center gap-1.5">
                  <Users size={10} /> {e.participantes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
