// Mock users — usuarios de prueba para el MVP.
// En producción esto se reemplaza por validación contra el padrón real.

export const TEST_USERS = [
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
  {
    username: 'Delegado',
    password: '12345',
    role: 'directivo',
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
  }
]

export function authenticate(username, password) {
  const user = TEST_USERS.find(
    (u) => u.username.toLowerCase() === username.toLowerCase().trim() && u.password === password
  )
  return user || null
}
