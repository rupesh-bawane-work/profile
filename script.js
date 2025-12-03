// Skill bar animation
const skillLevels = document.querySelectorAll('.skill-level');
window.addEventListener('load', () => {
    skillLevels.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level;
    });
});

// Simple contact form feedback (no backend)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = 'Thank you! Your message has been sent.';
    form.reset();
});

// Smooth scrolling for navbar links with offset for fixed navbar
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const navbarHeight = document.querySelector('header').offsetHeight;

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const sectionTop = targetSection.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    });
});
