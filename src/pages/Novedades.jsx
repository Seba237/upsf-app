import { Link, useParams, Navigate } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
import { NOVEDADES } from '../data/institucional'
import { ExternalLink } from 'lucide-react'

const COLOR_BG = {
  rust: 'bg-orange-50 text-accent-rust',
  forest: 'bg-emerald-50 text-accent-forest',
  navy: 'bg-navy-50 text-navy',
  ochre: 'bg-amber-50 text-accent-ochre',
  mauve: 'bg-violet-50 text-accent-mauve'
}

export function NovedadesPage() {
  return (
    <div className="bg-cream min-h-full pb-6">
      <div className="bg-navy text-white px-5 pt-6 pb-5">
        <h1 className="text-[22px] font-light">Novedades</h1>
        <p className="text-[12px] text-white/65 mt-1">Comunicados oficiales, paritarias y agenda gremial.</p>
      </div>

      <div className="px-4 pt-4 space-y-2.5">
        {NOVEDADES.map(n => (
          <Link key={n.id} to={`/novedades/${n.id}`}
            className="block bg-white border border-rule rounded-2xl p-4 hover:shadow-card transition active:scale-[0.99]">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${COLOR_BG[n.color] || COLOR_BG.navy}`}>
                {n.categoria}
              </span>
              <span className="text-[10px] text-ink-faint font-mono tabular">{n.fecha}</span>
            </div>
            <h3 className="text-[14px] font-medium leading-snug text-ink">{n.titulo}</h3>
            <p className="text-[12px] text-ink-mute mt-1.5 leading-relaxed line-clamp-2">{n.bajada}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function NovedadDetailPage() {
  const { id } = useParams()
  const n = NOVEDADES.find(x => x.id === id)
  if (!n) return <Navigate to="/novedades" replace />

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Novedad" />

      <article className="px-5 pt-2">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${COLOR_BG[n.color] || COLOR_BG.navy}`}>
            {n.categoria}
          </span>
          <span className="text-[10px] text-ink-faint font-mono tabular">{n.fecha}</span>
        </div>
        <h1 className="text-[22px] font-medium leading-tight">{n.titulo}</h1>
        <p className="text-[14px] text-ink-soft mt-3 leading-relaxed font-medium">{n.bajada}</p>
        <div className="border-t border-rule mt-5 pt-5">
          <p className="text-[14px] text-ink leading-relaxed">{n.cuerpo}</p>
        </div>

        {n.fuente && (
          <a href={`https://${n.fuente}`} target="_blank" rel="noopener noreferrer"
             className="mt-6 inline-flex items-center gap-1.5 text-[12px] text-navy hover:underline">
            Leer en upsf.com.ar <ExternalLink size={12} />
          </a>
        )}
      </article>
    </div>
  )
}
