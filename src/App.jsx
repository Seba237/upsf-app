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
import { PanelGeneral } from './pages/directivo/PanelGeneral'
import { PanelPrevision } from './pages/directivo/PanelPrevision'
import { PanelTurismo } from './pages/directivo/PanelTurismo'
import { PanelAdministrativa } from './pages/directivo/PanelAdministrativa'
import { PanelPrensa } from './pages/directivo/PanelPrensa'
import { useAuth } from './lib/auth'

// Home dispatcher: muestra panel específico según secretaría o rol
function HomeDispatcher() {
  const { isDirectivo, secretaria } = useAuth()

  if (!isDirectivo) return <HomeAfiliado />

  // Panel específico por secretaría
  switch (secretaria) {
    case 'general': return <PanelGeneral />
    case 'prevision': return <PanelPrevision />
    case 'turismo': return <PanelTurismo />
    case 'administrativa': return <PanelAdministrativa />
    case 'prensa': return <PanelPrensa />
    case 'gremial':
    default: return <HomeDirectivo />
  }
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

        {/* Directivo — compartido entre todas las secretarías */}
        <Route path="/directivo/reclamos" element={<ReclamosDirectivoPage />} />
        <Route path="/directivo/publicar" element={<PublicarNovedadPage />} />
        <Route path="/directivo/padron" element={<PadronPage />} />
        <Route path="/directivo/asamblea" element={<AsambleaDirectivoPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
