import { useAuth } from '../lib/auth'
import { TopBar } from '../components/TopBar'
import { Download, Share2, Calendar, Shield } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import credencialImg from '/credencial-oficial.png?url'

export function CredencialPage() {
  const { user } = useAuth()
  const p = user.profile

  // URL de verificación — al escanear el QR abre esta página
  const verificacionUrl = `https://seba237.github.io/upsf-app/verificar/${p.id}`

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Mi credencial" subtitle="Documento digital de afiliación" />

      <div className="px-4 pt-2">
        {/* Credencial oficial */}
        <div className="bg-white border border-rule rounded-2xl overflow-hidden shadow-card">
          <img
            src={credencialImg}
            alt={`Credencial UPSF de ${p.nombreCompleto}`}
            className="w-full"
            style={{ display: 'block' }}
          />
        </div>

        {/* QR de verificación */}
        <div className="mt-3 bg-white border border-rule rounded-2xl p-4">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg ring-1 ring-navy/10 flex-shrink-0">
              <QRCodeSVG
                value={verificacionUrl}
                size={100}
                bgColor="#FFFFFF"
                fgColor="#0F1A35"
                level="M"
                includeMargin={false}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <Shield size={12} className="text-accent-forest" />
                <span className="text-[10px] text-accent-forest font-medium uppercase tracking-wider">Credencial verificada</span>
              </div>
              <div className="text-[12px] font-mono text-ink font-medium break-all tabular">UPSF-{p.id}-{new Date().getFullYear()}</div>
              <div className="text-[10px] text-ink-mute mt-1.5 leading-snug">Escaneá este código con la cámara del celular para verificar la credencial.</div>
            </div>
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
          Esta credencial digital es de uso exclusivo del afiliado titular. El código QR puede ser escaneado por delegados, directivos o comercios adheridos a la red UPSF para verificar la identidad del portador.
        </p>
      </div>
    </div>
  )
}
