// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Contact form: friendly submit handling for Formspree AJAX
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      var action = form.getAttribute('action') || '';
      // If the endpoint is still the placeholder, let the browser handle it (mailto fallback), otherwise AJAX.
      if (action.indexOf('formspree.io/f/YOUR_FORM_ID') !== -1) return;
      e.preventDefault();
      var status = document.getElementById('form-status');
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      try {
        var res = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (status) { status.textContent = 'Thank you — your message has been sent.'; status.style.color = '#4a7a3a'; }
        } else {
          if (status) { status.textContent = 'Something went wrong. Please email me directly.'; status.style.color = '#a44f2d'; }
        }
      } catch (err) {
        if (status) { status.textContent = 'Something went wrong. Please email me directly.'; status.style.color = '#a44f2d'; }
      }
      if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
    });
  }
});
