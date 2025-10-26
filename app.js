document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // -------------------------------
  // 1) Spotlight Cursor Effect
  // -------------------------------

  // Ensure a fixed overlay exists so the glow is visible across the whole page
  let spotlight = document.querySelector('.cursor-spotlight');
  if (!spotlight) {
    spotlight = document.createElement('div');
    spotlight.className = 'cursor-spotlight';
    spotlight.setAttribute('aria-hidden', 'true');
    document.body.prepend(spotlight);
  }

  const root = document.documentElement;

  // Use rAF to batch DOM writes (smoother + low GC)
  let pending = false;
  let lastX = 0;
  let lastY = 0;

  const applyMouseVars = () => {
    pending = false;
    root.style.setProperty('--mouse-x', `${lastX}px`);
    root.style.setProperty('--mouse-y', `${lastY}px`);
  };

  const handlePointerMove = (e) => {
    const point = (e.touches && e.touches[0]) || e;
    lastX = point.clientX || 0;
    lastY = point.clientY || 0;
    if (!pending) {
      pending = true;
      requestAnimationFrame(applyMouseVars);
    }
  };

  // pointermove covers mouse, pen, and touch
  document.addEventListener('pointermove', handlePointerMove, { passive: true });
  document.addEventListener('touchmove', handlePointerMove, { passive: true });

  // Initialize position to center-ish so the glow is visible before first move
  root.style.setProperty('--mouse-x', '50vw');
  root.style.setProperty('--mouse-y', '30vh');

  // -------------------------------
  // 2) Scroll-aware Navigation (Scrollspy)
  // -------------------------------
  const sections = document.querySelectorAll('.right-column section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const id = entry.target.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (correspondingLink) correspondingLink.classList.add('active');
      }
    });
  }, {
    rootMargin: '-50% 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));

  // -------------------------------
  // 3) Animate Sections on Scroll
  // -------------------------------
  const revealSections = gsap.utils.toArray('.right-column section');
  revealSections.forEach(section => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });
});

// --- 4) Initialize VANTA Topology Background ---
VANTA.TOPOLOGY({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x194f6e,      // matches your accent soft green, 0x167d70
  backgroundColor: 0x0, // matches your dark theme
  points: 10.00,
  maxDistance: 25.00,
  spacing: 20.00
});
