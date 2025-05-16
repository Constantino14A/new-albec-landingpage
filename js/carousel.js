const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper1-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper1-next',
    prevEl: '.swiper1-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper2-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper2-next',
    prevEl: '.swiper2-prev',
  },
});

// swiper 4 (asesores)
var swiper3 = new Swiper('.swiper3', {
  loop: true,
  /* loopFillGroupWithBlank: true, */
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1000: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  },
  spaceBetween: 5,
  pagination: {
    el: ".swiper3-pagination",
    clickable: true,
  },
});

// swiper 4 (testimonios)
var swiper4 = new Swiper(".swiperTestimonios", {
  effect: "cards",
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiperTestimonio-next',
    prevEl: '.swiperTestimonio-prev',
  },
});

// swiper 5 (swiper de flayers junto con formulario de contacto en el index)
const swiper5 = new Swiper('.swiper5', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper5-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper5-next',
    prevEl: '.swiper5-prev',
  },
});