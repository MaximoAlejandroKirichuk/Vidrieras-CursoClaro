# CursoClaro · Vidrieras de ejemplo

Una colección de referencias para mostrar trabajo y explorar lo que un instituto podría tener. Las tres demos comparten un recorrido de venta en cuatro páginas: tienda, curso, pago y confirmación. Cada instituto conserva sus colores y tipografías.

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

Las tiendas usan `src/components/Storefront.astro`. `src/pages/[instituto]/[...recorrido].astro` genera las otras tres páginas para cada curso. Por ejemplo:

- `/idiomas/`: tienda.
- `/idiomas/ingles-general/`: curso y sus comisiones.
- `/idiomas/ingles-general/pago/`: comisión, plan, datos y pago simulado.
- `/idiomas/ingles-general/confirmacion/`: recibo de la simulación; sin selección válida muestra un enlace para iniciar la inscripción.

`src/layouts/Funnel.astro` y `src/styles/funnel.css` definen la composición compartida. Los estilos de cada instituto conservan sus variables de marca. El selector de grupos mantiene filtros, contador, estado vacío y ayuda por nivel. El checkout anterior en modal se conserva como código heredado, pero no participa del nuevo recorrido.

`src/lib/funnel.ts` calcula el calendario ilustrativo usado tanto en pago como en confirmación. Las cuotas vencen el día 10 desde el mes de inicio, nunca antes del mes siguiente al de la compilación. La seña de un curso de un solo pago muestra el saldo antes del inicio. Los kits se suman al pago único o al saldo de las cuotas. Las suscripciones muestran el próximo pago y su continuidad, sin presentarlas como un total cerrado.

Las comisiones sin cupo, anteriores a la fecha de compilación o de un curso con `cerrado: true` no se pueden comprar. La página conserva el formulario de lista de espera simulada. Docente, público y temario detallado son campos opcionales por curso: no se generan credenciales ni testimonios.

### Medición de ejemplo

El navegador emite `funnel:measurement` y conserva hasta 100 eventos de la página actual en `window.funnelEvents`: `course_click`, `course_view`, `enroll_click`, `checkout_start`, `payment_simulated_complete` y `waitlist_simulated`. Incluyen instituto y curso, nunca los datos del formulario. No hay proveedor analítico ni persistencia entre páginas; para medir conversiones reales hay que conectar un receptor.

La URL de confirmación transporta solo comisión, plan y kit, más un marcador de simulación. Es reproducible y no acredita un pago real. Nombre, email y WhatsApp permanecen en el formulario y no se transmiten.

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
