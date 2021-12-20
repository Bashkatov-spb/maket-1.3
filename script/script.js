const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const btnSpoiler = document.querySelector('.main__spoiler-btn');
const articleWrapper = document.querySelector('.main__article-wrapper');
const brandsWrapper = document.querySelector('.brands__wrapper');
const mainSpoilerArrow = document.querySelector('.main__spoiler-arrow');
const brandSpoilerBtn = document.querySelector('.brands__spoiler-btn');
const brandSpoilerArrow = document.querySelector('.brands__spoiler-arrow');
const brandsText = document.querySelector('.brands__show');
const menu = document.querySelector('.menu');
const brands = document.querySelector('.brands');
const pagination = document.querySelectorAll('.pagination__dot');
const brandsSlides = document.querySelectorAll('.brands__slide');



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

btnOpen.addEventListener('click', function() {
  menu.classList.add('open');
});

btnClose.addEventListener('click', function() {
  menu.classList.remove('open');  
});

btnSpoiler.addEventListener('click', function() {
  articleWrapper.classList.toggle('open-spoiler');
  mainSpoilerArrow.classList.toggle('rotate-arrow');
});

brandSpoilerBtn.addEventListener('click', function() {
  brandsWrapper.classList.toggle('open-spoiler');
  brandSpoilerArrow.classList.toggle('rotate-arrow');
  if (brandsText.innerHTML == 'Скрыть') {
    brandsText.innerHTML = 'Показать всё';
  } else {
    brandsText.innerHTML = 'Скрыть';
  }
});

function searchIndex(array, elem) {
 for(let i = 0; i < array.length; i++) {
   if (array[i] == elem) {
    return i;
   }
 }
}

pagination.forEach(elem => {
  elem.addEventListener('click', function() {
    if (elem.classList.value == 'pagination__dot pagination__dot--active') {
      searchIndex(pagination, elem);
    }
    for (let i = 0; i < pagination.length; i++) {
      pagination[i].classList.remove('pagination__dot--active');
    }
    elem.classList.add('pagination__dot--active');
    
  });
});

function translate(i) {

}

function checkSize() {
  window.addEventListener('resize', function() {
    if (window.outerWidth > 320) {
      document.querySelector('.swiper').classList.add('hide');
      brands.classList.remove('hide');
    } else if (window.outerWidth <= 320) {
      document.querySelector('.swiper').classList.remove('hide');
      brands.classList.add('hide');
    }
  });
  if (window.outerWidth > 320) {
    document.querySelector('.swiper').classList.add('hide');
    brands.classList.remove('hide');
  } else if (window.outerWidth <= 320) {
    document.querySelector('.swiper').classList.remove('hide');
    brands.classList.add('hide');
  }
}

checkSize();
