import { useState } from 'react'
import { TopBar } from '../../components/TopBar'
import { CheckCircle, Circle, Clock, AlertCircle, Plus, Filter } from 'lucide-react'

const TAREAS = [
  { id: 1, titulo: 'Preparar informe de área para mesa paritaria', asignado: 'Todas las secretarías', responsable: 'Cada secretario', plazo: '20/05/2026', estado: 'pendiente', prioridad: 'alta', secretaria: 'general' },
  { id: 2, titulo: 'Procesar solicitud de préstamo urgente — R. Gómez', asignado: 'Previsión', responsable: 'S. Cuello', plazo: '12/05/2026', estado: 'en curso', prioridad: 'alta', secretaria: 'prevision' },
  { id: 3, titulo: 'Publicar convenio Hotel Termas en redes sociales', asignado: 'Prensa', responsable: 'R. Peschiera', plazo: '14/05/2026', estado: 'pendiente', prioridad: 'media', secretaria: 'prensa' },
  { id: 4, titulo: 'Cargar nuevos convenios de Patagonia en la app', asignado: 'Turismo', responsable: 'M. Montiel', plazo: '16/05/2026', estado: 'en curso', prioridad: 'media', secretaria: 'turismo' },
  { id: 5, titulo: 'Gestionar reclamo adicional nocturno — Tracción Eléctrica', asignado: 'Gremial', responsable: 'D. Feldhiem', plazo: '15/05/2026', estado: 'en curso', prioridad: 'alta', secretaria: 'gremial' },
  { id: 6, titulo: 'Renovar credenciales vencidas (lote marzo)', asignado: 'Administrativa', responsable: 'G. Pozzi', plazo: '18/05/2026', estado: 'pendiente', prioridad: 'baja', secretaria: 'administrativa' },
  { id: 7, titulo: 'Confirmar quórum para Asamblea del 15/05', asignado: 'General', responsable: 'G. Bello', plazo: '14/05/2026', estado: 'completada', prioridad: 'alta', secretaria: 'general' },
  { id: 8, titulo: 'Enviar grilla de paritarias a delegados del interior', asignado: 'Gremial', responsable: 'D. Feldhiem', plazo: '05/05/2026', estado: 'completada', prioridad: 'alta', secretaria: 'gremial' },
]

const ESTADO_CONFIG = {
  'pendiente': { icon: Circle, color: 'text-accent-ochre', bg: 'bg-amber-50', label: 'Pendiente' },
  'en curso': { icon: Clock, color: 'text-navy', bg: 'bg-navy-50', label: 'En curso' },
  'completada': { icon: CheckCircle, color: 'text-accent-forest', bg: 'bg-emerald-50', label: 'Completada' },
}

const PRIO_DOT = { alta: 'bg-accent-rust', media: 'bg-accent-ochre', baja: 'bg-ink-faint' }

export function TareasPage() {
  const [filtro, setFiltro] = useState('todas')
  const filtros = ['todas', 'pendiente', 'en curso', 'completada']

  const filtered = filtro === 'todas' ? TAREAS : TAREAS.filter(t => t.estado === filtro)

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Tareas y seguimiento" subtitle={`${TAREAS.filter(t => t.estado !== 'completada').length} activas · ${TAREAS.filter(t => t.estado === 'completada').length} completadas`} />

      <div className="px-4 pt-2">
        {/* Filtros */}
        <div className="flex gap-1.5 overflow-x-auto pb-3 scrollbar-none">
          {filtros.map(f => (
            <button key={f} onClick={() => setFiltro(f)}
              className={`text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition capitalize ${
                filtro === f ? 'bg-navy text-white' : 'bg-white text-ink-soft border border-rule'
              }`}>
              {f === 'todas' ? 'Todas' : ESTADO_CONFIG[f]?.label || f}
            </button>
          ))}
        </div>

        {/* Botón nueva tarea */}
        <button className="w-full bg-white border border-dashed border-navy/30 rounded-xl py-3 flex items-center justify-center gap-2 text-[12px] text-navy font-medium hover:bg-navy-50 transition mb-3">
          <Plus size={15} /> Asignar nueva tarea
        </button>

        {/* Lista */}
        <div className="space-y-2.5">
          {filtered.map((t) => {
            const est = ESTADO_CONFIG[t.estado] || ESTADO_CONFIG.pendiente
            const Icon = est.icon
            return (
              <div key={t.id} className="bg-white border border-rule rounded-2xl p-3.5">
                <div className="flex items-start gap-3">
                  <Icon size={18} className={`mt-0.5 flex-shrink-0 ${est.color}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${PRIO_DOT[t.prioridad]}`} />
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${est.bg} ${est.color}`}>
                        {est.label}
                      </span>
                    </div>
                    <div className={`text-[13px] font-medium leading-snug ${t.estado === 'completada' ? 'line-through text-ink-mute' : 'text-ink'}`}>
                      {t.titulo}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-ink-mute">
                      <span className="bg-cream-200 px-1.5 py-0.5 rounded">{t.asignado}</span>
                      <span>→ {t.responsable}</span>
                    </div>
                    <div className="text-[9px] text-ink-faint font-mono mt-1.5">Plazo: {t.plazo}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
