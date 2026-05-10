import { Link, useParams, Navigate } from 'react-router-dom'
import { TopBar } from '../components/TopBar'
import { NOVEDADES } from '../data/institucional'
import { useAuth } from '../lib/auth'
import { ExternalLink, TrendingUp, Info } from 'lucide-react'

const COLOR_BG = {
  rust: 'bg-orange-50 text-accent-rust',
  forest: 'bg-emerald-50 text-accent-forest',
  navy: 'bg-navy-50 text-navy',
  ochre: 'bg-amber-50 text-accent-ochre',
  mauve: 'bg-violet-50 text-accent-mauve'
}

function formatPesos(n) {
  return '$ ' + n.toLocaleString('es-AR')
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
  const { user } = useAuth()
  const n = NOVEDADES.find(x => x.id === id)
  if (!n) return <Navigate to="/novedades" replace />

  // Categoría del afiliado para resaltar en la grilla
  const userCategoria = user?.profile?.cargo || ''
  const isDiv1 = userCategoria.includes('Catenaria') || userCategoria.includes('DIV. 1RA')

  return (
    <div className="bg-cream min-h-full pb-6">
      <TopBar title="Novedad" />

      <article className="px-4 pt-2">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${COLOR_BG[n.color] || COLOR_BG.navy}`}>
            {n.categoria}
          </span>
          <span className="text-[10px] text-ink-faint font-mono tabular">{n.fecha}</span>
        </div>
        <h1 className="text-[20px] font-medium leading-tight">{n.titulo}</h1>
        <p className="text-[13px] text-ink-soft mt-3 leading-relaxed font-medium">{n.bajada}</p>
        <div className="border-t border-rule mt-4 pt-4">
          <p className="text-[13px] text-ink leading-relaxed">{n.cuerpo}</p>
        </div>

        {/* GRILLA DE PARITARIAS */}
        {n.tieneGrilla && n.grilla && (
          <div className="mt-5">
            {/* Básicos por categoría */}
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={15} className="text-navy" />
              <h2 className="text-[13px] font-medium uppercase tracking-wider text-ink">Básicos por categoría</h2>
            </div>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[600px] text-[10px]">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left py-2 px-2 font-medium rounded-tl-lg">Categoría</th>
                    <th className="text-right py-2 px-2 font-medium">NOV 1,1%</th>
                    <th className="text-right py-2 px-2 font-medium">DIC 2%</th>
                    <th className="text-right py-2 px-2 font-medium">ENE 2,5%</th>
                    <th className="text-right py-2 px-2 font-medium">FEB 2%</th>
                    <th className="text-right py-2 px-2 font-medium rounded-tr-lg">MAR 1,5%</th>
                  </tr>
                </thead>
                <tbody>
                  {n.grilla.categorias.map((c, i) => {
                    const highlight = (isDiv1 && c.nombre === 'DIV. 1RA')
                    return (
                      <tr key={i} className={`border-b border-rule ${highlight ? 'bg-navy-50 font-medium' : i % 2 === 0 ? 'bg-white' : 'bg-cream-200/50'}`}>
                        <td className={`py-2 px-2 font-medium ${highlight ? 'text-navy' : ''}`}>
                          {c.nombre}
                          {highlight && <span className="ml-1 text-[8px] text-accent-forest">● Tu categoría</span>}
                        </td>
                        <td className="text-right py-2 px-2 font-mono tabular">{formatPesos(c.nov)}</td>
                        <td className="text-right py-2 px-2 font-mono tabular">{formatPesos(c.dic)}</td>
                        <td className="text-right py-2 px-2 font-mono tabular">{formatPesos(c.ene)}</td>
                        <td className="text-right py-2 px-2 font-mono tabular">{formatPesos(c.feb)}</td>
                        <td className={`text-right py-2 px-2 font-mono tabular ${highlight ? 'text-navy font-medium' : ''}`}>{formatPesos(c.mar)}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Adicionales */}
            <div className="mt-4 bg-white border border-rule rounded-2xl p-3">
              <h3 className="text-[11px] font-medium uppercase tracking-wider text-ink-mute mb-2">Adicionales (marzo)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="border-b border-rule">
                      <th className="text-left py-1.5 px-1 font-medium text-ink-mute">Categoría</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">Resp. Jerárq.</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">Dedic. Func.</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">Adic. Conv.</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">Antigüedad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {n.grilla.categorias.map((c, i) => {
                      const highlight = (isDiv1 && c.nombre === 'DIV. 1RA')
                      return (
                        <tr key={i} className={`border-b border-rule/50 ${highlight ? 'bg-navy-50 font-medium' : ''}`}>
                          <td className={`py-1.5 px-1 font-medium ${highlight ? 'text-navy' : ''}`}>{c.nombre}</td>
                          <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(c.resp)}</td>
                          <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(c.dedic)}</td>
                          <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(c.adic)}</td>
                          <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(c.antig)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              {n.grilla.notas && (
                <div className="mt-2 pt-2 border-t border-rule/50">
                  {n.grilla.notas.map((nota, i) => (
                    <div key={i} className="text-[9px] text-ink-mute flex items-start gap-1.5 mt-0.5">
                      <Info size={9} className="mt-0.5 flex-shrink-0" /> {nota}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Viáticos */}
            <div className="mt-3 bg-white border border-rule rounded-2xl p-3">
              <h3 className="text-[11px] font-medium uppercase tracking-wider text-ink-mute mb-2">Viáticos y títulos</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="border-b border-rule">
                      <th className="text-left py-1.5 px-1 font-medium text-ink-mute">Concepto</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">NOV</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">DIC</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">ENE</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">FEB</th>
                      <th className="text-right py-1.5 px-1 font-medium text-ink-mute">MAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {n.grilla.viaticos.map((v, i) => (
                      <tr key={i} className="border-b border-rule/50">
                        <td className="py-1.5 px-1 font-medium">{v.nombre}</td>
                        <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(v.nov)}</td>
                        <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(v.dic)}</td>
                        <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(v.ene)}</td>
                        <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(v.feb)}</td>
                        <td className="text-right py-1.5 px-1 font-mono tabular">{formatPesos(v.mar)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bono */}
            <div className="mt-3 bg-navy text-white rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-white/55 uppercase tracking-wider">Bono Día Ferroviario</div>
                <div className="text-[18px] font-mono tabular font-medium mt-1">{formatPesos(n.grilla.bono.monto)}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-white/65 leading-snug max-w-[140px]">{n.grilla.bono.nota}</div>
              </div>
            </div>

            <p className="text-[9px] text-ink-mute mt-3 leading-relaxed">
              Resp. Jerárq. 20% · Adicional Convenio 10% nov · Antigüedad 1,5% por año trabajado. Valores expresados en pesos argentinos. Fuente: acuerdo paritario UPSF 2026.
            </p>
          </div>
        )}

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
