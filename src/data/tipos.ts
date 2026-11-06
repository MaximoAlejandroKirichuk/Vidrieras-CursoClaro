// Forma de los datos de una vidriera. Para clonar para un instituto real
// se copia un archivo de src/data y se cambia solo su contenido.

export type TipoPlan = 'unico' | 'cuotas' | 'suscripcion' | 'matricula' | 'sena';

export interface Precio {
  planes: TipoPlan[];
  /** Cantidad y valor de las cuotas. */
  cuotas: { n: number; monto: number };
  /** Descuento por pago único, entre 0 y 1. */
  descuentoContado?: number;
  /** Matrícula que se paga hoy (plan 'matricula'). */
  matricula?: number;
  /** Seña que se paga hoy (plan 'sena'). */
  sena?: number;
  /** Variante con kit: se suma al total y se cobra en las mismas cuotas. */
  kit?: { monto: number; detalle: string };
}

export interface Curso {
  id: string;
  nombre: string;
  etiqueta: string;
  resumen: string;
  duracion: string;
  modalidad: string;
  datos: string[];
  incluye: string[];
  precio: Precio;
  destacado?: string;
}

export interface Comision {
  id: string;
  cursoId: string;
  /** Agrupa las filas: nivel en idiomas, sede en oficios, modalidad en holístico. */
  grupo: string;
  titulo: string;
  dias: string;
  horario: string;
  inicio: string; // AAAA-MM-DD
  sede: string;
  cupos: number;
}

export type Seccion =
  | 'hero' | 'senales' | 'catalogo' | 'fechas' | 'como' | 'prueba' | 'dueno' | 'faq' | 'cta'
  | 'puertas' | 'parasi' | 'docente' | 'gratis' | 'resultados';

export interface Instituto {
  nicho: 'idiomas' | 'oficios' | 'holistico';
  nombre: string;
  nombreCorto: string;
  ciudad: string;
  direccion: string;
  titulo: string;
  descripcion: string;
  barra: string;
  /** Vacío en la demo: el botón muestra el mensaje en vez de abrir WhatsApp. */
  whatsapp: string;
  nav: { texto: string; href: string }[];
  orden: Seccion[];
  hero: {
    chip: string; h1: string; bajada: string;
    datos: { valor: string; rotulo: string }[];
    precio: string; precioNota: string;
    cta: { texto: string; href: string };
    ctaSec: { texto: string; href: string };
    rating: string;
  };
  senales: { valor: string; rotulo: string }[];
  catalogo: { titulo: string; bajada: string; cursos: Curso[]; pasos?: boolean };
  fechas: { titulo: string; bajada: string; grupoRotulo: string; comisiones: Comision[] };
  como: { titulo: string; pasos: { t: string; d: string }[] };
  prueba: {
    titulo: string; rating: string;
    testimonios: { texto: string; nombre: string; dato: string }[];
    galeria?: { titulo: string; autor: string }[];
  };
  panel: {
    filas: { alumno: string; curso: string; cuota: string; estado: 'Al día' | 'Vence hoy' | 'Vencida' }[];
    alumnos: number; alDia: number; vencidas: number; cobrado: string;
  };
  faq: { p: string; r: string }[];
  cta: { titulo: string; bajada: string; boton: string; href: string };
  confirmacion: { pasos: (curso: string) => string[] };
  textoPagoConfirmado: string;
  puertas?: { titulo: string; bajada: string; items: { t: string; d: string; grupo: string }[] };
  parasi?: { titulo: string; si: string[]; no: string[]; alcance: string };
  docente?: { titulo: string; nombre: string; rol: string; bio: string; cita: string; datos: string[] };
  gratis?: { titulo: string; bajada: string; fecha: string; boton: string };
  resultados?: { titulo: string; bajada: string; items: string[] };
}
