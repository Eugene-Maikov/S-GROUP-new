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
    pagination: {
      el: ".news__pagination-first",
      clickable: true
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
    pagination: {
      el: ".news__pagination-second",
      clickable: true
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
    // slidesPerView: 6,
    spaceBetween: 50,
    loop: true,
    speed: 1000,
    slidesPerView: 6,
    autoplay: {
      enabled: true,
      delay: false
    },
    navigation: {
      nextEl: ".partners__next",
      prevEl: ".partners__prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      990: {
        spaceBetween: 37
      },
      1330: {
        slidesPerView: 6,
        spaceBetween: 60
      }
    }
  });
  var swiperReviews = new Swiper(".reviews__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev"
    },
    pagination: {
      el: ".reviews__pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      767: {
        spaceBetween: 20
      },
      1330: {
        spaceBetween: 30
      }
    }
  });
  var swiperPeople = new Swiper(".people__slider", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheel: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    coverflowEffect: {
      rotate: 0,
      slideShadows: true
    },
    navigation: {
      nextEl: ".people__next",
      prevEl: ".people__prev"
    },
    pagination: {
      el: ".people__pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        coverflowEffect: {
          modifier: 3,
          depth: 100,
          stretch: 0
        }
      },
      525: {
        coverflowEffect: {
          modifier: 4,
          depth: 90,
          stretch: 20
        }
      },
      700: {
        coverflowEffect: {
          modifier: 5,
          depth: 90,
          stretch: 25
        }
      },
      750: {
        coverflowEffect: {
          modifier: 8,
          depth: 34,
          stretch: 19
        }
      },
      830: {
        coverflowEffect: {
          modifier: 11,
          depth: 40,
          stretch: 20
        }
      },
      860: {
        coverflowEffect: {
          modifier: 10,
          depth: 30,
          stretch: 25
        }
      },
      910: {
        coverflowEffect: {
          modifier: 10,
          depth: 20,
          stretch: 25
        }
      },
      990: {
        coverflowEffect: {
          modifier: 11,
          depth: 20,
          stretch: 21
        }
      },
      1330: {
        coverflowEffect: {
          modifier: 12.5,
          depth: 30,
          stretch: 21
        }
      },
      1500: {
        coverflowEffect: {
          modifier: 9.2,
          depth: 40,
          stretch: 21
        }
      }
    }
  });
});
//# sourceMappingURL=sliders.js.map
