import { useState } from 'react'
import { TopBar } from '../../components/TopBar'
import { Scale, TrendingUp, FileText, CheckCircle, Clock, AlertTriangle, ChevronDown, Handshake, Target, Building2 } from 'lucide-react'

const MESAS = [
  {
    id: 'mesa-2026-02',
    titulo: 'Segundo tramo — Mayo 2026',
    estado: 'en negociación',
    fecha: '22/05/2026',
    lugar: 'Ministerio de Trabajo',
    rondas: [
      {
        numero: 1, fecha: '22/05/2026', estado: 'programada',
        pedidoUPSF: 'Incremento del 3% sobre básicos de marzo. Revisión de viáticos por inflación.',
        ofertaEmpresa: 'Pendiente',
        resultado: 'Pendiente'
      }
    ],
    contexto: 'El primer tramo (nov-mar) se aplicó correctamente. La tasa de lectura de la grilla en la app fue del 96%. Se busca mantener el poder adquisitivo frente a la inflación proyectada del segundo semestre.',
    equipo: ['Gonzalo Bello', 'Darío Feldhiem', 'Marcelo Acosta'],
    documentos: ['Informe de impacto primer tramo', 'Proyección inflacionaria', 'Comparativa salarial con otros gremios']
  },
  {
    id: 'mesa-2026-01',
    titulo: 'Primer tramo — Nov 2025 a Mar 2026',
    estado: 'cerrada — acuerdo',
    fecha: '15/10/2025',
    lugar: 'Ministerio de Trabajo',
    rondas: [
      {
        numero: 1, fecha: '15/10/2025', estado: 'cerrada',
        pedidoUPSF: 'Incremento del 12% escalonado en 5 meses.',
        ofertaEmpresa: '8% en 3 meses.',
        resultado: 'Sin acuerdo — nueva ronda'
      },
      {
        numero: 2, fecha: '22/10/2025', estado: 'cerrada',
        pedidoUPSF: 'Mantener 12% pero aceptar 5 meses de escalonamiento.',
        ofertaEmpresa: '9,1% escalonado: 1,1% nov + 2% dic + 2,5% ene + 2% feb + 1,5% mar.',
        resultado: 'Acuerdo firmado — se aplica la grilla vigente'
      }
    ],
    contexto: 'Negociación exitosa. El acuerdo se reflejó en la grilla publicada en la app. 96% de lectura por parte de los afiliados.',
    equipo: ['Gonzalo Bello', 'Darío Feldhiem', 'Marcelo Acosta'],
    documentos: ['Acta acuerdo firmada', 'Grilla salarial aprobada', 'Resolución MT N° 2026/0142']
  }
]

const ESTADO_CONFIG = {
  'en negociación': { icon: Scale, color: 'text-accent-ochre', bg: 'bg-amber-50', label: 'En negociación' },
  'cerrada — acuerdo': { icon: CheckCircle, color: 'text-accent-forest', bg: 'bg-emerald-50', label: 'Cerrada — Acuerdo' },
  'cerrada — sin acuerdo': { icon: AlertTriangle, color: 'text-accent-rust', bg: 'bg-orange-50', label: 'Sin acuerdo' },
}

const RONDA_ESTADO = {
  'programada': { color: 'text-accent-ochre', bg: 'bg-amber-50' },
  'cerrada': { color: 'text-ink-mute', bg: 'bg-cream-200' },
}

export function MesaParitariaPage() {
  const [expandida, setExpandida] = useState('mesa-2026-02')

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Mesa de negociación" subtitle="Historial y seguimiento de paritarias" />

      <div className="px-4 pt-2">
        {/* Indicador de estado */}
        <div className="bg-navy text-white rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Handshake size={18} />
            <span className="text-[11px] uppercase tracking-wider font-medium text-white/70">Estado actual</span>
          </div>
          <div className="text-[18px] font-medium">Segundo tramo en negociación</div>
          <div className="text-[11px] text-white/65 mt-1">Próxima mesa: 22/05/2026 · Ministerio de Trabajo</div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-[14px] font-mono font-medium">2</div>
              <div className="text-[8px] text-white/50">Mesas</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-[14px] font-mono font-medium">3</div>
              <div className="text-[8px] text-white/50">Rondas totales</div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <div className="text-[14px] font-mono font-medium">1</div>
              <div className="text-[8px] text-white/50">Acuerdo firmado</div>
            </div>
          </div>
        </div>

        {/* Mesas */}
        {MESAS.map((mesa) => {
          const est = ESTADO_CONFIG[mesa.estado] || ESTADO_CONFIG['en negociación']
          const Icon = est.icon
          const abierta = expandida === mesa.id

          return (
            <div key={mesa.id} className="bg-white border border-rule rounded-2xl mb-3 overflow-hidden">
              <button onClick={() => setExpandida(abierta ? null : mesa.id)}
                className="w-full text-left px-4 py-3.5 flex items-center gap-3">
                <Icon size={20} className={est.color} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium">{mesa.titulo}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${est.bg} ${est.color}`}>{est.label}</span>
                    <span className="text-[9px] text-ink-faint font-mono">{mesa.fecha}</span>
                  </div>
                </div>
                <ChevronDown size={16} className={`text-ink-faint transition ${abierta ? 'rotate-180' : ''}`} />
              </button>

              {abierta && (
                <div className="px-4 pb-4 border-t border-rule">
                  {/* Contexto */}
                  <div className="mt-3 text-[11px] text-ink-soft leading-relaxed">{mesa.contexto}</div>

                  {/* Equipo */}
                  <div className="mt-3 flex items-center gap-2">
                    <Building2 size={12} className="text-ink-mute" />
                    <span className="text-[10px] text-ink-mute">Equipo: {mesa.equipo.join(', ')}</span>
                  </div>

                  {/* Rondas */}
                  <div className="mt-4">
                    <div className="text-[10px] uppercase tracking-wider text-ink-mute font-medium mb-2">Rondas de negociación</div>
                    {mesa.rondas.map((r, i) => {
                      const rc = RONDA_ESTADO[r.estado] || RONDA_ESTADO.programada
                      return (
                        <div key={i} className="bg-cream border border-rule rounded-xl p-3 mb-2">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-medium">Ronda {r.numero}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${rc.bg} ${rc.color}`}>{r.estado}</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <div className="text-[9px] text-accent-forest uppercase tracking-wider font-medium flex items-center gap-1"><Target size={9} /> Pedido UPSF</div>
                              <div className="text-[11px] text-ink-soft mt-0.5">{r.pedidoUPSF}</div>
                            </div>
                            <div>
                              <div className="text-[9px] text-accent-rust uppercase tracking-wider font-medium flex items-center gap-1"><Building2 size={9} /> Oferta empresa</div>
                              <div className="text-[11px] text-ink-soft mt-0.5">{r.ofertaEmpresa}</div>
                            </div>
                            <div>
                              <div className="text-[9px] text-navy uppercase tracking-wider font-medium flex items-center gap-1"><Scale size={9} /> Resultado</div>
                              <div className="text-[11px] text-ink font-medium mt-0.5">{r.resultado}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Documentos */}
                  <div className="mt-3">
                    <div className="text-[10px] uppercase tracking-wider text-ink-mute font-medium mb-2">Documentos</div>
                    {mesa.documentos.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 py-1.5 text-[11px] text-navy">
                        <FileText size={12} /> {d}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
