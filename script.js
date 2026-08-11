// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth-scroll fallback for older browsers already handled via CSS,
// this just ensures anchor clicks focus the target section for accessibility.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});
