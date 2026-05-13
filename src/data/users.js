// Mock users — usuarios de prueba para el MVP.
// En producción esto se reemplaza por validación contra el padrón real.

export const TEST_USERS = [
  // === AFILIADO ===
  {
    username: 'sebastian',
    password: '12345',
    role: 'afiliado',
    profile: {
      id: '1846',
      nombre: 'Sebastián Perez',
      nombreCompleto: 'Sebastián Alberto Perez',
      nombrePila: 'Sebastian Alberto',
      apellido: 'Perez',
      cuit: '20311992377',
      cargo: 'Jefe de Catenaria',
      base: 'Base Quilmes',
      linea: 'Línea Roca',
      empresa: 'SOFSE — Trenes Argentinos',
      seccional: 'Buenos Aires',
      antiguedad: '14 años',
      categoria: 'Personal Jerárquico',
      email: 'sebastian.p@upsf.com.ar',
      telefono: '+54 11 4XXX-XXXX',
      avatar: 'SP',
      fechaIngreso: '15/03/2011',
      fechaEmisionCredencial: '19/03/2026',
      estadoAfiliacion: 'Activo · al día'
    }
  },
  // === DELEGADO ===
  {
    username: 'Delegado',
    password: '12345',
    role: 'directivo',
    secretaria: 'gremial',
    profile: {
      id: '00102',
      nombre: 'Leonardo Boratto',
      nombreCompleto: 'Leonardo Boratto',
      cargo: 'Delegado',
      base: 'Sede Constitución',
      linea: 'Comisión Directiva Nacional',
      empresa: 'UPSF — Comisión Directiva',
      seccional: 'Nacional',
      antiguedad: '22 años',
      categoria: 'Directivo',
      email: 'gremial@upsf.com.ar',
      telefono: '+54 11 2376-4800',
      avatar: 'LB',
      fechaIngreso: '04/06/2003',
      estadoAfiliacion: 'Activo · directivo'
    }
  },
  // === SECRETARIO GENERAL ===
  {
    username: 'general',
    password: '12345',
    role: 'directivo',
    secretaria: 'general',
    profile: {
      id: '00001',
      nombre: 'Gonzalo Bello',
      nombreCompleto: 'Gonzalo Facundo Bello',
      cargo: 'Secretario General',
      base: 'Sede Constitución',
      linea: 'Comisión Directiva Nacional',
      empresa: 'UPSF — Comisión Directiva',
      seccional: 'Nacional',
      antiguedad: '18 años',
      categoria: 'Secretario',
      email: 'general@upsf.com.ar',
      telefono: '+54 11 2376-4800',
      avatar: 'GB',
      fechaIngreso: '10/02/2008',
      estadoAfiliacion: 'Activo · directivo'
    }
  },
  // === SEC. PREVISIÓN Y ACCIÓN SOCIAL ===
  {
    username: 'prevision',
    password: '12345',
    role: 'directivo',
    secretaria: 'prevision',
    profile: {
      id: '00015',
      nombre: 'Sergio Cuello',
      nombreCompleto: 'Sergio Fabián Cuello',
      cargo: 'Sec. de Previsión y Acción Social',
      base: 'Sede Constitución',
      linea: 'Comisión Directiva Nacional',
      empresa: 'UPSF — Comisión Directiva',
      seccional: 'Nacional',
      antiguedad: '20 años',
      categoria: 'Secretario',
      email: 'prevision@upsf.com.ar',
      telefono: '+54 11 2376-4800',
      avatar: 'SC',
      fechaIngreso: '15/06/2006',
      estadoAfiliacion: 'Activo · directivo'
    }
  },
  // === SEC. DE TURISMO ===
  {
    username: 'turismo',
    password: '12345',
    role: 'directivo',
    secretaria: 'turismo',
    profile: {
      id: '00022',
      nombre: 'Mauro Montiel',
      nombreCompleto: 'Mauro Alfredo Montiel',
      cargo: 'Sec. de Turismo',
      base: 'Sede Constitución',
      linea: 'Comisión Directiva Nacional',
      empresa: 'UPSF — Comisión Directiva',
      seccional: 'Nacional',
      antiguedad: '15 años',
      categoria: 'Secretario',
      email: 'turismo@upsf.com.ar',
      telefono: '+54 11 2376-4800',
      avatar: 'MM',
      fechaIngreso: '03/04/2011',
      estadoAfiliacion: 'Activo · directivo'
    }
  },
  // === SEC. ADMINISTRATIVA ===
  {
    username: 'administrativa',
    password: '12345',
    role: 'directivo',
    secretaria: 'administrativa',
    profile: {
      id: '00008',
      nombre: 'Gabriel Pozzi',
      nombreCompleto: 'Gabriel Martín Pozzi',
      cargo: 'Sec. Administrativa',
      base: 'Sede Constitución',
      linea: 'Comisión Directiva Nacional',
      empresa: 'UPSF — Comisión Directiva',
      seccional: 'Nacional',
      antiguedad: '17 años',
      categoria: 'Secretario',
      email: 'administrativa@upsf.com.ar',
      telefono: '+54 11 2376-4800',
      avatar: 'GP',
      fechaIngreso: '22/08/2009',
      estadoAfiliacion: 'Activo · directivo'
    }
  },
  // === SEC. DE PRENSA ===
  {
    username: 'prensa',
    password: '12345',
    role: 'directivo',
    secretaria: 'prensa',
    profile: {
      id: '00031',
      nombre: 'Rita Peschiera',
      nombreCompleto: 'Rita Silvia Peschiera',
      cargo: 'Sec. de Prensa y Propaganda',
      base: 'Sede Constitución',
      linea: 'Comisión Directiva Nacional',
      empresa: 'UPSF — Comisión Directiva',
      seccional: 'Nacional',
      antiguedad: '12 años',
      categoria: 'Secretario',
      email: 'prensa@upsf.com.ar',
      telefono: '+54 11 2376-4800',
      avatar: 'RP',
      fechaIngreso: '01/03/2014',
      estadoAfiliacion: 'Activo · directivo'
    }
  }
]

export function authenticate(username, password) {
  const user = TEST_USERS.find(
    (u) => u.username.toLowerCase() === username.toLowerCase().trim() && u.password === password
  )
  return user || null
}
