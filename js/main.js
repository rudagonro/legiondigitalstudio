// Legión Digital Studio

(function () {
  const parallaxEls = Array.from(document.querySelectorAll('[data-speed]'));
  if (!parallaxEls.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    for (const el of parallaxEls) {
      const speed = parseFloat(el.dataset.speed) || 0;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  updateParallax();
})();

// Contact form (Formspree)
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'form-status';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        form.reset();
        status.textContent = '¡Listo! Recibimos tu solicitud, te respondemos pronto.';
        status.classList.add('form-status-ok');
      } else {
        throw new Error('submit failed');
      }
    } catch (err) {
      status.textContent = 'No se pudo enviar. Escríbenos directo a legionario@legiondigitalstudio.com';
      status.classList.add('form-status-error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar solicitud';
    }
  });
})();
