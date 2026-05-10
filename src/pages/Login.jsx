import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'
import { UPSFLogo } from '../components/UPSFLogo'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

export function LoginPage() {
  const { login, user } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (user) return <Navigate to="/" replace />

  const handleSubmit = (e) => {
    e?.preventDefault()
    setError('')
    setSubmitting(true)
    setTimeout(() => {
      const result = login(username, password)
      if (!result.ok) {
        setError(result.error)
        setSubmitting(false)
      } else {
        navigate('/', { replace: true })
      }
    }, 350)
  }

  return (
    <div className="min-h-screen flex flex-col bg-navy text-white">
      <div className="flex-1 flex flex-col px-6 pt-16 pb-6">
        <div className="flex items-center gap-3 mb-12">
          <UPSFLogo size={44} />
          <div className="leading-tight">
            <div className="text-[11px] tracking-[0.2em] text-white/55">U.P.S.F.</div>
            <div className="text-[14px] font-medium">Unión Personal<br/>Superior Ferroviario</div>
          </div>
        </div>

        <div className="mb-10">
          <h1 className="text-[28px] font-light leading-tight">Bienvenido,</h1>
          <p className="text-[15px] text-white/70 mt-1">Iniciá sesión para acceder a la app del sindicato.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] tracking-wider text-white/55 uppercase mb-2 font-medium">Usuario</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu usuario o número de afiliado"
              className="w-full bg-white/5 border border-white/15 focus:border-white/40 rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition"
              autoComplete="username" autoCapitalize="none" autoCorrect="off" />
          </div>

          <div>
            <label className="block text-[11px] tracking-wider text-white/55 uppercase mb-2 font-medium">Contraseña</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••"
                className="w-full bg-white/5 border border-white/15 focus:border-white/40 rounded-xl px-4 py-3 pr-12 text-[15px] text-white placeholder:text-white/35 outline-none transition"
                autoComplete="current-password" />
              <button type="button" onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-white/45 hover:text-white/80 transition">
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-[13px] text-accent-rust bg-accent-rust/10 border border-accent-rust/30 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          <button type="submit" disabled={submitting || !username || !password}
            className="w-full bg-white text-navy py-3.5 rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cream transition active:scale-[0.99]">
            {submitting ? 'Ingresando…' : <>Ingresar <ArrowRight size={17} /></>}
          </button>
        </form>

        <div className="mt-auto pt-8 text-center">
          <p className="text-[10px] text-white/35 tracking-wider uppercase">v1.0.0 · MVP</p>
        </div>
      </div>
    </div>
  )
}
