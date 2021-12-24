const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const btnSpoiler = document.querySelector('.main__spoiler-btn');
const articleWrapper = document.querySelector('.main__article-wrapper');
const brandsWrapper = document.querySelector('.brands__wrapper');
const mainSpoilerArrow = document.querySelector('.main__spoiler-arrow');
const brandSpoilerBtn = document.querySelector('.brands__spoiler-btn');
const brandSpoilerArrow = document.querySelector('.brands__spoiler-arrow');
const brandsText = document.querySelector('.brands__show');
const repairSpoilerBtn = document.querySelector('.repair__spoiler-btn');
const repairSpoilerArrow = document.querySelector('.repair__spoiler-arrow');
const repairText = document.querySelector('.repair__show');
const menu = document.querySelector('.menu');
const brands = document.querySelector('.brands');
const pagination = document.querySelectorAll('.pagination__dot');
const brandsSlides = document.querySelectorAll('.brands__slide');
const containers = document.querySelectorAll('.container');



let swiper1 = new Swiper('.swiper', {
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
      slidesPerView: 1.25,
    },
    400: {
      slidesPerView: 1.5
    },
    500: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 2.3
    },
    700: {
      slidesPerView: 2.6
    }
  },
  slidesOffsetBefore: 16
});

let swiper2 = new Swiper('.repair__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // If we need pagination
  pagination: {
    el: '.repair__swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.25,
    },
    400: {
      slidesPerView: 1.5
    },
    500: {
      slidesPerView: 2
    },
    600: {
      slidesPerView: 2.3
    },
    700: {
      slidesPerView: 2.6
    }
  },
  slidesOffsetBefore: 16
});
let swiper3 = new Swiper('.price__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // If we need pagination
  pagination: {
    el: '.price__swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.15,
    },
    400: {
      slidesPerView: 1.4
    },
    500: {
      slidesPerView: 1.8
    },
    600: {
      slidesPerView: 2.1
    },
    700: {
      slidesPerView: 2.5
    }
  },
  slidesOffsetBefore: 8
});

btnOpen.addEventListener('click', function() {
  menu.classList.add('open');
  containers.forEach(elem => {
    elem.style.opacity = 0.04;
  });
});
btnClose.addEventListener('click', function() {
  menu.classList.remove('open');
  containers.forEach(elem => {
    elem.style.opacity = 1;
  });  
});

btnSpoiler.addEventListener('click', function() {
  articleWrapper.classList.toggle('open-spoiler');
  mainSpoilerArrow.classList.toggle('rotate-arrow');
});

brandSpoilerBtn.addEventListener('click', function() {
  document.querySelector('.swiper').classList.toggle('open-spoiler');
  brandSpoilerArrow.classList.toggle('rotate-arrow');
  if (brandsText.innerHTML == 'Скрыть') {
    brandsText.innerHTML = 'Показать всё';
  } else {
    brandsText.innerHTML = 'Скрыть';
  }
});
repairSpoilerBtn.addEventListener('click', function() {
  document.querySelector('.repair__swiper').classList.toggle('open-spoiler');
  repairSpoilerArrow.classList.toggle('rotate-arrow');
  if (repairText.innerHTML == 'Скрыть') {
    repairText.innerHTML = 'Показать всё';
  } else {
    repairText.innerHTML = 'Скрыть';
  }
});




function checkSize() {
  window.addEventListener('resize', function() {
    if (window.outerWidth > 767) {
      swiper1.destroy();
      swiper2.destroy();
      swiper3.destroy();
      
    } else if (window.outerWidth <= 767) {
      
    }
  });
  if (window.outerWidth > 767) {
    swiper1.destroy();
    swiper2.destroy();
    swiper3.destroy();
  } else {
    
  }
}

checkSize();
