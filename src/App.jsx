import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout, PublicLayout } from './components/Layout'
import { LoginPage } from './pages/Login'
import { HomeAfiliado } from './pages/HomeAfiliado'
import { CredencialPage } from './pages/Credencial'
import { BeneficiosPage, BeneficioDetailPage } from './pages/Beneficios'
import { NovedadesPage, NovedadDetailPage } from './pages/Novedades'
import { ConsultasPage } from './pages/Consultas'
import { PerfilPage, ContactoPage, BibliotecaPage } from './pages/Misc'
import {
  HomeDirectivo,
  ReclamosDirectivoPage,
  PublicarNovedadPage,
  PadronPage,
  AsambleaDirectivoPage
} from './pages/directivo/Directivo'
import { useAuth } from './lib/auth'

// Home dispatcher: misma ruta "/" muestra una vista u otra según rol.
function HomeDispatcher() {
  const { isDirectivo } = useAuth()
  return isDirectivo ? <HomeDirectivo /> : <HomeAfiliado />
}

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/" element={<HomeDispatcher />} />

        {/* Afiliado */}
        <Route path="/credencial" element={<CredencialPage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/beneficios/:id" element={<BeneficioDetailPage />} />
        <Route path="/novedades" element={<NovedadesPage />} />
        <Route path="/novedades/:id" element={<NovedadDetailPage />} />
        <Route path="/consultas" element={<ConsultasPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/biblioteca" element={<BibliotecaPage />} />
        <Route path="/perfil" element={<PerfilPage />} />

        {/* Directivo */}
        <Route path="/directivo/reclamos" element={<ReclamosDirectivoPage />} />
        <Route path="/directivo/publicar" element={<PublicarNovedadPage />} />
        <Route path="/directivo/padron" element={<PadronPage />} />
        <Route path="/directivo/asamblea" element={<AsambleaDirectivoPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
