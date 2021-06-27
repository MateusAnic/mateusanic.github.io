'use strict';

new SimpleAnime();
// TypeWrite Titulo

function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 40 * i);
    });
}

const titulo = document.querySelector('.title');

if(titulo){
    typeWriter(titulo);
}

// Loading

const loader = document.querySelector(".loading");

window.addEventListener('load', vanish);

function vanish() {
    loader.classList.add('disppear');
}

/* Menu Hamburguer */

const btnMobile = document.querySelector('.nav-hamb');

function toggleMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);







