/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const swiperNews1 = new Swiper(".news__slider-first", {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: ".news__btn-next-1",
      prevEl: ".news__btn-prev-1",
    },
    clickable: true,

    pagination: {
      el: ".news-pagination-1",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

// ---------------Tabs---------------
const newsTabs = new GraphTabs("newsTabs");
