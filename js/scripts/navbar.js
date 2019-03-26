// const body = document.body;
const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar__brand');
const navbarToggle = document.querySelector('.btn-navbar-toggle');
const navbarNavigation = document.querySelector('.navbar__navigation .main-navigation');
const navigationMobileMenu = document.querySelector('.main-navigation-mobile');
const navigationElements = [...document.querySelectorAll('[data-nav]:not(.mobile-navigation-link)')];
const heroOffset = document.querySelector('.hero-section .hero-content__item').offsetTop;

const toggleInverseMode = foo => {
    const action = foo ? 'add' : 'remove';

    navbar.classList[action]('navbar_inverse');
    navbarBrand.classList[action]('btn-brand_dark');
    navbarNavigation.classList[action]('main-navigation_inverse');
};

const toggleNavigationMenu = () => {
    body.classList.toggle('scroll-state');
    navbar.classList.toggle('navbar_transparent');
    navbarToggle.classList.toggle('active');
    navigationMobileMenu.classList.toggle('open');
};

navbarToggle.addEventListener('click', e => {
    e.preventDefault();

    toggleNavigationMenu();
});

navigationMobileMenu.addEventListener('click', e => {
    const currItem = e.target;
    const currItemData = currItem.getAttribute('data-nav');

    if (currItem.classList.contains('mobile-navigation-link')) {
        toggleNavigationMenu();

        setTimeout(() => {
            document.querySelector(`#${currItemData}`).scrollIntoView({
                block: "start",
                behavior: 'smooth'
            });
        }, 250)
    }
});

navigationElements.forEach(item => item.addEventListener('click', e => {
    e.stopPropagation();

    const currItem = e.currentTarget;
    const currItemData = currItem.getAttribute('data-nav');

    document.querySelector(`#${currItemData}`).scrollIntoView({
        block: "start",
        behavior: 'smooth'
    });
}));

// Setup our function to run on various events
const toggleNavbar = () => toggleInverseMode(window.scrollY > heroOffset - 50);

// Add our event listeners
window.addEventListener('load', toggleNavbar, false);
window.addEventListener('scroll', toggleNavbar, false);
