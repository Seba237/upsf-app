import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { useAuth } from '../lib/auth'

export function AppLayout() {
  const { user, ready } = useAuth()
  const location = useLocation()

  if (!ready) return null
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />

  return (
    <div className="app-shell flex flex-col">
      <main className="flex-1 flex flex-col page-enter" key={location.pathname}>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}

export function PublicLayout() {
  return (
    <div className="app-shell">
      <Outlet />
    </div>
  )
}
