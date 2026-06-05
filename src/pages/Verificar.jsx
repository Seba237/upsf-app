import { useParams } from 'react-router-dom'
import { UPSFLogo } from '../components/UPSFLogo'
import { Shield, CheckCircle, User, Briefcase, MapPin, Building2, Calendar, Hash } from 'lucide-react'
import { TEST_USERS } from '../data/users'

export function VerificarPage() {
  const { id } = useParams()

  // Buscar afiliado por ID
  const usuario = TEST_USERS.find(u => u.profile.id === id)

  if (!usuario) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="text-center max-w-xs">
          <div className="w-14 h-14 rounded-full bg-accent-rust/10 grid place-items-center mx-auto mb-4">
            <Shield size={26} className="text-accent-rust" />
          </div>
          <h1 className="text-[18px] font-medium mb-2">Credencial no encontrada</h1>
          <p className="text-[12px] text-ink-mute leading-relaxed">
            El número de afiliado N° {id} no fue encontrado en el padrón. Verificá el código e intentá nuevamente.
          </p>
        </div>
      </div>
    )
  }

  const p = usuario.profile

  return (
    <div className="min-h-screen bg-navy">
      <div className="app-shell min-h-screen flex flex-col bg-cream">
        {/* Header verificación */}
        <div className="bg-navy text-white px-5 pt-8 pb-6 text-center">
          <UPSFLogo size={56} className="mx-auto mb-3" />
          <div className="text-[10px] tracking-[0.2em] text-white/55 mb-1">U.P.S.F.</div>
          <div className="text-[13px] font-medium">Verificación de credencial</div>
        </div>

        {/* Estado */}
        <div className="px-5 -mt-4">
          <div className="bg-accent-forest text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 shadow-card">
            <CheckCircle size={18} strokeWidth={2} />
            <span className="text-[14px] font-medium">Credencial verificada</span>
          </div>
        </div>

        {/* Datos del afiliado */}
        <div className="px-5 pt-5 pb-6 flex-1">
          <div className="bg-white border border-rule rounded-2xl p-5">
            <div className="text-center mb-5">
              <div className="w-16 h-16 rounded-full bg-navy/10 text-navy grid place-items-center text-[20px] font-medium mx-auto mb-3">
                {p.avatar}
              </div>
              <div className="text-[20px] font-medium">{p.nombreCompleto}</div>
              <div className="text-[11px] text-ink-mute mt-1">Afiliado UPSF</div>
            </div>

            <div className="border-t border-rule pt-4 space-y-3">
              <DataRow icon={Hash} label="N° de Afiliado" value={p.id} mono />
              {p.cuit && <DataRow icon={User} label="CUIT" value={p.cuit} mono />}
              <DataRow icon={Briefcase} label="Cargo" value={p.cargo} />
              <DataRow icon={MapPin} label="Base" value={`${p.base} · ${p.linea}`} />
              <DataRow icon={Building2} label="Empresa" value={p.empresa} />
              <DataRow icon={Calendar} label="Antigüedad" value={p.antiguedad} />
              <DataRow icon={Shield} label="Estado" value={p.estadoAfiliacion} green />
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-[9px] text-ink-mute leading-relaxed">
              Credencial verificada digitalmente por el sistema de la Unión Personal Superior Ferroviario.
              Fecha de consulta: {new Date().toLocaleDateString('es-AR')}.
            </p>
          </div>
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
