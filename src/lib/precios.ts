import type { Curso, Comision, Instituto } from '../data/tipos';

export const pesos = (n: number) => '$' + Math.round(n).toLocaleString('es-AR');

const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export function fecha(iso: string, largo = true) {
  const d = new Date(iso + 'T12:00:00Z');
  const t = `${d.getUTCDate()} de ${MESES[d.getUTCMonth()]}`;
  return largo ? `${DIAS[d.getUTCDay()]} ${t}` : t;
}

export interface PlanCalculado {
  id: string; titulo: string; hoy: number; detalle: string; total: number; nota?: string;
}

const redondear = (n: number) => Math.round(n / 100) * 100;

/** Todas las cuentas salen de acá, así el total siempre cierra. */
export function planes(c: Curso): PlanCalculado[] {
  const { cuotas: q, matricula = 0, sena = 0, descuentoContado = 0 } = c.precio;
  const totalCuotas = q.n * q.monto + matricula;
  return c.precio.planes.map((tipo) => {
    switch (tipo) {
      case 'unico': {
        const total = redondear(totalCuotas * (1 - descuentoContado));
        return { id: tipo, titulo: 'Pago único', hoy: total, total,
          detalle: descuentoContado ? `Ahorrás ${pesos(totalCuotas - total)} pagando todo hoy.` : 'Pagás todo hoy y te olvidás.' };
      }
      case 'cuotas':
        return { id: tipo, titulo: q.n === 2 ? 'Primera cuota hoy + 1 programada' : `Primera cuota hoy + ${q.n - 1} programadas`, hoy: q.monto, total: totalCuotas,
          detalle: q.n === 2 ? `Hoy ${pesos(q.monto)}. La segunda cuota de ${pesos(q.monto)} se cobra sola al mes siguiente.` : `Hoy ${pesos(q.monto)}. Las otras ${q.n - 1} cuotas de ${pesos(q.monto)} se cobran solas cada mes.` };
      case 'matricula':
        return { id: tipo, titulo: `Matrícula + ${q.n} cuotas`, hoy: matricula, total: totalCuotas,
          detalle: `Hoy ${pesos(matricula)}. Después ${q.n} cuotas de ${pesos(q.monto)} con débito automático.` };
      case 'sena': {
        const saldo = q.n * q.monto - sena;
        const c2 = saldo / q.n;
        if (!Number.isInteger(c2)) throw new Error(`La seña de ${c.nombre} no deja cuotas exactas`);
        return { id: tipo, titulo: q.n === 1 ? 'Seña hoy + saldo' : 'Seña hoy + saldo en cuotas', hoy: sena, total: q.n * q.monto,
          detalle: q.n === 1 ? `Reservás con ${pesos(sena)}. El saldo de ${pesos(saldo)} lo pagás antes del inicio.` : `Reservás con ${pesos(sena)}. El saldo son ${q.n} cuotas de ${pesos(c2)}, sin tarjeta si preferís.` };
      }
      case 'suscripcion':
        return { id: tipo, titulo: 'Suscripción mensual', hoy: q.monto, total: q.monto,
          detalle: `${pesos(q.monto)} por mes con débito automático. La cancelás cuando quieras.` };
    }
  });
}

export const desde = (c: Curso) => pesos(c.precio.cuotas.monto);
export const hayCupo = (x: Comision) => x.cupos > 0;
export function estado(x: Comision) {
  if (x.cupos === 0) return { texto: 'Completo', clase: 'lleno' };
  if (x.cupos <= 2) return { texto: x.cupos === 1 ? 'Último lugar' : 'Últimos 2 lugares', clase: 'ultimo' };
  return { texto: `Quedan ${x.cupos} lugares`, clase: 'libre' };
}

export function datosCheckout(i: Instituto) {
  return {
    instituto: i.nombreCorto,
    whatsapp: i.whatsapp,
    cursos: Object.fromEntries(i.catalogo.cursos.map((c) => [c.id, {
      nombre: c.nombre,
      planes: planes(c),
      kit: c.precio.kit ?? null,
    }])),
    comisiones: Object.fromEntries(i.fechas.comisiones.map((x) => [x.id, {
      cursoId: x.cursoId, titulo: x.titulo, dias: x.dias, horario: x.horario, sede: x.sede, inicio: fecha(x.inicio),
    }])),
  };
}

export const primeraCon = (i: Instituto, cursoId: string) =>
  i.fechas.comisiones.filter((x) => x.cursoId === cursoId && x.cupos > 0).sort((a, b) => a.inicio.localeCompare(b.inicio))[0];
