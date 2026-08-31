// Legión Digital Studio

// Mobile navigation
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    nav.classList.remove('is-open');
  }

  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    nav.classList.toggle('is-open', willOpen);
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) closeMenu();
  });
})();

// Conversion events. If an analytics provider is added later, it can consume dataLayer.
(function () {
  window.dataLayer = window.dataLayer || [];

  function track(eventName, details) {
    window.dataLayer.push({ event: eventName, ...details });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    if (link.matches('a[href="#contacto"], a[href^="mailto:"]')) {
      track('contact_click', { destination: link.getAttribute('href') });
    }
    if (link.closest('.work-card')) {
      track('portfolio_click', { destination: link.href });
    }
  });

  document.querySelectorAll('.faq-list details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) track('faq_open', { question: item.querySelector('summary').textContent.trim() });
    });
  });
})();

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
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'form_submit_attempt', project_type: form.elements.project_type.value });

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
        window.dataLayer.push({ event: 'form_submit_success' });
      } else {
        throw new Error('submit failed');
      }
    } catch (err) {
      status.textContent = 'No se pudo enviar. Escríbenos directo a legionario@legiondigitalstudio.com';
      status.classList.add('form-status-error');
      window.dataLayer.push({ event: 'form_submit_error' });
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar solicitud';
    }
  });
})();
