import { createContext, useContext, useEffect, useState } from 'react'
import { authenticate } from '../data/users'

const AuthCtx = createContext(null)
const STORAGE_KEY = 'upsf.session'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {}
    setReady(true)
  }, [])

  const login = (username, password) => {
    const u = authenticate(username, password)
    if (u) {
      const session = { username: u.username, role: u.role, secretaria: u.secretaria || null, profile: u.profile }
      setUser(session)
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(session)) } catch {}
      return { ok: true, user: session }
    }
    return { ok: false, error: 'Usuario o contraseña incorrectos' }
  }

  const logout = () => {
    setUser(null)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }

  return (
    <AuthCtx.Provider value={{
      user, login, logout, ready,
      isAfiliado: user?.role === 'afiliado',
      isDirectivo: user?.role === 'directivo',
      secretaria: user?.secretaria || null
    }}>
      {children}
    </AuthCtx.Provider>
  )
}

export const useAuth = () => useContext(AuthCtx)
