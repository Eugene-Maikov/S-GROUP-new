/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // slider big projects
  const sliderProjectsBig = new Swiper(".projects__slider-big", {
    slidesPerView: 1,
    speed: 500,
    loopedSlides: 1,
    loop: false,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    thumbs: {
      swiper: sliderProjectsMini,
    },
  });

  // slider mini projects
  const sliderProjectsMini = new Swiper(".projects__slider-mini", {
    slidesPerView: 4,
    loopedSlides: 4,
    loop: false,
    breakpoints: {
      320: {
        slidesPerView: 1.4,
      },
      480: {
        slidesPerView: 2.1,
      },
      768: {
        slidesPerView: 2.6,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  // slider news
  const sliderNews = new Swiper(".news__item-wrap", {
    slidesPerView: 3,
    loopedSlides: 4,
    loop: false,
    navigation: {
      nextEl: ".nav-next",
      prevEl: ".nav-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
      },
      375: {
        slidesPerView: 1.4,
      },
      385: {
        slidesPerView: 1.5,
      },
      400: {
        slidesPerView: 1.6,
      },
      420: {
        slidesPerView: 1.7,
      },
      480: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 2.6,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3.1,
      },
    },
  });
});
