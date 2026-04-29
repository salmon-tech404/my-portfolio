// ── Scroll animations (fade-in-up) ─────────────────────────
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in-up').forEach((el) => fadeObserver.observe(el));

// ── Active nav link ────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove('active'));
        const link = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((s) => navObserver.observe(s));

// ── Navbar frosted glass on scroll ────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
