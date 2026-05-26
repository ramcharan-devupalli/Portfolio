let lastScrollPosition = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }

    lastScrollPosition = currentScrollPosition;
});