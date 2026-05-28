// ─────────────────────────────────────────
// main.js — initializes the site
// ─────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Render all sections from data
  renderLogosBar();
  renderWorkCards();
  renderConsultingCards();
  renderSkills();
  renderJourney();

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  fadeEls.forEach(el => observer.observe(el));

  // Re-observe after dynamic render (cards added by JS)
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
  }, 100);
});