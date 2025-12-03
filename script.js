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
