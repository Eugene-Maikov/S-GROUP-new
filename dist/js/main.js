"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // --------------- Mobile menu ---------------
  var burger = document.querySelector('.header__burger');
  var menu = document.querySelector('.mobile-menu');
  var close = document.querySelector('.mobile-menu__close');
  burger.addEventListener("click", function () {
    menu.classList.add('active');
    document.body.classList.add("no-scroll");
  });
  close.addEventListener("click", function () {
    menu.classList.remove('active');
    document.body.classList.remove("no-scroll");
  }); // --------------- Выбор города ---------------
  //   const location = document.querySelector('.header__location')
  //   const locationModal = document.querySelector('.location__modal')
  //
  //   location.addEventListener("click" , () => {
  //     locationModal.classList.add('visible-location')
  //     document.body.classList.add("no-scroll")
  //   })
  // --------------- Mobile menu / выпадающий список ---------------
  // Выбор опций/сортировка

  var handleOption = function handleOption(el) {
    el = el.target; // открытие списков

    if (el.closest(".linkHasChild")) {
      document.querySelectorAll(".linkHasChild").forEach(function (el) {
        el.classList.remove("active");
      });
      el.closest(".linkHasChild").classList.add("active");
    }
  };

  document.addEventListener("click", handleOption);
}); // --------------- Выбор локации ---------------

var filter = document.querySelector('.contacts__filter');
var overlay = document.querySelector('.contacts__overlay');
var contactsMobile = document.querySelectorAll('.contacts__mobile');
var filterTabs = document.querySelectorAll('.tabs__nav-item');
contactsMobile.forEach(function (tab) {
  tab.addEventListener("click", function () {
    filter.classList.add('visible-filter');
    overlay.classList.add('visible-filter');
    document.body.classList.add("no-scroll");
  });
});
filterTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    filter.classList.remove('visible-filter');
    overlay.classList.remove('visible-filter');
    document.body.classList.remove("no-scroll");
  });
});
//# sourceMappingURL=main.js.map
