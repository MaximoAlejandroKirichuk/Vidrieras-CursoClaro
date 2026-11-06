# CursoClaro · Vidrieras de ejemplo

Una colección de referencias para mostrar trabajo y explorar lo que un instituto podría tener. Cada demo tiene una composición y un recorrido propios: no son tres versiones de una plantilla universal.

Los institutos son ficticios: Alondra Idiomas, Bisagra Escuela de Oficios y Casa Sauce. Los cursos, precios, fechas y cupos también son datos de ejemplo. La inscripción y el pago están simulados: no cobran dinero, no crean reservas reales ni envían mensajes.

| Ruta | Experiencia | Instituto de ejemplo |
|---|---|---|
| `/idiomas` | Comparar niveles, grupos y horarios | Alondra Idiomas |
| `/oficios` | Consultar cursos prácticos y reservar una fecha | Bisagra Escuela de Oficios |
| `/holistico` | Conocer una formación y elegir su edición | Casa Sauce |

## Ver sin instalar nada

Después de ejecutar `npm run build`, abrí `dist/index.html` con doble clic. La carpeta generada `dist` no se versiona en Git; los filtros y la inscripción simulada también funcionan al abrirla directamente desde disco.

## Cómo correrlo

El proyecto se verificó con Node 22.23.4.

```bash
npm install
npm run dev      # sitio de prueba en http://localhost:4321
npm run build    # genera la carpeta dist
```

`npm run preview` sirve la versión construida.

## Dónde se cambian los datos

Cada nicho tiene un solo archivo de datos:

- `src/data/idiomas.ts`
- `src/data/oficios.ts`
- `src/data/holistico.ts`

Ahí están el nombre, los cursos, los planes de pago, las fechas, los cupos y las preguntas. Las cuentas de cada plan se calculan en `src/lib/precios.ts`.

Cada ruta compone su propia experiencia en `src/pages/idiomas.astro`, `src/pages/oficios.astro` o `src/pages/holistico.astro`. Los estilos correspondientes están en `src/styles/idiomas.css`, `src/styles/oficios.css` y `src/styles/holistico.css`.

Se comparten solamente el marco de demostración (`src/layouts/Vidriera.astro`), el selector de grupos (`src/components/SessionPicker.astro`) y la inscripción simulada (`src/components/Checkout.astro`). `src/styles/demo-base.css` contiene sus estilos funcionales.

### Límites de la demostración

- Usar los datos precargados del formulario; no hacen falta datos personales.
- Los planes muestran cómo sería la elección de pago, no una integración bancaria ni un cobro recurrente real.
- Las demos no presentan reseñas, estadísticas de éxito ni el antiguo panel estático como evidencia de trabajo realizado.
- Los campos y componentes antiguos de prueba social y ensamblado por `orden` se conservan como código heredado, pero no se utilizan en estas páginas. No son una fuente de capacidades o resultados verificados.
- Conectar pagos, persistencia, mensajes o un panel administrativo requiere una implementación aparte. Quitar el aviso de demo no convierte esta simulación en un sistema real.

La portada usa `src/styles/collection.css`. Sus imágenes son capturas de las demos actuales en `public/previews/`, con variantes de 600 y 1200 píxeles y archivos de procedencia. Después de modificar las demos, hay que volver a capturarlas y reconstruir `dist`.

## Cómo desplegarlo en Netlify

El archivo `netlify.toml` ya trae la configuración.

1. Subí el proyecto a un repositorio de GitHub.
2. En Netlify, elegí **Add new site → Import an existing project** y conectá ese repositorio.
3. Confirmá el comando `npm run build` y la carpeta `dist`, y desplegá.

Sin repositorio: en Netlify, entrá a **Sites** y arrastrá la carpeta `dist`.

Las rutas quedan como `https://tu-sitio.netlify.app/idiomas`.

## Antes de mostrarlo

Las fechas de ejemplo van de noviembre de 2026 a marzo de 2027. Si pasan, actualizalas en los archivos de datos.
