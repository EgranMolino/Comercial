# Egran · Herramienta Comercial

App web para el equipo comercial de Egran. Sin login, funciona 100% en el navegador (GitHub Pages), con progreso guardado en el celular de cada vendedor.

## Qué tiene

- **Aprender** — el manual completo (Prólogo + Partes 1 a 10), con progreso guardado por sección.
- **Modo Campo** — 10 situaciones típicas ("voy a una negociación", "un cliente me puso una objeción", etc.) que arman una pantalla con lo relevante de todo el manual, sin que el vendedor tenga que ir a buscarlo.
- **Mi semana** — checklist de rutina, semáforo de inactividad interactivo, y objeciones de referencia rápida.
- **Buscar** — encuentra cualquier tema por palabra clave.
- **Matriz de Situación** y **Objeciones** — se leen en vivo desde Google Sheets (ver más abajo), así Fernando y Agustín las actualizan sin tocar código.
- **Botón de WhatsApp** — para cuando un cliente dice algo que no está en el manual, abre WhatsApp con un mensaje pre-armado para compartir con el equipo.

## Publicarla en GitHub Pages (gratis, sin backend)

1. Creá un repositorio nuevo en GitHub (público o privado — Pages funciona con ambos si tenés cuenta paga; con cuenta gratis tiene que ser público).
2. Subí **todos los archivos de esta carpeta** manteniendo la misma estructura (`index.html`, `css/`, `js/`). Podés arrastrarlos directo en la web de GitHub, sin usar la terminal.
3. Andá a **Settings → Pages** del repositorio.
4. En "Source", elegí la rama `main` y la carpeta `/ (root)`.
5. Guardá. En un minuto vas a tener un link tipo `https://tu-usuario.github.io/tu-repo/` — ese es el link que le pasás al equipo.

## La Matriz de Situación y las Objeciones — ya están creadas y conectadas

Te armé las dos planillas directo en tu Google Drive, ya cargadas con todos los datos actuales del manual v1.1, y la app (`js/sheets.js`) ya apunta a ellas:

- **Egran - Matriz de Situación** → https://docs.google.com/spreadsheets/d/1Rz0V6osEI7EOWZb1QmSLGiPJdw-I5PEm4bbaWxXgpwk/edit
- **Egran - Objeciones** → https://docs.google.com/spreadsheets/d/1F6yH9ohvHJWaL39Q56ef2AdGTADiW0_fGPPtKC0e64c/edit

**Falta un solo paso, que no pude hacer yo por vos:** por privacidad, Google no deja que una app externa marque una planilla como "pública" automáticamente — eso lo tiene que hacer el dueño del archivo, con un clic:

1. Abrí cada planilla con los links de arriba.
2. Botón **Compartir** (arriba a la derecha) → **Cambiar a cualquier persona con el enlace** → asegurate de que el rol sea **Lector**.
3. Listo. No hace falta publicar nada más ni tocar código — la app ya sabe dónde buscar cada una.

Mientras no hagas ese paso, la app sigue funcionando igual (con los datos de respaldo cargados), así que no hay apuro ni riesgo de que algo se rompa.

### Cómo editar los datos de ahí en adelante

Editás la fila que corresponda directo en la planilla (agregar, cambiar un %, corregir un texto) y guardás — la próxima vez que alguien abra la app, ya ve los datos actualizados. No hace falta avisarme a mí ni volver a subir nada a GitHub.

### Formato de columnas (por si arman una planilla nueva más adelante)

**Matriz:** `Situacion | DescuentoMaximo | Logistica | FormaDePago | VolumenMinimo`

**Objeciones:** `Objecion | QueHayDetras | ComoResponder | Ejemplo | TestimonioTexto | TestimonioAutor` (las últimas dos son opcionales)

## Configurar el número de WhatsApp

En `js/sheets.js`, campo `CONFIG.whatsappNumero`. Poné el número con código de país, sin espacios ni signo `+` (ejemplo: `5493511234567`). Si lo dejan vacío, el botón abre WhatsApp para elegir el contacto en el momento en vez de ir a un número fijo.

## Cómo se guarda el progreso

Todo vive en el `localStorage` del navegador de cada persona — no hay servidor ni base de datos. Esto significa: no hace falta login, pero si alguien cambia de celular o borra los datos del navegador, el progreso se reinicia en ese dispositivo. Está pensado así a propósito (ver charla con Mila) para arrancar simple; si más adelante hace falta ver el progreso del equipo desde un panel, ese es un paso aparte (login + base de datos).

## Estructura de archivos

```
index.html          → estructura de la app
css/style.css        → todos los estilos
js/content.js         → el manual completo, en bloques reutilizables
js/escenarios.js      → qué junta cada situación de Modo Campo
js/sheets.js           → conexión con Google Sheets (Matriz y Objeciones) + WhatsApp
js/storage.js          → guardado de progreso en el dispositivo
js/app.js               → routing y armado de las pantallas
```

## Actualizar contenido del manual más adelante

Todo el texto vive en `js/content.js`, organizado por Parte y Sección, con bloques de tipo `p` (párrafo), `bullets`, `table`, `callout`, `quote` y `label`. Para sumar una sección nueva (por ejemplo, si el manual llega a una v1.2), se agrega un objeto más al array `secciones` de la Parte correspondiente, y automáticamente aparece en Modo Aprendizaje y queda disponible para usarse en cualquier escenario de Modo Campo.
