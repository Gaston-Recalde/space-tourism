const navOpen = document.querySelector('.icon__open');
const navClose = document.querySelector('.icon__close');
const nav = document.querySelector('.nav__responsive');

navOpen.addEventListener('click', () => {
    navOpen.style.display = 'none';
    navClose.style.display = 'inline-block';
    nav.classList.add('nav__responsive-active');
});

navClose.addEventListener('click', () => {
    navOpen.style.display = 'inline-block';
    navClose.style.display = 'none';
    nav.classList.remove('nav__responsive-active');
});

if(window.innerWidth > 767){
    nav.classList.remove('nav__responsive-active');
};