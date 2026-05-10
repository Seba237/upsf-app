// Logo oficial UPSF — usa la imagen real del escudo institucional
import logoUrl from '/upsf-logo.jpg?url'

export function UPSFLogo({ size = 32, className = '' }) {
  return (
    <img
      src={logoUrl}
      alt="Escudo UPSF"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'cover', borderRadius: '50%' }}
    />
  )
}
