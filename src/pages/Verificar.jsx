import { useParams } from 'react-router-dom'
import { UPSFLogo } from '../components/UPSFLogo'
import { Shield, CheckCircle, User, Briefcase, MapPin, Building2, Hash } from 'lucide-react'
import { TEST_USERS } from '../data/users'
import credencialImg from '/credencial-oficial.png?url'

const CREDENCIAL_IMAGES = { '1846': credencialImg }

export function VerificarPage() {
  const { id } = useParams()
  const usuario = TEST_USERS.find(u => u.profile.id === id)

  if (!usuario) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 rounded-full bg-accent-rust/10 grid place-items-center mx-auto mb-4">
            <Shield size={26} className="text-accent-rust" />
          </div>
          <h2 className="text-[18px] font-medium mb-2">Credencial no encontrada</h2>
          <p className="text-[12px] text-ink-mute leading-relaxed">
            El afiliado N° {id} no fue encontrado en el padrón.
          </p>
        </div>
      </div>
    )
  }

  const p = usuario.profile
  const imgCredencial = CREDENCIAL_IMAGES[p.id]

  return (
    <div className="min-h-screen bg-navy">
      <div className="app-shell min-h-screen flex flex-col bg-cream">

        {/* Header */}
        <div className="bg-navy text-white px-5 pt-6 pb-5 flex items-center gap-3">
          <UPSFLogo size={36} />
          <div>
            <div className="text-[10px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[13px] font-medium">Verificación de credencial</div>
          </div>
        </div>

        <div className="px-4 pt-3 pb-6">

          {/* Badge verificada */}
          <div className="bg-accent-forest text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 mb-4 shadow-card">
            <CheckCircle size={18} strokeWidth={2} />
            <span className="text-[14px] font-medium">Credencial verificada</span>
          </div>

          {/* Imagen oficial */}
          {imgCredencial ? (
            <div className="bg-white border border-rule rounded-2xl overflow-hidden shadow-card mb-4">
              <img
                src={imgCredencial}
                alt={`Credencial oficial de ${p.nombreCompleto}`}
                className="w-full block"
              />
            </div>
          ) : (
            <div className="bg-white border border-rule rounded-2xl p-5 mb-4 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/10 text-navy grid place-items-center text-[20px] font-medium mx-auto mb-3">
                {p.avatar}
              </div>
              <div className="text-[20px] font-medium">{p.nombreCompleto}</div>
              <div className="text-[11px] text-ink-mute mt-1">Afiliado N° {p.id}</div>
            </div>
          )}

          {/* Datos de verificación */}
          <div className="bg-white border border-rule rounded-2xl p-4">
            <div className="text-[10px] uppercase tracking-wider text-ink-mute font-medium mb-3">Datos verificados</div>
            <div className="space-y-3">
              <DataRow icon={Hash} label="N° de Afiliado" value={p.id} mono />
              {p.cuit && <DataRow icon={User} label="CUIT" value={p.cuit} mono />}
              <DataRow icon={Briefcase} label="Cargo" value={p.cargo} />
              <DataRow icon={MapPin} label="Base" value={`${p.base} · ${p.linea}`} />
              <DataRow icon={Building2} label="Empresa" value={p.empresa} />
              <DataRow icon={Shield} label="Estado" value={p.estadoAfiliacion} green />
            </div>
          </div>

          <p className="text-[9px] text-ink-mute leading-relaxed mt-4 text-center px-2">
            Verificado digitalmente por UPSF — {new Date().toLocaleDateString('es-AR')}
          </p>
        </div>
      </div>
    </div>
  )
}

function DataRow({ icon: Icon, label, value, mono, green }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={15} className="text-ink-mute mt-0.5 flex-shrink-0" strokeWidth={1.7} />
      <div className="flex-1">
        <div className="text-[9px] text-ink-mute uppercase tracking-wider">{label}</div>
        <div className={`text-[13px] font-medium mt-0.5 ${mono ? 'font-mono tabular' : ''} ${green ? 'text-accent-forest flex items-center gap-1.5' : ''}`}>
          {green && <span className="w-1.5 h-1.5 rounded-full bg-accent-forest" />}
          {value}
        </div>
      </div>
    </div>
  )
}
