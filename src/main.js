import './css/style.css'
const navToggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', (event) => {
    event.preventDefault();

    navToggle.classList.toggle('active');
    nav.classList.toggle('active');

});


