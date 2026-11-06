(() => {
  const data = JSON.parse(document.getElementById('funnel-data').textContent);
  const params = new URLSearchParams(location.search);
  const $ = (selector) => document.querySelector(selector);
  const money = n => '$' + n.toLocaleString('es-AR');
  const date = iso => new Date(iso + 'T12:00:00Z').toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const text = (selector, value) => { const element = $(selector); if (element) element.textContent = value; };
  const track = event => window.trackFunnel?.(event);
  const selected = data.sessions.find(s => s.id === params.get('comision'));
  const sessionText = s => `${s.titulo} · ${date(s.inicio)} · ${s.dias}, ${s.horario} · ${s.sede}`;
  function nextPayment(schedule) {
    if (!schedule.payments.length) return 'Saldo cancelado. No hay próximas cuotas.';
    const first = schedule.payments[0];
    return `${money(first.amount)} · ${date(first.date)}${schedule.plan.id === 'sena' && schedule.payments.length === 1 ? ' (antes del inicio)' : ''}`;
  }
  function render(schedule, session) {
    text('[data-session-summary]', sessionText(session));
    text('[data-today]', money(schedule.dueToday));
    text('[data-total]', schedule.recurring ? `Suscripción: ${money(schedule.plan.hoy)} por mes hasta cancelar.` : `Total: ${money(schedule.total)}`);
    text('[data-balance]', schedule.recurring ? 'El total depende de cuántos meses continúes.' : `Saldo después de hoy: ${money(schedule.balance)}`);
    text('[data-plan-name]', schedule.plan.titulo);
    text('[data-next-payment]', nextPayment(schedule));
    const list = $('[data-schedule]');
    list?.replaceChildren();
    schedule.payments.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${date(p.date)} · ${money(p.amount)}`;
      list?.append(li);
    });
    if (!schedule.payments.length && list) {
      const li = document.createElement('li'); li.textContent = 'Sin pagos pendientes.'; list.append(li);
    }
    if (schedule.recurring && list) {
      const li = document.createElement('li'); li.textContent = `Luego, ${money(schedule.plan.hoy)} el día 10 de cada mes hasta cancelar.`; list.append(li);
    }
  }
  document.querySelectorAll('[data-enroll]').forEach(link => {
    if (selected) { const url = new URL(link.href); url.searchParams.set('comision', selected.id); link.href = url.href; }
  });
  if (selected && $('[data-booking-date]')) {
    text('[data-booking-title]', 'La comisión que elegiste');
    text('[data-booking-date]', date(selected.inicio));
    $('[data-booking-date]').dateTime = selected.inicio;
    text('[data-booking-location]', `${selected.titulo} · ${selected.sede}`);
  }
  $('[data-waitlist]')?.addEventListener('submit', e => {
    e.preventDefault();
    text('[data-waitlist-status]', 'Solicitud de ejemplo completada. No guardamos el número ni enviaremos avisos reales.');
    track('waitlist_simulated');
  });
  const form = $('#f-payment');
  if (form) {
    if (selected) form.elements.commission.value = selected.id;
    const requestedPlan = [...form.querySelectorAll('[name=plan]')].find(r => r.value === params.get('plan'));
    if (requestedPlan) requestedPlan.checked = true;
    if (form.elements.kit) form.elements.kit.checked = params.get('kit') === '1';
    let busy = false;
    const selection = () => {
      const session = data.sessions.find(s => s.id === form.elements.commission.value);
      const plan = form.elements.plan.value;
      const kit = form.elements.kit?.checked ? '1' : '0';
      return { session, plan, kit, schedule: data.schedules[`${session?.id}:${plan}:${kit}`] };
    };
    function update() {
      const { session, schedule, plan, kit } = selection();
      if (!schedule) return;
      render(schedule, session);
      text('[data-availability]', `${session.cupos} lugares de ejemplo en esta comisión.`);
      text('[data-pay]', `Simular pago de ${money(schedule.dueToday)}`);
      const current = new URL(location.href);
      current.searchParams.set('comision', session.id); current.searchParams.set('plan', plan); current.searchParams.set('kit', kit);
      try { history.replaceState(null, '', current); } catch { /* file:// may restrict history updates. */ }
      const back = $('[data-back-course]');
      const backUrl = new URL(back.href); backUrl.searchParams.set('comision', session.id); back.href = backUrl.href;
    }
    update();
    form.addEventListener('change', update);
    // The layout registers measurement after this inline component has loaded.
    document.addEventListener('DOMContentLoaded', () => track('checkout_start'), { once: true });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (busy) return;
      const { session, schedule, plan, kit } = selection();
      if (!schedule || !session) { text('[data-payment-status]', 'Elegí una comisión y un plan disponibles.'); return; }
      busy = true;
      const button = $('[data-pay]'); button.disabled = true; button.textContent = 'Procesando simulación…';
      form.setAttribute('aria-busy', 'true');
      form.querySelectorAll('fieldset').forEach(field => { field.disabled = true; });
      text('[data-payment-status]', 'Estamos preparando tu confirmación de ejemplo.');
      setTimeout(() => {
        const url = new URL($('[data-confirmation-link]').href);
        url.search = new URLSearchParams({ comision: session.id, plan, kit, simulacion: 'completada' }).toString();
        track('payment_simulated_complete');
        location.assign(url.href);
      }, 700);
    });
    window.addEventListener('pageshow', e => {
      if (!e.persisted) return;
      busy = false; form.removeAttribute('aria-busy');
      form.querySelectorAll('fieldset').forEach(field => { field.disabled = false; });
      $('[data-pay]').disabled = false; text('[data-payment-status]', ''); update();
    });
  }
  if ($('[data-receipt]')) {
    const schedule = data.schedules[`${selected?.id}:${params.get('plan')}:${params.get('kit') === '1' ? 1 : 0}`];
    if (params.get('simulacion') === 'completada' && selected && schedule) {
      $('[data-no-receipt]').hidden = true; $('[data-receipt]').hidden = false;
      render(schedule, selected);
      text('[data-email-summary]', `${sessionText(selected)}. Pago simulado: ${money(schedule.dueToday)}. Próximo pago de ejemplo: ${nextPayment(schedule)}`);
    }
    $('[data-whatsapp]').addEventListener('click', () => {
      text('[data-contact-status]', `Consulta simulada a ${data.institute}. No se abrió WhatsApp ni se envió un mensaje.`);
    });
  }
})();
