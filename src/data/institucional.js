// Datos institucionales — reflejan el contenido real del bot WhatsApp UPSF
// y de redes/web oficiales (mayo 2026).

export const SECRETARIAS = [
  { id: 'general', nombre: 'Secretaría General', responsable: 'Gonzalo Facundo Bello', estado: 'activa' },
  { id: 'adjunta', nombre: 'Secretaría Adjunta', responsable: 'Carlos Alberto Neme', estado: 'proximamente' },
  { id: 'hacienda', nombre: 'Secretaría de Hacienda y Patrimonio', responsable: 'Marcelo Acosta', estado: 'proximamente' },
  { id: 'administrativa', nombre: 'Secretaría Administrativa', responsable: 'Gabriel Martín Pozzi', estado: 'activa' },
  { id: 'organizacion', nombre: 'Secretaría de Organización', responsable: '—', estado: 'proximamente' },
  { id: 'gremial', nombre: 'Secretaría Gremial e Interior', responsable: '—', estado: 'proximamente' },
  { id: 'mujer', nombre: 'Secretaría de la Mujer, Género y Diversidad', responsable: 'Marina Pérez', estado: 'proximamente' },
  { id: 'prevision', nombre: 'Secretaría de Previsión y Acción Social', responsable: 'Sergio Fabián Cuello', estado: 'activa' },
  { id: 'turismo', nombre: 'Secretaría de Turismo', responsable: 'Mauro Alfredo Montiel', estado: 'activa' },
  { id: 'prensa', nombre: 'Secretaría de Prensa y Propaganda', responsable: 'Rita Silvia Peschiera', estado: 'activa' },
  { id: 'capacitacion', nombre: 'Secretaría de Capacitación Sindical, Legal y Técnica', responsable: '—', estado: 'proximamente' },
  { id: 'politica', nombre: 'Secretaría de Política Ferroviaria y Juventud', responsable: '—', estado: 'proximamente' },
  { id: 'ferroportuaria', nombre: 'Secretaría de Política, Asuntos y Actividades Ferroportuarias', responsable: '—', estado: 'proximamente' }
]

export const NOVEDADES = [
  {
    id: 'glaciares-2026',
    fecha: '09/04/2026',
    fechaCorta: '09 abr',
    categoria: 'Política',
    color: 'rust',
    titulo: 'Contra la reforma a la Ley de Glaciares',
    bajada: 'La UPSF se suma al rechazo a la reforma de la Ley de Glaciares y advierte sobre el impacto ambiental y social.',
    cuerpo: 'La Unión Personal Superior Ferroviario manifiesta su preocupación frente al proyecto de reforma de la Ley 26.639 de Glaciares y Ambiente Periglacial. Consideramos que cualquier modificación que debilite la protección de las reservas de agua dulce de la cordillera compromete derechos fundamentales y el desarrollo soberano del país.',
    secretaria: 'general',
    fuente: 'upsf.com.ar/noticias/contra-la-reforma-a-la-ley-de-glaciares/'
  },
  {
    id: 'tren-solidario-2026',
    fecha: '06/04/2026',
    fechaCorta: '06 abr',
    categoria: 'Solidaridad',
    color: 'forest',
    titulo: 'Tren Solidario de Emergencia',
    bajada: 'Convocatoria a colaborar con el Tren Solidario que partirá rumbo al norte argentino con donaciones.',
    cuerpo: 'La UPSF, junto a otras organizaciones del riel, organiza un nuevo Tren Solidario para acercar donaciones a familias afectadas por las recientes inundaciones. Los puntos de recolección estarán habilitados en todas las seccionales hasta el 25 de abril.',
    secretaria: 'prevision',
    fuente: 'upsf.com.ar/noticias/tren-solidario-de-emergencia/'
  },
  {
    id: 'vigilia-malvinas-2026',
    fecha: '01/04/2026',
    fechaCorta: '01 abr',
    categoria: 'Memoria',
    color: 'navy',
    titulo: 'Vigilia por Malvinas',
    bajada: '44 años de la gesta. La UPSF participó de la vigilia junto a veteranos y familiares.',
    cuerpo: 'En el aniversario del desembarco argentino en las Islas Malvinas, la conducción de la UPSF participó de la vigilia organizada por la Federación de Veteranos y rindió homenaje a los caídos.',
    secretaria: 'prensa',
    fuente: 'upsf.com.ar/noticias/vigilia-por-malvinas/'
  },
  {
    id: 'paritaria-2026-q2',
    fecha: '02/05/2026',
    fechaCorta: '02 may',
    categoria: 'Paritaria',
    color: 'navy',
    titulo: 'Acuerdo salarial — primer tramo aplicado',
    bajada: 'Se aplica el primer tramo del acuerdo paritario 2026 en los haberes de mayo.',
    cuerpo: 'El primer tramo del acuerdo paritario alcanzado entre UPSF y las empresas operadoras se ve reflejado en los haberes correspondientes al mes de mayo. Se continúa la mesa de negociación por los tramos siguientes.',
    secretaria: 'gremial',
    fuente: ''
  },
  {
    id: 'asamblea-mayo',
    fecha: '15/05/2026',
    fechaCorta: '15 may',
    categoria: 'Asamblea',
    color: 'ochre',
    titulo: 'Convocatoria a Asamblea Ordinaria',
    bajada: 'Asamblea ordinaria de afiliados — Sede Constitución, 17:00 hs.',
    cuerpo: 'Se convoca a los afiliados a la Asamblea Ordinaria que se realizará el día 15 de mayo de 2026 en la Sede Constitución (Av. Brasil 1138, CABA) a las 17:00 hs. Orden del día: 1) Lectura del acta anterior. 2) Informe de tesorería. 3) Estado de las paritarias. 4) Varios.',
    secretaria: 'general',
    fuente: ''
  }
]

