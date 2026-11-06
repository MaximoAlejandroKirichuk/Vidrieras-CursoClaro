import assert from 'node:assert/strict';
import { readdir, readFile, access } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

const root = resolve('dist');
async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(join(directory, e.name)) : join(directory, e.name)))).flat();
}
let courses = 0;
let schedules = 0;
for (const path of (await files(root)).filter(f => f.endsWith('.html'))) {
  const html = await readFile(path, 'utf8');
  for (const [, href] of html.matchAll(/href="([^"#]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
    const destination = decodeURI(href.split(/[?#]/)[0]);
    assert(!destination.startsWith('/'), `Absolute local link in ${path}: ${href}`);
    await access(resolve(dirname(path), destination));
  }
  if (!path.endsWith('/pago/index.html')) continue;
  courses++;
  const json = html.match(/<script[^>]*id="funnel-data"[^>]*>([\s\S]*?)<\/script>/)?.[1];
  assert(json, `Missing checkout data: ${path}`);
  const data = JSON.parse(json);
  assert(data.sessions.every(s => s.cupos > 0), 'Full groups cannot be purchased');
  for (const schedule of Object.values(data.schedules)) {
    schedules++;
    assert(schedule.dueToday >= 0);
    if (!schedule.recurring) {
      assert.equal(schedule.dueToday + schedule.payments.reduce((sum, p) => sum + p.amount, 0), schedule.total);
      assert.equal(schedule.total - schedule.dueToday, schedule.balance);
    }
    assert(schedule.payments.every(p => p.amount >= 0 && Number.isInteger(p.amount)));
  }
  if (data.course === 'kids') {
    const plan = data.schedules['kids-9:matricula:0'];
    assert.equal(plan.dueToday, 45000);
    assert.equal(plan.payments.length, 9);
    assert.equal(plan.payments[0].amount, 62000);
    assert.equal(plan.total, 603000);
  }
  if (data.course === 'intensivo-electricidad') {
    const plan = data.schedules['int-sab:sena:0'];
    assert.equal(plan.dueToday, 30000);
    assert.equal(plan.payments[0].amount, 65000);
    assert.equal(plan.payments[0].date, '2026-11-13');
  }
  if (data.course === 'ingles-general') {
    const plan = data.schedules['a1-man:suscripcion:0'];
    assert.equal(plan.recurring, true);
    assert.equal(plan.dueToday, 68000);
    assert.equal(plan.payments[0].amount, 68000);
    assert(!data.sessions.some(s => s.id === 'b1-mar'));
  }
}
assert.equal(courses, 15);
console.log(`Verified ${courses} course checkouts, ${schedules} plan/commission/kit schedules and every built local link.`);
