/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const swiperNewsFirst = new Swiper(".news__slider-first", {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
      nextEl: ".news__next-first",
      prevEl: ".news__prev-first",
    },

    pagination: {
      el: ".news__pagination-first",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      525: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const swiperNewsSecond = new Swiper(".news__slider-second", {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
      nextEl: ".news__next-second",
      prevEl: ".news__prev-second",
    },
    pagination: {
      el: ".news__pagination-second",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      525: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1330: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const swiperPartners = new Swiper(".partners__slider", {
    slidesPerView: 6,
    spaceBetween: 50,

    navigation: {
      nextEl: ".partners__next",
      prevEl: ".partners__prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      990: {
        spaceBetween: 37,
      },
      1330: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    },
  });
  const swiperReviews = new Swiper(".reviews__slider", {
    slidesPerView: 2,
    spaceBetween: 30,

    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
    pagination: {
      el: ".reviews__pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      767: {
        spaceBetween: 20,
      },
      1330: {
        spaceBetween: 30,
      },
    },
  });

  const swiperPeople = new Swiper(".people__slider", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 4.55,
      slideShadows: true,
    },
    pagination: {
      el: ".people__pagination",
    },
    breakpoints: {
      320: {
        coverflowEffect: {
          modifier: 1,
        },
      },
      525: {
        coverflowEffect: {
          modifier: 2,
        },
      },
      767: {
        coverflowEffect: {
          modifier: 5.70,
        },
      },
      1024: {
        coverflowEffect: {
          modifier: 9.3,
        },
      },
      1330: {
        coverflowEffect: {
          modifier: 5.75,
        },
      },
      1500: {
        coverflowEffect: {
          modifier: 4.55,
        },
      }
    },
  });
});