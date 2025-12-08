// Skill bar animation
const skillLevels = document.querySelectorAll('.skill-level');
window.addEventListener('load', () => {
    skillLevels.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = level;
    });
});

// Contact form with Formspree
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    formMessage.textContent = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { Accept: "application/json" }
        });

        if (response.ok) {
            formMessage.textContent = "Message sent successfully!";
            form.reset();
        } else {
            formMessage.textContent = "Oops! Something went wrong.";
        }
    } catch (error) {
        formMessage.textContent = "Network error. Please try again.";
    }
});
