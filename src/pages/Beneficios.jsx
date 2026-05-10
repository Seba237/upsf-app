import { Link, useParams, Navigate } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
import { BENEFICIOS } from '../data/institucional'
import { Heart, Map, Scale, Tag, Shield, ChevronRight, Phone, Mail, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const ICONS = { heart: Heart, map: Map, scale: Scale, tag: Tag, shield: Shield }
const TONES = {
  forest: 'bg-emerald-50 text-accent-forest',
  ochre: 'bg-amber-50 text-accent-ochre',
  mauve: 'bg-violet-50 text-accent-mauve',
  rust: 'bg-orange-50 text-accent-rust',
  navy: 'bg-navy-50 text-navy'
}

export function BeneficiosPage() {
  const [filter, setFilter] = useState('todos')
  const filtros = [
    { id: 'todos', label: 'Todos' },
    { id: 'salud', label: 'Salud' },
    { id: 'turismo', label: 'Turismo' },
    { id: 'comercios', label: 'Comercios' },
    { id: 'legal', label: 'Legal' }
  ]

  return (
    <div className="bg-cream min-h-full pb-6">
      <div className="bg-navy text-white px-5 pt-6 pb-5">
        <h1 className="text-[22px] font-light">Beneficios y servicios</h1>
        <p className="text-[12px] text-white/65 mt-1">Convenios, mutual y asesoramiento para afiliados.</p>
      </div>

      <div className="px-4 pt-4 pb-2 flex gap-1.5 overflow-x-auto -mx-4 px-4 scrollbar-none">
        {filtros.map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)}
            className={`text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition ${
              filter === f.id ? 'bg-navy text-white' : 'bg-white text-ink-soft border border-rule hover:border-ink-mute'
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="px-4 pt-3 space-y-2.5">
        {BENEFICIOS.map((b) => {
          const Icon = ICONS[b.iconKey] || Tag
          return (
            <Link key={b.id} to={`/beneficios/${b.id}`}
              className="block bg-white border border-rule rounded-2xl p-3.5 hover:shadow-card transition active:scale-[0.99]">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg grid place-items-center flex-shrink-0 ${TONES[b.color]}`}>
                  <Icon size={19} strokeWidth={1.7} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium text-ink leading-tight">{b.nombre}</div>
                  <div className="text-[11px] text-ink-mute mt-1 leading-snug">{b.bajada}</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {b.tags?.map((t, i) => (
                      <span key={i} className="text-[10px] px-1.5 py-0.5 bg-cream-200 rounded text-ink-soft">{t}</span>
                    ))}
                  </div>
                </div>
                <ChevronRight size={15} className="text-ink-faint mt-1 flex-shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function BeneficioDetailPage() {
  const { id } = useParams()
  const beneficio = BENEFICIOS.find(b => b.id === id)
  if (!beneficio) return <Navigate to="/beneficios" replace />

  const Icon = ICONS[beneficio.iconKey] || Tag

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title={beneficio.nombre} />

      <div className="px-4 pt-2">
        <div className="bg-white border border-rule rounded-2xl p-5">
          <div className={`w-12 h-12 rounded-xl grid place-items-center mb-4 ${TONES[beneficio.color]}`}>
            <Icon size={22} strokeWidth={1.6} />
          </div>
          <h2 className="text-[18px] font-medium leading-tight">{beneficio.nombre}</h2>
          <p className="text-[12px] text-ink-mute mt-1">{beneficio.bajada}</p>
          <p className="text-[13px] text-ink-soft mt-4 leading-relaxed">{beneficio.detalle.descripcion}</p>
        </div>

        {beneficio.detalle.items && (
          <div className="mt-3 bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
            {beneficio.detalle.items.map((it, i) => (
              <ItemRow key={i} title={it.titulo} detail={it.detalle} />
            ))}
          </div>
        )}

        {beneficio.detalle.regiones && (
          <div className="mt-3">
            <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium px-1 mb-2">Regiones disponibles</div>
            <div className="grid grid-cols-2 gap-2">
              {beneficio.detalle.regiones.map(r => (
                <button key={r.id} className="bg-white border border-rule rounded-xl p-3 text-left hover:shadow-card transition active:scale-[0.99]">
                  <div className="text-[13px] font-medium">{r.nombre}</div>
                  <div className="text-[10px] text-ink-mute mt-0.5 font-mono tabular">{r.cant} convenios</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {beneficio.detalle.equipo && (
          <div className="mt-3 bg-white border border-rule rounded-2xl p-4">
            <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Equipo de profesionales</div>
            <div className="space-y-2.5">
              {beneficio.detalle.equipo.map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent-mauve/15 text-accent-mauve grid place-items-center text-[11px] font-medium">
                    {m.titulo.split(' ').slice(-2).map(s => s[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-[12px] font-medium leading-tight">{m.titulo}</div>
                    <div className="text-[10px] text-ink-mute">{m.rol}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {beneficio.detalle.contacto && (
          <div className="mt-3 bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
            <ContactRow icon={Phone} label="Atención y consultas" value={beneficio.detalle.contacto.telefono} />
            <ContactRow icon={Mail} label="Correo electrónico" value={beneficio.detalle.contacto.email} />
            <ContactRow icon={Globe} label="Sitio web" value={beneficio.detalle.contacto.web} />
          </div>
        )}

        <button className="mt-4 w-full bg-navy text-white py-3 rounded-xl font-medium text-[13px] hover:bg-navy-dark transition active:scale-[0.99]">
          Solicitar este beneficio
        </button>
      </div>
    </div>
  )
}

function ItemRow({ title, detail }) {
  const [open, setOpen] = useState(false)
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left px-4 py-3 hover:bg-cream-200/50 transition">
      <div className="flex items-center gap-2">
        <div className="flex-1 text-[13px] font-medium">{title}</div>
        <ChevronDown size={16} className={`text-ink-faint transition ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && <div className="text-[12px] text-ink-mute mt-1.5 leading-relaxed">{detail}</div>}
    </button>
  )
}

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Icon size={16} className="text-ink-soft flex-shrink-0" strokeWidth={1.6} />
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-ink-mute">{label}</div>
        <div className="text-[12px] font-medium truncate">{value}</div>
      </div>
    </div>
  )
}
