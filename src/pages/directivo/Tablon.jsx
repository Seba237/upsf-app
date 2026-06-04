import { useState } from 'react'
import { TopBar } from '../../components/TopBar'
import { useAuth } from '../../lib/auth'
import { Pin, MessageSquare, Clock, Send, ChevronDown } from 'lucide-react'

const MENSAJES = [
  {
    id: 1, autor: 'Gonzalo Bello', cargo: 'Sec. General', avatar: 'GB',
    fecha: '10/05/2026 · 16:42', fijado: true,
    texto: 'Compañeros: confirmo reunión paritaria el 22/05 a las 10:00 hs en sede del Ministerio. Necesito que cada secretaría prepare un informe breve de su área para presentar en mesa. Plazo: 20/05.',
    respuestas: 3
  },
  {
    id: 2, autor: 'Darío Feldhiem', cargo: 'Sec. Gremial', avatar: 'DF',
    fecha: '10/05/2026 · 14:15', fijado: false,
    texto: 'Ingresaron 3 reclamos nuevos esta semana en Tracción Eléctrica. Uno es por adicional nocturno impago desde marzo. Lo estoy siguiendo con RRHH de SOFSE. Los mantengo al tanto.',
    respuestas: 1
  },
  {
    id: 3, autor: 'Rita Peschiera', cargo: 'Sec. Prensa', avatar: 'RP',
    fecha: '09/05/2026 · 11:30', fijado: false,
    texto: 'La novedad de paritarias tuvo 589 lecturas (96% de los afiliados). Es la más leída del año. Sugiero mantener este formato para las próximas publicaciones.',
    respuestas: 5
  },
  {
    id: 4, autor: 'Sergio Cuello', cargo: 'Sec. Previsión', avatar: 'SC',
    fecha: '08/05/2026 · 09:20', fijado: false,
    texto: 'Tenemos 3 solicitudes de préstamo pendientes de aprobación. Una es urgente (Gómez, $85.000 por tratamiento médico). Necesito el OK de Hacienda para procesar.',
    respuestas: 2
  },
  {
    id: 5, autor: 'Mauro Montiel', cargo: 'Sec. Turismo', avatar: 'MM',
    fecha: '07/05/2026 · 18:05', fijado: false,
    texto: 'Cerramos convenio nuevo con Hotel Termas de Río Hondo, 25% de descuento para afiliados y grupo familiar. Ya lo cargué en la app. Total: 105 convenios activos.',
    respuestas: 4
  },
]

export function TablonPage() {
  const { user } = useAuth()
  const [mensaje, setMensaje] = useState('')

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Tablón directivo" subtitle="Comunicación interna de la conducción" />

      <div className="px-4 pt-2">
        {/* Redactar */}
        <div className="bg-white border border-rule rounded-2xl p-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-navy/10 text-navy grid place-items-center text-[10px] font-medium flex-shrink-0 mt-0.5">
              {user.profile.avatar}
            </div>
            <div className="flex-1">
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribí un mensaje para la conducción..."
                rows={2}
                className="w-full bg-cream border border-rule rounded-lg px-3 py-2 text-[13px] outline-none focus:border-navy transition resize-none"
              />
              <div className="flex justify-end mt-2">
                <button className="bg-navy text-white text-[11px] font-medium px-4 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-navy-dark transition active:scale-[0.99]">
                  <Send size={12} /> Publicar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mensajes */}
        <div className="space-y-3">
          {MENSAJES.map((m) => (
            <div key={m.id} className={`bg-white border rounded-2xl p-4 ${m.fijado ? 'border-navy/30 ring-1 ring-navy/10' : 'border-rule'}`}>
              {m.fijado && (
                <div className="flex items-center gap-1.5 text-[9px] text-navy font-medium uppercase tracking-wider mb-2">
                  <Pin size={10} /> Mensaje fijado
                </div>
              )}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-full bg-navy/10 text-navy grid place-items-center text-[10px] font-medium flex-shrink-0">
                  {m.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium">{m.autor}</div>
                  <div className="text-[9px] text-ink-mute">{m.cargo}</div>
                </div>
                <div className="text-[9px] text-ink-faint font-mono">{m.fecha.split(' · ')[1]}</div>
              </div>
              <div className="text-[12px] text-ink-soft leading-relaxed">{m.texto}</div>
              <div className="flex items-center gap-3 mt-3 pt-2 border-t border-rule/50">
                <button className="flex items-center gap-1.5 text-[10px] text-ink-mute hover:text-navy transition">
                  <MessageSquare size={12} /> {m.respuestas} respuestas
                </button>
                <span className="text-[9px] text-ink-faint font-mono flex items-center gap-1">
                  <Clock size={10} /> {m.fecha.split(' · ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
