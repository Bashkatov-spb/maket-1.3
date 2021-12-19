const btn = document.getElementById('button');
const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.menu__header--open');
const brands = document.querySelector('.brands');
new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2
    }  
  },
});

button.addEventListener('click', function() {
  menu.classList.add('open');

});

btnMenuOpen.addEventListener('click', function() {
  menu.classList.remove('open');  

});

window.addEventListener('resize', function() {
  if (window.outerWidth > 320) {
    document.querySelector('.swiper').classList.remove('swiper');
  } else if (window.outerWidth <= 320) {
    console.log('123');
  }
});

