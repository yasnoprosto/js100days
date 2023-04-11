let number = document.querySelector('#number');
let btn = document.querySelector('#btn__generate');

let a = 0;


btn.addEventListener('click', (min, max) => {
    min = 0;
    max = 100;
    number.textContent = Math.floor(Math.random() * (max - min)) + min
})