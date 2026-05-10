// Logo oficial UPSF — usa la imagen real del escudo institucional
export function UPSFLogo({ size = 32, className = '', withBorder = false }) {
  return (
    <img
      src="/upsf-logo.jpg"
      alt="Escudo UPSF"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
