const btn = document.getElementById('button');
const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.menu__header--open');
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    }
  }

});

button.addEventListener('click', function() {
  menu.classList.add('open');

});

btnMenuOpen.addEventListener('click', function() {
  menu.classList.remove('open');  

});

