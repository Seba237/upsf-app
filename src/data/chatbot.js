// Árbol de conversación del chatbot UPSF
// Estructura: cada nodo tiene id, mensaje del bot y opciones (cada opción lleva al siguiente nodo)
// Reproduce el flujo del bot oficial de WhatsApp +54 9 11 2376-4800

export const CHATBOT_TREE = {
  root: {
    id: 'root',
    title: 'Bienvenida',
    message: '¡Hola! Soy el asistente automatizado de UPSF. ¿Sobre qué Secretaría necesitás consultar?',
    subtitle: 'Respondé tocando una opción.',
    options: [
      { id: 'general', label: 'Secretaría General', next: 'sec-general' },
      { id: 'adjunta', label: 'Secretaría Adjunta', next: 'sec-proximamente' },
      { id: 'hacienda', label: 'Sec. de Hacienda y Patrimonio', next: 'sec-proximamente' },
      { id: 'administrativa', label: 'Secretaría Administrativa', next: 'sec-administrativa' },
      { id: 'mujer', label: 'Sec. de la Mujer, Género y Diversidad', next: 'sec-proximamente' },
      { id: 'prevision', label: 'Sec. de Previsión y Acción Social', next: 'sec-prevision' },
      { id: 'turismo', label: 'Secretaría de Turismo', next: 'sec-turismo' },
      { id: 'prensa', label: 'Sec. de Prensa y Propaganda', next: 'sec-prensa' }
    ]
  },

  'sec-general': {
    id: 'sec-general',
    title: 'Secretaría General',
    badge: 'Gonzalo Facundo Bello',
    message: 'La Unión del Personal Superior Ferroviario (UPSF) representa a los trabajadores jerárquicos de la actividad.',
    submessage: 'Podés conocer la historia completa del gremio y el listado de toda la Comisión Directiva Nacional en la web oficial.',
    link: { label: 'Ver autoridades en la web', url: 'https://upsf.com.ar/autoridades/' },
    options: [
      { id: 'volver', label: 'Volver a Secretarías', next: 'root' }
    ]
  },

  'sec-administrativa': {
    id: 'sec-administrativa',
    title: 'Secretaría Administrativa',
    badge: 'Gabriel Martín Pozzi',
    message: 'Elegí una opción:',
    options: [
      { id: 'credencial', label: 'Mi Credencial', next: 'credencial-flow' },
      { id: 'juridica', label: 'Asesoramiento Jurídico y Contable', next: 'asesoria-juridica' },
      { id: 'volver', label: 'Volver a Secretarías', next: 'root' }
    ]
  },

  'credencial-flow': {
    id: 'credencial-flow',
    title: 'Mi Credencial',
    message: '¡Excelente! Para armar tu credencial, abrí la sección Mi Credencial desde el menú principal.',
    submessage: 'En la app podés generar tu credencial digital en segundos: validamos tu DNI contra el padrón y te emitimos el QR de validación.',
    cta: { label: 'Ir a Mi Credencial', goto: '/credencial' },
    options: [
      { id: 'volver', label: 'Volver a Administrativa', next: 'sec-administrativa' }
    ]
  },

  'asesoria-juridica': {
    id: 'asesoria-juridica',
    title: 'Asesoramiento Jurídico, Contable e Impositivo',
    message: 'Nuestros afiliados cuentan con asesoramiento profesional gratuito y permanente frente a consultas laborales, civiles e impositivas.',
    list: {
      titulo: 'Equipo de profesionales',
      items: [
        'Dr. Juan Manuel Roel',
        'Dra. Mayra Di Mónica',
        'Dr. Gabriel Pozzi',
        'Cont. Gabriel Galimini',
        'Cont. Gastón Pacheco'
      ]
    },
    contact: {
      tel: '+54 11 2376-4800',
      email: 'estudiojuridico@upsf.com.ar',
      web: 'https://upsf.com.ar/estudiojuridico/'
    },
    options: [
      { id: 'volver', label: 'Volver a Administrativa', next: 'sec-administrativa' },
      { id: 'inicio', label: 'Volver al inicio', next: 'root' }
    ]
  },

  'sec-prevision': {
    id: 'sec-prevision',
    title: 'Secretaría de Previsión y Acción Social',
    badge: 'Sergio Fabián Cuello',
    message: 'Elegí una opción:',
    options: [
      { id: 'mutual', label: 'Mutual Ferroviaria', next: 'mutual-info' },
      { id: 'sepelios', label: 'Servicios de Sepelio', next: 'sepelios-info' },
      { id: 'comercios', label: 'Comercios Adheridos', next: 'comercios-info' },
      { id: 'volver', label: 'Volver a Secretarías', next: 'root' }
    ]
  },

  'mutual-info': {
    id: 'mutual-info',
    title: 'Mutual Ferroviaria',
    message: 'La Asociación Mutual es una entidad sin fines de lucro que brinda a sus asociados beneficios y apoyo económico.',
    list: {
      titulo: 'Beneficios principales',
      items: [
        'Préstamos — Ayudas económicas de hasta $100.000',
        'Subsidios — Casamiento, nacimiento y mudanza',
        'Farmacias — Asoc. Farmacias Mutuales, F.S.T.M., Allegrino, Farmalanus',
        'Odontología — Adultos, implantes, cirugía y atención adolescentes',
        'Óptica — Cadeo Optired e Hipervisión',
        'Ortopedia — Ans. Care y Ortopedia Pasco'
      ]
    },
    cta: { label: 'Ver detalle completo', goto: '/beneficios/mutual' },
    options: [
      { id: 'volver', label: 'Volver a Previsión', next: 'sec-prevision' }
    ]
  },

  'sepelios-info': {
    id: 'sepelios-info',
    title: 'Servicios de Sepelio',
    message: 'Servicio de sepelios con cobertura para el afiliado y su grupo familiar directo. Atención las 24 horas en todo el territorio nacional.',
    options: [
      { id: 'volver', label: 'Volver a Previsión', next: 'sec-prevision' }
    ]
  },

  'comercios-info': {
    id: 'comercios-info',
    title: 'Comercios Adheridos',
    message: 'Red de comercios con descuentos exclusivos para afiliados. Próximamente disponible un buscador con filtro por rubro y geolocalización.',
    options: [
      { id: 'volver', label: 'Volver a Previsión', next: 'sec-prevision' }
    ]
  },

  'sec-turismo': {
    id: 'sec-turismo',
    title: 'Secretaría de Turismo',
    badge: 'Mauro Alfredo Montiel',
    message: 'Elegí una opción:',
    options: [
      { id: 'descuentos', label: 'Turismo y Descuentos', next: 'turismo-regiones' },
      { id: 'red', label: 'Red de Emprendimientos', next: 'red-emprendimientos' },
      { id: 'volver', label: 'Volver a Secretarías', next: 'root' }
    ]
  },

  'turismo-regiones': {
    id: 'turismo-regiones',
    title: 'Turismo y Descuentos UPSF',
    message: 'Elegí una región o servicio para ver los convenios disponibles:',
    options: [
      { id: 'caba', label: 'CABA', next: 'turismo-resultado', payload: { region: 'CABA' } },
      { id: 'bsas', label: 'Buenos Aires', next: 'turismo-resultado', payload: { region: 'Buenos Aires' } },
      { id: 'centro', label: 'Centro', next: 'turismo-resultado', payload: { region: 'Centro' } },
      { id: 'litoral', label: 'Litoral', next: 'turismo-resultado', payload: { region: 'Litoral' } },
      { id: 'norte', label: 'Norte', next: 'turismo-resultado', payload: { region: 'Norte' } },
      { id: 'patagonia', label: 'Patagonia', next: 'turismo-resultado', payload: { region: 'Patagonia' } },
      { id: 'cuyo', label: 'Cuyo', next: 'turismo-resultado', payload: { region: 'Cuyo' } },
      { id: 'internacional', label: 'Internacional', next: 'turismo-resultado', payload: { region: 'Internacional' } },
      { id: 'transporte', label: 'Transporte y Agencias', next: 'turismo-resultado', payload: { region: 'Transporte y Agencias' } },
      { id: 'volver', label: 'Volver a Turismo', next: 'sec-turismo' }
    ]
  },

  'turismo-resultado': {
    id: 'turismo-resultado',
    title: 'Convenios disponibles',
    message: 'Los convenios completos los podés ver en la sección Beneficios → Turismo. Te llevamos directo si querés.',
    cta: { label: 'Ir a Turismo', goto: '/beneficios/turismo' },
    options: [
      { id: 'volver', label: 'Elegir otra región', next: 'turismo-regiones' },
      { id: 'inicio', label: 'Volver al inicio', next: 'root' }
    ]
  },

  'red-emprendimientos': {
    id: 'red-emprendimientos',
    title: 'Red de Emprendimientos',
    message: 'Plataforma para promover los emprendimientos de afiliados y familiares. Próximamente disponible en la app.',
    options: [
      { id: 'volver', label: 'Volver a Turismo', next: 'sec-turismo' }
    ]
  },

  'sec-prensa': {
    id: 'sec-prensa',
    title: 'Secretaría de Prensa y Propaganda',
    badge: 'Rita Silvia Peschiera',
    message: 'Elegí una opción:',
    options: [
      { id: 'efemerides', label: 'Efemérides', next: 'efemerides-info' },
      { id: 'biblioteca', label: 'Biblioteca', next: 'biblioteca-info' },
      { id: 'novedades', label: 'Novedades', next: 'novedades-shortcut' },
      { id: 'volver', label: 'Volver a Secretarías', next: 'root' }
    ]
  },

  'biblioteca-info': {
    id: 'biblioteca-info',
    title: 'Biblioteca y Documentación',
    message: 'Material de formación gremial, política e histórica disponible online.',
    list: {
      titulo: 'Lecturas destacadas',
      items: [
        'Historia de los Ferrocarriles Argentinos — Scalabrini Ortiz',
        'Manual de Conducción Política — Juan D. Perón',
        'Política Británica en el Río de la Plata — Scalabrini Ortiz',
        'La Razón de mi Vida — Eva Perón',
        'Los Profetas del Odio — Arturo Jauretche'
      ]
    },
    options: [
      { id: 'volver', label: 'Volver a Prensa', next: 'sec-prensa' }
    ]
  },

  'efemerides-info': {
    id: 'efemerides-info',
    title: 'Efemérides',
    message: 'Calendario de fechas significativas para el sindicato y el sector ferroviario. Próximamente integrado al inicio de la app.',
    options: [
      { id: 'volver', label: 'Volver a Prensa', next: 'sec-prensa' }
    ]
  },

  'novedades-shortcut': {
    id: 'novedades-shortcut',
    title: 'Novedades',
    message: 'Las últimas novedades del sindicato las podés ver directamente en la sección Novedades del menú principal.',
    cta: { label: 'Ir a Novedades', goto: '/novedades' },
    options: [
      { id: 'volver', label: 'Volver a Prensa', next: 'sec-prensa' }
    ]
  },

  'sec-proximamente': {
    id: 'sec-proximamente',
    title: 'Próximamente',
    message: 'Esta secretaría incorporará nuevas funciones en breve. Mientras tanto, podés contactarnos por los canales oficiales.',
    options: [
      { id: 'volver', label: 'Volver a Secretarías', next: 'root' }
    ]
  }
}

export const CHATBOT_QUICK_ACCESS = [
  { id: 'mutual', label: 'Mutual', node: 'mutual-info' },
  { id: 'turismo', label: 'Turismo', node: 'sec-turismo' },
  { id: 'asesoria', label: 'Asesoría legal', node: 'asesoria-juridica' },
  { id: 'credencial', label: 'Credencial', node: 'credencial-flow' }
]