export const BENEFICIOS = [
  {
    id: 'mutual',
    nombre: 'Mutual Ferroviaria',
    bajada: 'Préstamos · Subsidios · Farmacias · Odontología · Óptica · Ortopedia',
    secretaria: 'prevision',
    color: 'forest',
    iconKey: 'heart',
    tags: ['Hasta $100.000', 'Sin interés afiliado'],
    detalle: {
      descripcion: 'La Asociación Mutual Ferroviaria es una entidad sin fines de lucro que brinda a sus asociados beneficios y apoyo económico permanente.',
      items: [
        { titulo: 'Préstamos', detalle: 'Ayudas económicas de hasta $100.000 para cubrir necesidades de los asociados.' },
        { titulo: 'Subsidios', detalle: 'Por casamiento, nacimiento y mudanza.' },
        { titulo: 'Farmacias', detalle: 'Descuentos en medicamentos recetados y de venta libre en Farmacias Mutuales, Farmacia Gremial F.S.T.M., Allegrino y Farmalanus, entre otras.' },
        { titulo: 'Odontología', detalle: 'Tratamientos para adultos, implantes, cirugía y atención para adolescentes.' },
        { titulo: 'Óptica', detalle: 'Cadeo Optired (contactología, prótesis, baja visión) e Hipervisión (audiología, armazones y cristales).' },
        { titulo: 'Ortopedia', detalle: 'Descuentos en Ans. Care y Ortopedia Pasco.' }
      ]
    }
  },
  {
    id: 'turismo',
    nombre: 'Turismo y Descuentos',
    bajada: '8 regiones · CABA, Buenos Aires, Centro, Litoral, Norte, Patagonia, Cuyo, Internacional',
    secretaria: 'turismo',
    color: 'ochre',
    iconKey: 'map',
    tags: ['Internacional', 'Transporte y agencias'],
    detalle: {
      descripcion: 'Convenios con hoteles, complejos turísticos y agencias de viaje en todo el país y exterior. Descuentos exclusivos para afiliados y grupo familiar directo.',
      regiones: [
        { id: 'caba', nombre: 'CABA', cant: 12 },
        { id: 'bsas', nombre: 'Buenos Aires', cant: 28 },
        { id: 'centro', nombre: 'Centro', cant: 14 },
        { id: 'litoral', nombre: 'Litoral', cant: 9 },
        { id: 'norte', nombre: 'Norte', cant: 11 },
        { id: 'patagonia', nombre: 'Patagonia', cant: 17 },
        { id: 'cuyo', nombre: 'Cuyo', cant: 8 },
        { id: 'internacional', nombre: 'Internacional', cant: 6 }
      ]
    }
  },
  {
    id: 'asesoria',
    nombre: 'Asesoría Jurídica y Contable',
    bajada: 'Gratuita y permanente · Laboral, civil e impositiva',
    secretaria: 'administrativa',
    color: 'mauve',
    iconKey: 'scale',
    tags: ['5 profesionales', 'Atención personal'],
    detalle: {
      descripcion: 'Nuestros afiliados cuentan con asesoramiento profesional gratuito y permanente frente a consultas laborales, civiles e impositivas.',
      equipo: [
        { titulo: 'Dr. Juan Manuel Roel', rol: 'Abogado' },
        { titulo: 'Dra. Mayra Di Mónica', rol: 'Abogada' },
        { titulo: 'Dr. Gabriel Pozzi', rol: 'Abogado' },
        { titulo: 'Cont. Gabriel Galimini', rol: 'Contador' },
        { titulo: 'Cont. Gastón Pacheco', rol: 'Contador' }
      ],
      contacto: {
        web: 'upsf.com.ar/estudiojuridico/',
        telefono: '+54 11 2376-4800',
        email: 'estudiojuridico@upsf.com.ar'
      }
    }
  },
  {
    id: 'comercios',
    nombre: 'Comercios Adheridos',
    bajada: 'Red de comercios con descuentos en todo el país',
    secretaria: 'prevision',
    color: 'rust',
    iconKey: 'tag',
    tags: ['Geolocalizado'],
    detalle: { descripcion: 'Buscador de comercios adheridos con filtro por rubro y geolocalización. Disponible próximamente.' }
  },
  {
    id: 'sepelios',
    nombre: 'Servicios de Sepelio',
    bajada: 'Cobertura para afiliado y grupo familiar',
    secretaria: 'prevision',
    color: 'navy',
    iconKey: 'shield',
    tags: ['Grupo familiar'],
    detalle: { descripcion: 'Servicio de sepelios con cobertura para el afiliado y su grupo familiar directo. Atención 24 hs en todo el territorio nacional.' }
  }
]

