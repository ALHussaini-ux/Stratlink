// Typewriter effect for hero text
const text = "Building Tomorrow’s Web";
let i = 0;
const speed = 80;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("hero-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
