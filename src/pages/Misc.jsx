import { useAuth } from '../lib/auth'
import { useNavigate, Link } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
import { LogOut, Bell, Lock, ChevronRight, Phone, Mail, MapPin, Globe, Instagram, Facebook, Twitter, Youtube, BookOpen, ExternalLink, FileText } from 'lucide-react'

export function PerfilPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const p = user.profile

  return (
    <div className="bg-cream min-h-full pb-6">
      <div className="bg-navy text-white px-5 pt-8 pb-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-14 h-14 rounded-full bg-white/15 grid place-items-center text-[18px] font-medium ring-2 ring-white/20">
            {p.avatar}
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/55">{user.role === 'directivo' ? 'Directivo' : 'Afiliado'}</div>
            <div className="text-[18px] font-medium leading-tight mt-0.5">{p.nombreCompleto}</div>
            <div className="text-[11px] text-white/65 mt-0.5">N° {p.id} · {p.seccional}</div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="bg-white border border-rule rounded-2xl p-4">
          <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Datos laborales</div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-[12px]">
            <Field label="Cargo" value={p.cargo} />
            <Field label="Categoría" value={p.categoria} />
            <Field label="Base" value={p.base} />
            <Field label="Línea" value={p.linea} />
            <Field label="Empresa" value={p.empresa} full />
            <Field label="Antigüedad" value={p.antiguedad} />
            <Field label="Ingreso" value={p.fechaIngreso} mono />
          </div>
        </div>

        <div className="mt-3 bg-white border border-rule rounded-2xl p-4">
          <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Contacto</div>
          <div className="space-y-2">
            <Field label="Email" value={p.email} mono />
            <Field label="Teléfono" value={p.telefono} mono />
          </div>
        </div>

        <div className="mt-3 bg-white border border-rule rounded-2xl divide-y divide-rule overflow-hidden">
          <SettingRow icon={Bell} label="Notificaciones" value="Activadas" />
          <SettingRow icon={Lock} label="Privacidad y datos" />
          <SettingRow icon={FileText} label="Términos y condiciones" />
        </div>

        <button onClick={() => { logout(); navigate('/login') }}
          className="mt-5 w-full bg-white border border-accent-rust/30 text-accent-rust py-3 rounded-xl font-medium text-[13px] flex items-center justify-center gap-2 hover:bg-accent-rust/5 transition active:scale-[0.99]">
          <LogOut size={15} /> Cerrar sesión
        </button>

        <div className="mt-6 text-center text-[10px] text-ink-faint tracking-wider">
          UPSF App · v1.0.0
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, full, mono }) {
  return (
    <div className={full ? 'col-span-2' : ''}>
      <div className="text-[10px] text-ink-mute uppercase tracking-wider">{label}</div>
      <div className={`text-[13px] font-medium mt-0.5 ${mono ? 'font-mono tabular' : ''}`}>{value}</div>
    </div>
  )
}

function SettingRow({ icon: Icon, label, value }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-cream-200/50 transition text-left">
      <Icon size={16} className="text-ink-soft" strokeWidth={1.7} />
      <div className="flex-1 text-[13px] font-medium">{label}</div>
      {value && <span className="text-[11px] text-ink-mute">{value}</span>}
      <ChevronRight size={14} className="text-ink-faint" />
    </button>
  )
}

// ===== Contacto =====

export function ContactoPage() {
  const sociales = [
    { Icon: Globe, label: 'upsf.com.ar', url: 'https://upsf.com.ar' },
    { Icon: Instagram, label: '@upsf_oficial', url: '#' },
    { Icon: Facebook, label: 'UPSF Oficial', url: '#' },
    { Icon: Twitter, label: '@UPSF_oficial', url: '#' },
    { Icon: Youtube, label: 'UPSF TV', url: '#' }
  ]

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Contacto" />

      <div className="px-4 pt-2 space-y-3">
        <div className="bg-white border border-rule rounded-2xl p-4">
          <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Sede central</div>
          <div className="space-y-2.5">
            <ContactRow icon={MapPin} title="Av. Brasil 1138" subtitle="C.A.B.A. — Argentina" />
            <ContactRow icon={Phone} title="+54 11 2376-4800" subtitle="Atención de 9 a 18 hs" />
            <ContactRow icon={Mail} title="info@upsf.com.ar" subtitle="Consultas generales" />
          </div>
        </div>

        <div className="bg-white border border-rule rounded-2xl p-4">
          <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Canales oficiales</div>
          <div className="space-y-1">
            {sociales.map(({ Icon, label, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 py-2 hover:text-navy transition">
                <Icon size={16} className="text-ink-soft" strokeWidth={1.7} />
                <span className="text-[12px] font-medium flex-1">{label}</span>
                <ExternalLink size={12} className="text-ink-faint" />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white border border-rule rounded-2xl p-4">
          <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium mb-3">Tu delegado</div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-navy/10 text-navy grid place-items-center text-[12px] font-medium">LB</div>
            <div className="flex-1">
              <div className="text-[13px] font-medium">Leonardo B.</div>
              <div className="text-[11px] text-ink-mute">Línea Roca · Sector Catenaria</div>
            </div>
            <button className="text-[11px] bg-navy text-white px-3 py-1.5 rounded-lg font-medium">Contactar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactRow({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={16} className="text-ink-soft mt-0.5" strokeWidth={1.7} />
      <div>
        <div className="text-[13px] font-medium">{title}</div>
        <div className="text-[11px] text-ink-mute mt-0.5">{subtitle}</div>
      </div>
    </div>
  )
}

// ===== Biblioteca =====

const LIBROS = [
  { titulo: 'Historia de los Ferrocarriles Argentinos', autor: 'Raúl Scalabrini Ortiz', sinopsis: 'La obra cumbre que impulsó la nacionalización de 1948.' },
  { titulo: 'Manual de Conducción Política', autor: 'Juan D. Perón', sinopsis: 'Obra fundamental para la formación de cuadros dirigentes.' },
  { titulo: 'Política Británica en el Río de la Plata', autor: 'Raúl Scalabrini Ortiz', sinopsis: 'Análisis sobre la influencia inglesa en nuestra economía.' },
  { titulo: 'La Razón de mi Vida', autor: 'Eva Perón', sinopsis: 'El pensamiento y legado de Evita para los trabajadores.' },
  { titulo: 'Los Profetas del Odio', autor: 'Arturo Jauretche', sinopsis: 'Análisis de la colonización pedagógica y cultural.' },
  { titulo: 'Breve Historia de los Ferrocarriles Argentinos', autor: 'Varios autores', sinopsis: 'Recorrido histórico por el desarrollo del tren en Argentina.' }
]

export function BibliotecaPage() {
  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Biblioteca" subtitle="Documentación gremial e histórica" />

      <div className="px-4 pt-2 space-y-2.5">
        {LIBROS.map((l, i) => (
          <div key={i} className="bg-white border border-rule rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-12 bg-navy-50 text-navy rounded grid place-items-center flex-shrink-0">
                <BookOpen size={18} strokeWidth={1.6} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium leading-snug">{l.titulo}</div>
                <div className="text-[11px] text-ink-mute mt-0.5">{l.autor}</div>
                <div className="text-[12px] text-ink-soft mt-2 leading-relaxed">{l.sinopsis}</div>
                <button className="mt-2 text-[11px] text-navy font-medium inline-flex items-center gap-1">
                  Leer online <ExternalLink size={11} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
