// Toggle navigation menu on mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');

function animateSections() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < trigger) {
      section.classList.add('visible');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', animateSections);
// Also run on load
animateSections();

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});
