const btn = document.getElementById('button');
const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.menu__header--open');

button.addEventListener('click', function() {
  menu.classList.add('open');

});

btnMenuOpen.addEventListener('click', function() {
  menu.classList.remove('open');

});