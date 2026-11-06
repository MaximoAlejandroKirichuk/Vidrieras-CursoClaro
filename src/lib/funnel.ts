import { idiomas } from '../data/idiomas';
import { oficios } from '../data/oficios';
import { holistico } from '../data/holistico';
import type { Curso, Instituto, Comision } from '../data/tipos';
import { planes, pesos } from './precios';

export const institutes = [idiomas, oficios, holistico];
export const referenceDate = new Date().toISOString().slice(0, 10);
export const coursePath = (i: Instituto, c: Curso) => `/${i.nicho}/${c.id}/`;
export const availableSessions = (i: Instituto, c: Curso) => i.fechas.comisiones
  .filter(s => s.cursoId === c.id && s.cupos > 0 && s.inicio >= referenceDate && !c.cerrado)
  .sort((a, b) => a.inicio.localeCompare(b.inicio));
export function priceLabel(c: Curso) {
  const q = c.precio.cuotas;
  return c.precio.planes.includes('suscripcion') ? `${pesos(q.monto)} por mes`
    : q.n === 1 ? `${pesos(q.monto)} en total` : `${q.n} cuotas de ${pesos(q.monto)}`;
}

/** The same schedule drives checkout and confirmation; no personal data is needed. */
export function paymentSchedule(c: Curso, planId: string, session: Comision, kit = false, today = referenceDate) {
  const plan = planes(c).find(p => p.id === planId);
  if (!plan) throw new Error('Plan no disponible');
  const extra = kit && c.precio.kit ? c.precio.kit.monto : 0;
  const recurring = plan.id === 'suscripcion';
  const dueToday = plan.hoy + (plan.id === 'unico' ? extra : 0);
  const total = plan.total + extra;
  const balance = total - dueToday;
  const count = plan.id === 'unico' ? 0 : recurring ? 1
    : plan.id === 'cuotas' ? c.precio.cuotas.n - 1 : c.precio.cuotas.n;
  const firstDate = new Date(`${session.inicio}T12:00:00Z`);
  firstDate.setUTCDate(10);
  const afterToday = new Date(`${today}T12:00:00Z`);
  afterToday.setUTCDate(10);
  afterToday.setUTCMonth(afterToday.getUTCMonth() + 1);
  if (firstDate < afterToday) firstDate.setTime(afterToday.getTime());
  const payments = Array.from({ length: count }, (_, index) => {
    const date = new Date(firstDate);
    date.setUTCMonth(date.getUTCMonth() + index);
    const base = recurring ? c.precio.cuotas.monto + extra : Math.floor(balance / count);
    return { date: date.toISOString().slice(0, 10), amount: base + (!recurring && index === count - 1 ? balance % count : 0) };
  });
  if (plan.id === 'sena' && count === 1) {
    const deadline = new Date(`${session.inicio}T12:00:00Z`);
    deadline.setUTCDate(deadline.getUTCDate() - 1);
    payments[0].date = deadline.toISOString().slice(0, 10) < today ? today : deadline.toISOString().slice(0, 10);
  }
  return { plan, dueToday, total, balance, recurring, payments };
}
