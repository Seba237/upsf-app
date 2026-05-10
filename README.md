# UPSF — App institucional (MVP)

App multiplataforma de la Unión Personal Superior Ferroviario.
Versión MVP de demostración para presentar a la Comisión Directiva.

---

## Qué hay en este ZIP

Es el código fuente completo de la app, listo para correr en tu computadora.
Tiene dos vistas (afiliado y directivo), navegación funcional, login con dos
usuarios de prueba, chatbot integrado, listado de beneficios, novedades, y
panel de gestión para directivos.

Tecnología: React + Vite + Tailwind. Se instala como PWA (app nativa) en
celular y escritorio.

---

## Cómo correr la app — paso a paso

### Paso 1 — Descomprimir el ZIP

Hacé doble click en `upsf-app.zip` y descomprimilo. Te va a quedar una
carpeta llamada `upsf-app/`. Ponela donde te resulte cómodo (por ejemplo
en `Documentos/`).

### Paso 2 — Instalar Node.js (solo la primera vez)

Para correr la app necesitás tener Node.js instalado. Es gratis.

1. Abrí: https://nodejs.org/es
2. Descargá la versión **LTS** (la que dice "recomendado para la mayoría").
3. Instalala con doble click. Aceptá todo por defecto.
4. **Reiniciá la computadora** después de instalar (importante).

> Para verificar que quedó bien instalado, abrí PowerShell y escribí
> `node --version`. Tiene que aparecer un número como `v20.x.x`.

### Paso 3 — Abrir PowerShell en la carpeta del proyecto

1. Andá a la carpeta `upsf-app/` con el explorador de archivos.
2. Hacé click derecho **dentro** de la carpeta (en un espacio vacío).
3. Elegí **"Abrir en Terminal"** o **"Abrir ventana de PowerShell aquí"**.

Te tiene que aparecer una ventana negra/azul con texto que termina en
algo como `...\upsf-app>`.

### Paso 4 — Instalar las dependencias (solo la primera vez)

En la ventana de PowerShell, escribí esto y apretá Enter:

```
npm install
```

Va a tardar 1 a 3 minutos. Vas a ver mucho texto pasar. Es normal.
Termina cuando vuelve a aparecer el cursor con `...\upsf-app>`.

### Paso 5 — Levantar la app

En la misma ventana, escribí:

```
npm run dev
```

Vas a ver algo así:

```
  VITE v5.4.21  ready in 320 ms

  ➜  Local:   http://localhost:5173/
```

### Paso 6 — Abrir la app en el navegador

Abrí Chrome (o cualquier navegador) y escribí en la barra de direcciones:

```
http://localhost:5173
```

Listo. La app ya está corriendo.

> Para **detener** la app, volvé a la ventana de PowerShell y apretá
> `Ctrl + C`. Para volver a levantarla otro día, repetí solo el paso 5
> (no hace falta volver a hacer `npm install`).

---

## Usuarios de prueba

La pantalla de login tiene un botón abajo que dice *"Usuarios de prueba"*.
Si lo tocás, te llena los campos solo. Si querés escribirlos a mano:

| Rol         | Usuario     | Contraseña |
|-------------|-------------|------------|
| Afiliado    | `sebastian` | `123456`   |
| Directivo   | `Delegado`  | `123456`   |

Cada uno ve una versión distinta de la app:

- **Afiliado** — credencial digital, beneficios, novedades, chatbot, perfil.
- **Directivo** — panel con métricas, reclamos, publicar novedades, padrón.

---

## Instalar como app en el celular o escritorio

La app es una **PWA**: se puede instalar en cualquier dispositivo sin pasar
por Play Store ni App Store.

**En el celular (Android, iPhone):**

1. Necesitás que la PC y el teléfono estén en la misma red Wi-Fi.
2. En PowerShell, después de `npm run dev`, fijate la línea que dice
   `Network: http://192.168.x.x:5173/`. Si no aparece, levantá la app con
   `npm run dev -- --host` (con dos guiones medios y la palabra `host`).
3. Abrí esa dirección desde el navegador del celular.
4. En el menú del navegador, tocá **"Agregar a pantalla de inicio"**
   (Android) o **"Añadir a pantalla de inicio"** (iPhone).

Te queda un ícono igual al de cualquier app.

**En la PC (Chrome / Edge):**

Cuando la abrís en `http://localhost:5173`, en la barra de direcciones
aparece un ícono de instalación a la derecha. Tocalo y la app se instala
como ventana propia con su ícono.

---

## Cómo modificar la app con Claude Code

Tenés Claude Code instalado. Para que lo trabaje sobre este proyecto:

1. Abrí PowerShell.
2. Andá hasta la carpeta del proyecto:
   ```
   cd C:\Users\TuUsuario\Documents\upsf-app
   ```
   (cambiá la ruta por donde lo hayas puesto vos)
3. Iniciá Claude Code:
   ```
   claude
   ```
4. Pedile cambios en lenguaje natural. Ejemplos:
   - *"Agregá una pantalla de novedades con foto de portada"*
   - *"En el panel directivo, sumá un módulo de eventos"*
   - *"Cambiá el color principal a azul más claro"*

Claude Code va a editar los archivos del proyecto. Mientras tanto,
si tenés `npm run dev` abierto en otra ventana, los cambios se reflejan
en el navegador automáticamente.

---

## Próximos pasos sugeridos

Cuando quieras avanzar de MVP a producción, los pasos son:

1. **Publicación gratuita online** — subir el proyecto a Vercel o Netlify
   para que la Comisión Directiva pueda probarla desde cualquier teléfono
   con un link, sin instalar nada. Lleva 5 minutos y es gratis.
2. **Backend real** — reemplazar los datos hardcodeados (usuarios, padrón,
   reclamos) por una base de datos. La opción simple es Supabase.
3. **Padrón verdadero** — cuando lo tengas, se importa por CSV y queda
   conectado al login.
4. **App nativa Android e iOS** — envolver el mismo código con Capacitor.
   No hay que reescribir, solo empaquetar.
5. **Cumplimiento Ley 25.326** — registrar la base de datos en la
   Agencia de Acceso a la Información Pública (AAIP) antes de salir a
   producción con datos personales reales.

---

## Estructura del proyecto (referencia)

```
upsf-app/
├── public/                   íconos PWA y manifest
├── src/
│   ├── components/           UI compartida (BottomNav, TopBar, Logo)
│   ├── data/                 contenido (usuarios, beneficios, novedades, chatbot)
│   ├── lib/                  contexto de autenticación
│   ├── pages/                pantallas del afiliado
│   │   └── directivo/        pantallas exclusivas del directivo
│   ├── App.jsx               rutas
│   ├── main.jsx              entrada
│   └── index.css             estilos globales
├── index.html
├── package.json              dependencias
├── tailwind.config.js        tokens de diseño (colores, fuentes)
└── vite.config.js            configuración build + PWA
```

Para cambiar usuarios de prueba: `src/data/users.js`
Para cambiar novedades, beneficios o secretarías: `src/data/institucional.js`
Para cambiar el flujo del chatbot: `src/data/chatbot.js`

---

**Versión:** 0.1 MVP demo · mayo 2026
