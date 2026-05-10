import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../lib/auth'
import { TopBar } from '../../components/TopBar'
import { UPSFLogo } from '../../components/UPSFLogo'
import { RECLAMOS_DIRECTIVO } from '../../data/institucional'
import { Bell, FileText, Newspaper, Users, Calendar, MessageSquare, ChevronRight, Filter, Search, Send, Image as ImageIcon, Check } from 'lucide-react'

export function HomeDirectivo() {
  const { user } = useAuth()
  const p = user.profile

  const STATS = [
    { label: 'Afiliados activos', value: '612', delta: '+4' },
    { label: 'Consultas hoy', value: '38', delta: '+12' },
    { label: 'Reclamos abiertos', value: '7', delta: '−2' }
  ]

  const ACTIONS = [
    { to: '/directivo/publicar', label: 'Publicar novedad', desc: 'Push segmentado por seccional', Icon: Newspaper, tone: 'bg-navy-50 text-navy' },
    { to: '/directivo/asamblea', label: 'Convocar asamblea', desc: 'Confirmación online de asistencia', Icon: Calendar, tone: 'bg-amber-50 text-accent-ochre' },
    { to: '/directivo/reclamos', label: 'Reclamos del sector', desc: '7 abiertos · 3 sin asignar', Icon: FileText, tone: 'bg-orange-50 text-accent-rust' },
    { to: '/directivo/padron', label: 'Padrón de afiliados', desc: 'Filtros por seccional y empresa', Icon: Users, tone: 'bg-violet-50 text-accent-mauve' }
  ]

  return (
    <div className="flex-1">
      <div className="bg-navy text-white pt-6 pb-7 px-5">
        <div className="flex items-center gap-3 mb-7">
          <UPSFLogo size={42} />
          <div className="leading-tight">
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[12px] font-medium">Panel Directivo</div>
          </div>
          <button className="ml-auto relative p-2 hover:bg-white/10 rounded-full transition">
            <Bell size={19} strokeWidth={1.6} className="opacity-90" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-rust rounded-full ring-2 ring-navy" />
          </button>
        </div>

        <div className="text-[13px] text-white/70">Hola,</div>
        <div className="text-[22px] font-light tracking-tight">{p.nombre}</div>
        <div className="text-[11px] text-white/65 mt-1">{p.cargo}</div>

        <div className="grid grid-cols-3 gap-2 mt-5">
          {STATS.map((s, i) => (
            <div key={i} className="bg-white/10 border border-white/10 rounded-xl px-3 py-2.5">
              <div className="flex items-baseline gap-1">
                <div className="text-[20px] font-light tabular font-mono">{s.value}</div>
                <div className="text-[9px] text-white/55 font-mono">{s.delta}</div>
              </div>
              <div className="text-[9px] text-white/55 leading-tight mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pt-5">
        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Herramientas de gestión</div>
        <div className="space-y-2">
          {ACTIONS.map(({ to, label, desc, Icon, tone }) => (
            <Link key={to} to={to}
              className="flex items-center gap-3 bg-white border border-rule rounded-xl p-3 hover:shadow-card transition active:scale-[0.99]">
              <div className={`w-10 h-10 rounded-lg grid place-items-center flex-shrink-0 ${tone}`}>
                <Icon size={18} strokeWidth={1.7} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium">{label}</div>
                <div className="text-[11px] text-ink-mute mt-0.5">{desc}</div>
              </div>
              <ChevronRight size={15} className="text-ink-faint" />
            </Link>
          ))}
        </div>
      </div>

      <div className="px-4 pt-5 pb-6">
        <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Actividad reciente</div>
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          <ActivityRow time="hace 12 min" text="Nuevo reclamo R-2026-0142 ingresado en Tracción Eléctrica" />
          <ActivityRow time="hace 1 h" text="38 nuevos mensajes en Consultas UPSF" />
          <ActivityRow time="hace 3 h" text="Asamblea del 15/05 confirmada por 87 afiliados" />
        </div>
      </div>
    </div>
  )
}

function ActivityRow({ time, text }) {
  return (
    <div className="px-4 py-3">
      <div className="text-[10px] text-ink-mute uppercase tracking-wider font-mono">{time}</div>
      <div className="text-[12px] text-ink mt-0.5 leading-snug">{text}</div>
    </div>
  )
}

// ===== Reclamos =====

const ESTADO_TONE = {
  'sin asignar': 'bg-orange-50 text-accent-rust border-accent-rust/20',
  'en gestión': 'bg-amber-50 text-accent-ochre border-accent-ochre/20',
  'resuelto': 'bg-emerald-50 text-accent-forest border-accent-forest/20'
}
const PRIO_DOT = { alta: 'bg-accent-rust', media: 'bg-accent-ochre', baja: 'bg-ink-faint' }

export function ReclamosDirectivoPage() {
  const [filter, setFilter] = useState('todos')
  const filtered = filter === 'todos' ? RECLAMOS_DIRECTIVO : RECLAMOS_DIRECTIVO.filter(r => r.estado === filter)

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Reclamos del sector" subtitle={`${RECLAMOS_DIRECTIVO.length} totales · ${RECLAMOS_DIRECTIVO.filter(r => r.estado === 'sin asignar').length} sin asignar`} />

      <div className="px-4 pt-2 pb-2 flex gap-1.5 overflow-x-auto scrollbar-none">
        {[
          { id: 'todos', label: 'Todos' },
          { id: 'sin asignar', label: 'Sin asignar' },
          { id: 'en gestión', label: 'En gestión' },
          { id: 'resuelto', label: 'Resueltos' }
        ].map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)}
            className={`text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap font-medium transition ${
              filter === f.id ? 'bg-navy text-white' : 'bg-white text-ink-soft border border-rule'
            }`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="px-4 pt-3 space-y-2.5">
        {filtered.map(r => (
          <div key={r.id} className="bg-white border border-rule rounded-2xl p-3.5">
            <div className="flex items-start gap-3">
              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${PRIO_DOT[r.prioridad]}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-mono tabular text-ink-mute">{r.id}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium border uppercase tracking-wider ${ESTADO_TONE[r.estado]}`}>
                    {r.estado}
                  </span>
                </div>
                <div className="text-[13px] font-medium leading-snug">{r.tema}</div>
                <div className="text-[11px] text-ink-mute mt-1.5 flex items-center gap-2">
                  <span>{r.afiliado}</span><span className="text-ink-faint">·</span>
                  <span>{r.sector}</span><span className="text-ink-faint">·</span>
                  <span className="font-mono tabular">{r.fecha}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center text-[12px] text-ink-mute py-12">Sin reclamos en esta categoría.</div>
        )}
      </div>
    </div>
  )
}

// ===== Publicar Novedad =====

export function PublicarNovedadPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    titulo: '',
    bajada: '',
    categoria: 'Comunicado',
    seccion: 'todos',
    enviarPush: true
  })
  const [step, setStep] = useState('compose') // compose | preview | sent

  const totalDestinatarios = form.seccion === 'todos' ? 612 : form.seccion === 'roca' ? 184 : form.seccion === 'mitre' ? 167 : 261

  if (step === 'sent') {
    return (
      <div className="bg-cream min-h-full pb-6 flex items-center justify-center px-6">
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 rounded-full bg-accent-forest/10 grid place-items-center mx-auto mb-4">
            <Check size={26} className="text-accent-forest" strokeWidth={2} />
          </div>
          <h2 className="text-[18px] font-medium mb-2">Novedad publicada</h2>
          <p className="text-[12px] text-ink-mute leading-relaxed">
            Se notificó a <span className="font-mono tabular font-medium">{totalDestinatarios}</span> afiliados.
          </p>
          <button onClick={() => navigate('/')}
            className="mt-6 bg-navy text-white px-5 py-2.5 rounded-xl font-medium text-[13px]">
            Volver al panel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Publicar novedad" subtitle={step === 'preview' ? 'Vista previa' : 'Redacción y segmentación'} />

      <div className="px-4 pt-2">
        {step === 'compose' && (
          <>
            <div className="bg-white border border-rule rounded-2xl p-4 space-y-3">
              <Field label="Título" required>
                <input type="text" value={form.titulo} onChange={(e) => setForm({...form, titulo: e.target.value})}
                  placeholder="Ej: Acuerdo paritario 2026"
                  className="w-full bg-cream border border-rule rounded-lg px-3 py-2.5 text-[13px] outline-none focus:border-navy transition" />
              </Field>
              <Field label="Bajada" required>
                <textarea value={form.bajada} onChange={(e) => setForm({...form, bajada: e.target.value})}
                  rows={3} placeholder="Resumen del comunicado…"
                  className="w-full bg-cream border border-rule rounded-lg px-3 py-2.5 text-[13px] outline-none focus:border-navy transition resize-none" />
              </Field>
              <Field label="Categoría">
                <select value={form.categoria} onChange={(e) => setForm({...form, categoria: e.target.value})}
                  className="w-full bg-cream border border-rule rounded-lg px-3 py-2.5 text-[13px] outline-none focus:border-navy transition">
                  <option>Comunicado</option><option>Paritaria</option><option>Asamblea</option>
                  <option>Política</option><option>Solidaridad</option><option>Memoria</option>
                </select>
              </Field>
            </div>

            <div className="mt-3 bg-white border border-rule rounded-2xl p-4 space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium">Segmentación</div>
              <Field label="Destinatarios">
                <select value={form.seccion} onChange={(e) => setForm({...form, seccion: e.target.value})}
                  className="w-full bg-cream border border-rule rounded-lg px-3 py-2.5 text-[13px] outline-none focus:border-navy transition">
                  <option value="todos">Todos los afiliados (612)</option>
                  <option value="roca">Línea Roca (184)</option>
                  <option value="mitre">Línea Mitre (167)</option>
                  <option value="san-martin">Línea San Martín (261)</option>
                </select>
              </Field>
              <label className="flex items-center gap-3 pt-1">
                <input type="checkbox" checked={form.enviarPush} onChange={(e) => setForm({...form, enviarPush: e.target.checked})}
                  className="w-4 h-4 accent-navy" />
                <div className="flex-1">
                  <div className="text-[12.5px] font-medium">Enviar notificación push</div>
                  <div className="text-[10px] text-ink-mute">Llega al instante a los dispositivos.</div>
                </div>
              </label>
            </div>

            <button onClick={() => setStep('preview')}
              disabled={!form.titulo || !form.bajada}
              className="mt-4 w-full bg-navy text-white py-3 rounded-xl font-medium text-[13px] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-navy-dark transition active:scale-[0.99]">
              Vista previa
            </button>
          </>
        )}

        {step === 'preview' && (
          <>
            <div className="bg-white border border-rule rounded-2xl p-4">
              <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Cómo se va a ver</div>
              <div className="bg-cream border border-rule rounded-xl p-3.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-navy-50 text-navy">{form.categoria}</span>
                  <span className="text-[10px] text-ink-faint font-mono tabular">hoy</span>
                </div>
                <div className="text-[13px] font-medium leading-snug">{form.titulo}</div>
                <div className="text-[12px] text-ink-mute mt-1.5 leading-relaxed">{form.bajada}</div>
              </div>
              <div className="mt-4 pt-4 border-t border-rule grid grid-cols-2 gap-3 text-[11px]">
                <div>
                  <div className="text-ink-mute uppercase tracking-wider text-[9px]">Destinatarios</div>
                  <div className="font-medium font-mono tabular mt-0.5">{totalDestinatarios}</div>
                </div>
                <div>
                  <div className="text-ink-mute uppercase tracking-wider text-[9px]">Push</div>
                  <div className="font-medium mt-0.5">{form.enviarPush ? 'Sí' : 'No'}</div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <button onClick={() => setStep('compose')}
                className="bg-white border border-rule py-3 rounded-xl font-medium text-[13px] hover:shadow-card transition">
                Editar
              </button>
              <button onClick={() => setStep('sent')}
                className="bg-navy text-white py-3 rounded-xl font-medium text-[13px] flex items-center justify-center gap-2 hover:bg-navy-dark transition">
                <Send size={14} /> Publicar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Field({ label, children, required }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-wider text-ink-mute font-medium mb-1.5">
        {label} {required && <span className="text-accent-rust">*</span>}
      </label>
      {children}
    </div>
  )
}

// ===== Padrón =====

const PADRON_MOCK = [
  { id: '1846', nombre: 'Sebastián Perez', cargo: 'Jefe de Catenaria', linea: 'Roca', estado: 'activo' },
  { id: '04122', nombre: 'María Salazar', cargo: 'Tracción Eléctrica', linea: 'Roca', estado: 'activo' },
  { id: '03998', nombre: 'Lucas Fernández', cargo: 'Catenaria', linea: 'Roca', estado: 'activo' },
  { id: '03871', nombre: 'José Pereyra', cargo: 'Subestaciones', linea: 'Mitre', estado: 'activo' },
  { id: '03654', nombre: 'Andrea Romero', cargo: 'Vía y Obras', linea: 'San Martín', estado: 'licencia' },
  { id: '03512', nombre: 'Federico Aguirre', cargo: 'Catenaria', linea: 'Mitre', estado: 'activo' },
  { id: '03488', nombre: 'Carolina Méndez', cargo: 'Tracción Eléctrica', linea: 'Roca', estado: 'activo' },
  { id: '03402', nombre: 'Roberto Sosa', cargo: 'Catenaria', linea: 'Roca', estado: 'activo' },
  { id: '03298', nombre: 'Patricia Vega', cargo: 'Señalamiento', linea: 'San Martín', estado: 'activo' },
  { id: '03221', nombre: 'Diego Castillo', cargo: 'Vía y Obras', linea: 'Mitre', estado: 'activo' }
]

export function PadronPage() {
  const [search, setSearch] = useState('')
  const filtered = PADRON_MOCK.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.id.includes(search) ||
    p.linea.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Padrón de afiliados" subtitle={`${PADRON_MOCK.length} resultados (muestra)`} />

      <div className="px-4 pt-2">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-mute" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por nombre, N° o línea…"
            className="w-full bg-white border border-rule rounded-xl pl-9 pr-3 py-2.5 text-[13px] outline-none focus:border-navy transition" />
        </div>
        <div className="flex gap-1.5 mt-3 overflow-x-auto scrollbar-none">
          {['Todos', 'Roca', 'Mitre', 'San Martín', 'Activos', 'Licencias'].map((f, i) => (
            <button key={i} className={`text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap font-medium ${
              i === 0 ? 'bg-navy text-white' : 'bg-white text-ink-soft border border-rule'
            }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-3">
        <div className="bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          {filtered.map(p => (
            <div key={p.id} className="flex items-center gap-3 px-3 py-2.5">
              <div className="w-9 h-9 rounded-full bg-navy/10 text-navy grid place-items-center text-[10px] font-medium flex-shrink-0">
                {p.nombre.split(' ').map(s => s[0]).join('').slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-medium leading-tight truncate">{p.nombre}</div>
                <div className="text-[10px] text-ink-mute mt-0.5 truncate">
                  <span className="font-mono tabular">{p.id}</span> · {p.cargo} · {p.linea}
                </div>
              </div>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                p.estado === 'activo' ? 'bg-emerald-50 text-accent-forest' : 'bg-amber-50 text-accent-ochre'
              }`}>
                {p.estado}
              </span>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center text-[12px] text-ink-mute py-12">Sin resultados.</div>
          )}
        </div>
        <p className="text-[10px] text-ink-mute mt-3 px-1 leading-relaxed">
          Muestra de 10 registros del padrón. En producción este módulo se conecta al padrón completo del sindicato con filtros avanzados, exportación y bitácora de cambios.
        </p>
      </div>
    </div>
  )
}

// ===== Asamblea (stub) =====
export function AsambleaDirectivoPage() {
  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Convocar asamblea" />
      <div className="px-4 pt-2">
        <div className="bg-white border border-rule rounded-2xl p-5 text-center">
          <Calendar size={32} className="text-ink-faint mx-auto mb-3" strokeWidth={1.4} />
          <h2 className="text-[16px] font-medium mb-1">Próximamente</h2>
          <p className="text-[12px] text-ink-mute leading-relaxed">
            Convocatoria con confirmación de asistencia online, orden del día editable y registro de quórum.
          </p>
        </div>
      </div>
    </div>
  )
}