export const RECLAMOS_DIRECTIVO = [
  { id: 'R-2026-0142', afiliado: 'M. Salazar', sector: 'Tracción Eléctrica', tema: 'Pago de adicional nocturno', estado: 'sin asignar', prioridad: 'alta', fecha: '02/05/2026' },
  { id: 'R-2026-0141', afiliado: 'L. Fernández', sector: 'Catenaria Quilmes', tema: 'EPP — entrega de uniforme', estado: 'en gestión', prioridad: 'media', fecha: '30/04/2026' },
  { id: 'R-2026-0140', afiliado: 'J. Pereyra', sector: 'Subestaciones', tema: 'Diferencia de categoría', estado: 'en gestión', prioridad: 'alta', fecha: '28/04/2026' },
  { id: 'R-2026-0139', afiliado: 'A. Romero', sector: 'Vía y Obras', tema: 'Licencia médica', estado: 'sin asignar', prioridad: 'baja', fecha: '27/04/2026' },
  { id: 'R-2026-0138', afiliado: 'F. Aguirre', sector: 'Catenaria Constitución', tema: 'Reclamo viáticos', estado: 'sin asignar', prioridad: 'media', fecha: '26/04/2026' },
  { id: 'R-2026-0137', afiliado: 'C. Méndez', sector: 'Tracción Eléctrica', tema: 'Mesa de diálogo solicitada', estado: 'en gestión', prioridad: 'alta', fecha: '24/04/2026' },
  { id: 'R-2026-0136', afiliado: 'R. Sosa', sector: 'Catenaria Quilmes', tema: 'Capacitación 2x25 kV', estado: 'resuelto', prioridad: 'media', fecha: '20/04/2026' }
]
