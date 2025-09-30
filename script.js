// Fade-in and slide-up animation for name and tagline
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-slide').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 300 + i * 200);
  });
});

// Optional: Animate background icons with floating movement
// (Extra movement for more dynamic effect)
const icons = document.querySelectorAll('.background-icons .icon');
icons.forEach((icon, i) => {
  const float = () => {
    const x = Math.sin(Date.now() / (4000 + i * 500)) * 12;
    const y = Math.cos(Date.now() / (3500 + i * 700)) * 18;
    icon.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(float);
  };
  float();
});
