const countryGroupForm = contactForm.querySelector('.country-group');
const contactFormInput = contactForm.querySelector('input[name$="country"]');

if (contactFormInput) {
    contactFormInput.addEventListener('input', e => {
        const currValue = e.target.value;

        currValue.toUpperCase() === 'USA'
            ? countryGroupForm.classList.add('is-usa')
            : countryGroupForm.classList.remove('is-usa');

    });
}
