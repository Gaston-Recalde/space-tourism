const navOpen = document.querySelector('.icon__open');
const navClose = document.querySelector('.icon__close');
const nav = document.querySelector('.nav__responsive');
// const liElements = document.querySelectorAll('.nav__ul li');

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

// liElements.forEach(li => {
//     li.addEventListener('click', function() {
//         liElements.forEach(li => {
//             li.classList.remove('active');
//         });
//         this.classList.add('active');
//     });
// });

// liElements.forEach(li => {
//     li.addEventListener('click', () => {
//         liElements.forEach(li => {
//             li.classList.remove('active');
//         });
//         li.classList.add('active');
//     });
// });

if(window.innerWidth > 767){
    nav.classList.remove('nav__responsive-active');
};