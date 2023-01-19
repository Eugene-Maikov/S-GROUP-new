/* eslint-disable no-undef */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var swiperNewsFirst = new Swiper(".news__slider-first", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".news__next-first",
      prevEl: ".news__prev-first"
    },
    clickable: true,
    pagination: {
      el: ".news__pagination-first"
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      525: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  var swiperNewsSecond = new Swiper(".news__slider-second", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: ".news__next-second",
      prevEl: ".news__prev-second"
    },
    clickable: true,
    pagination: {
      el: ".news__pagination-second"
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      525: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  var swiperPartners = new Swiper(".partners__slider", {
    slidesPerView: 6,
    spaceBetween: 50,
    navigation: {
      nextEl: ".partners__next",
      prevEl: ".partners__prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      767: {
        spaceBetween: 37
      },
      1330: {
        slidesPerView: 6,
        spaceBetween: 60
      }
    }
  });
}); // ---------------Tabs---------------

var newsTabs = new GraphTabs("newsTabs");
//# sourceMappingURL=index.js.map
