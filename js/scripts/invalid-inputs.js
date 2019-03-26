const contactForm = document.querySelector('.contact-form');
const contactFormBtn = contactForm.querySelector('.btn[type=submit]');

if (contactFormBtn) {
    contactFormBtn.addEventListener('click', e => {
        const invalidFields = [...contactForm.querySelectorAll(':invalid')];
        invalidFields.forEach(input => input.classList.add('invalid'));

        contactForm.addEventListener('input', e => {
            const currField = e.target;

            if (!currField.matches(':invalid')) {
                currField.classList.remove('invalid');
            }
        });
    });
}
