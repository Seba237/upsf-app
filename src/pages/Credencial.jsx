import { useAuth } from '../lib/auth'
import { TopBar } from '../components/TopBar'
import { UPSFLogo } from '../components/UPSFLogo'
import { Download, Share2, Calendar, Shield } from 'lucide-react'

// QR decorativo determinístico — solo demo; en producción se firma con endpoint real
function FakeQR({ seed = 'UPSF', size = 96 }) {
  const cells = 21
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0

  const filled = []
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const inCorner =
        (r < 7 && c < 7) || (r < 7 && c > cells - 8) || (r > cells - 8 && c < 7)
      if (inCorner) {
        const cr = r > cells - 8 ? r - (cells - 7) : r
        const cc = c > cells - 8 ? c - (cells - 7) : c
        const ring = cr === 0 || cr === 6 || cc === 0 || cc === 6
        const inner = cr >= 2 && cr <= 4 && cc >= 2 && cc <= 4
        if (ring || inner) filled.push([r, c])
        continue
      }
      h = (h * 1103515245 + 12345) >>> 0
      if ((h & 1) === 0) filled.push([r, c])
    }
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${cells} ${cells}`} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
      <rect width={cells} height={cells} fill="#FFFFFF" />
      {filled.map(([r, c], i) => (
        <rect key={i} x={c} y={r} width="1" height="1" fill="#0F1A35" />
      ))}
    </svg>
  )
}

export function CredencialPage() {
  const { user } = useAuth()
  const p = user.profile

  // Iniciales para avatar
  const initials = p.avatar || p.nombreCompleto.split(' ').map(s => s[0]).join('').slice(0, 2)

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Mi credencial" subtitle="Documento digital de afiliación" />

      <div className="px-4 pt-2">
        {/* === CREDENCIAL FORMATO CARNET === */}
        <div className="bg-white border border-rule rounded-2xl overflow-hidden shadow-card">

          {/* Cuerpo principal — inspirado en el carnet real */}
          <div className="p-5">
            <div className="flex gap-4">
              {/* Foto placeholder */}
              <div className="w-[90px] h-[110px] bg-navy-50 border border-rule rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-[28px] font-medium text-navy/60">{initials}</div>
                  <div className="text-[8px] text-ink-mute uppercase tracking-wider mt-1">Foto</div>
                </div>
              </div>

              {/* Datos principales */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    {/* Nombre */}
                    <div className="border-b border-rule pb-1.5 mb-1">
                      <div className="text-[18px] font-medium leading-tight tracking-tight">{p.nombrePila || p.nombreCompleto.split(' ').slice(0, -1).join(' ')}</div>
                      <div className="text-[10px] text-ink-mute uppercase tracking-wider mt-0.5">Nombre</div>
                    </div>
                    {/* Apellido */}
                    <div className="border-b border-rule pb-1.5 mb-1">
                      <div className="text-[18px] font-medium leading-tight tracking-tight">{p.apellido || p.nombreCompleto.split(' ').slice(-1)[0]}</div>
                      <div className="text-[10px] text-ink-mute uppercase tracking-wider mt-0.5">Apellido</div>
                    </div>
                  </div>

                  {/* Logo UPSF */}
                  <UPSFLogo size={52} className="flex-shrink-0 mt-1" />
                </div>

                {/* Número y CUIT */}
                <div className="flex gap-4 mt-1">
                  <div className="border-b border-rule pb-1.5 flex-shrink-0">
                    <div className="text-[22px] font-medium font-mono tabular tracking-tight">{p.id}</div>
                    <div className="text-[10px] text-ink-mute uppercase tracking-wider mt-0.5">N° de Afiliado</div>
                  </div>
                  {p.cuit && (
                    <div className="border-b border-rule pb-1.5 flex-1">
                      <div className="text-[18px] font-medium font-mono tabular tracking-tight">{p.cuit}</div>
                      <div className="text-[10px] text-ink-mute uppercase tracking-wider mt-0.5">CUIT</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Datos laborales */}
            <div className="mt-4 pt-3 border-t border-rule">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <DataField label="Cargo" value={p.cargo} />
                <DataField label="Base" value={p.base} />
                <DataField label="Línea" value={p.linea} />
                <DataField label="Seccional" value={p.seccional} />
                <DataField label="Empresa" value={p.empresa} full />
              </div>
            </div>

            {/* Fecha de emisión */}
            <div className="mt-3 text-right">
              <span className="text-[10px] text-ink-mute italic">
                Fecha de emisión: {p.fechaEmisionCredencial || '19/03/2026'}
              </span>
            </div>
          </div>

          {/* Franja inferior navy — como el carnet real */}
          <div className="bg-navy text-white px-5 py-3 flex items-center justify-center gap-2">
            <UPSFLogo size={20} />
            <span className="text-[12px] font-medium tracking-[0.08em] uppercase">Unión Personal Superior Ferroviario</span>
          </div>
        </div>

        {/* === QR DE VALIDACIÓN === */}
        <div className="mt-3 bg-white border border-rule rounded-2xl p-4 flex items-center gap-4">
          <div className="bg-white p-1.5 rounded-md ring-1 ring-navy/10 flex-shrink-0">
            <FakeQR seed={`UPSF-${p.id}-${p.nombreCompleto}`} size={88} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <Shield size={12} className="text-accent-forest" />
              <span className="text-[10px] text-accent-forest font-medium uppercase tracking-wider">Credencial verificada</span>
            </div>
            <div className="text-[12px] font-mono text-ink font-medium break-all tabular">UPSF-{p.id}-{new Date().getFullYear()}</div>
            <div className="text-[10px] text-ink-mute mt-1.5 leading-snug">Escaneable por delegados y comercios adheridos a la red UPSF.</div>
          </div>
        </div>

        {/* Acciones */}
        <div className="grid grid-cols-2 gap-2.5 mt-3">
          <button className="bg-white border border-rule rounded-xl py-2.5 flex items-center justify-center gap-2 hover:shadow-card transition active:scale-[0.99]">
            <Download size={16} strokeWidth={1.7} />
            <span className="text-[12px] font-medium">Descargar</span>
          </button>
          <button className="bg-white border border-rule rounded-xl py-2.5 flex items-center justify-center gap-2 hover:shadow-card transition active:scale-[0.99]">
            <Share2 size={16} strokeWidth={1.7} />
            <span className="text-[12px] font-medium">Compartir</span>
          </button>
        </div>

        {/* Estado y vigencia */}
        <div className="mt-3 bg-white border border-rule rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={15} className="text-ink-soft" />
            <div className="text-[11px] uppercase tracking-wider text-ink-mute font-medium">Estado y vigencia</div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[12px]">
            <div>
              <div className="text-ink-mute text-[10px]">Estado</div>
              <div className="font-medium mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-forest" />
                {p.estadoAfiliacion}
              </div>
            </div>
            <div>
              <div className="text-ink-mute text-[10px]">Antigüedad</div>
              <div className="font-medium mt-0.5">{p.antiguedad}</div>
            </div>
            <div>
              <div className="text-ink-mute text-[10px]">Categoría</div>
              <div className="font-medium mt-0.5">{p.categoria}</div>
            </div>
            <div>
              <div className="text-ink-mute text-[10px]">Validez QR</div>
              <div className="font-medium mt-0.5 font-mono tabular">31/12/2026</div>
            </div>
          </div>
        </div>

        <p className="text-[10px] text-ink-mute leading-relaxed mt-4 px-1">
          Esta credencial digital es de uso exclusivo del afiliado titular. El código QR debe ser escaneado únicamente por delegados o comercios adheridos a la red UPSF.
        </p>
      </div>
    </div>
  )
}

function DataField({ label, value, full }) {
  return (
    <div className={full ? 'col-span-2' : ''}>
      <div className="text-[9px] text-ink-mute uppercase tracking-wider">{label}</div>
      <div className="text-[12px] font-medium mt-0.5 leading-tight">{value}</div>
    </div>
  )
}
