const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar-menu'); 

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});
