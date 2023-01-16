"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var delegate = function delegate(el) {
    el = el.target;
    var header = document.querySelector(".header");
    var overlay = document.querySelector(".overlay");
    var dropDownMenu = document.querySelector(".header__dd-menu"); // - обертка выпадающего меню;

    var iconMenu = document.querySelector(".header__mobile-menu"); // - икнока бургера;

    var searchForm = document.querySelector(".header__search-from"); // - форма поиска;

    var searchInput = document.querySelector(".js-search-input"); // - инпут поиска;

    var searchOptions = document.querySelector(".search-suggestions"); // - обертка вывода поисковых запросов;

    var btn = document.querySelector(".search-suggestions__btn"); // - кнопка показать еще в форме поиска;
    // open dropdown menu

    if (el.closest(".header__dd-item") && !el.closest(".header__dd-item.active")) {
      document.querySelectorAll(".header__dd-item").forEach(function (el) {
        el.classList.remove("active");
      });
      el.closest(".header__dd-item").classList.add("active");
    } else if (el.closest(".header__dd-item") && !el.closest(".header__dd-list")) {
      el.closest(".header__dd-item").classList.remove("active");
    }

    if (!el.closest(".header__dd-item")) {
      document.querySelectorAll(".header__dd-item").forEach(function (el) {
        el.classList.remove("active");
      });
    }

    if (el.closest(".overlay")) {
      document.querySelector(".header__dd-menu").classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
      document.querySelector(".header").classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.querySelector(".header__mobile-menu").classList.remove("active");
      searchForm.classList.remove("active");
      searchInput.value = "";
    } // open search form


    if (el.closest(".js-search")) {
      searchForm.classList.add("active");
      document.querySelector(".overlay").classList.add("active");
      document.querySelector(".header__mobile-menu").classList.remove("active");
      document.querySelector(".header__dd-menu").classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.querySelector(".header").classList.remove("active");
    } // clear search form


    if (el.closest(".close-btn-wrap")) {
      searchInput.value = "";
      searchInput.focus();
    } // show more search options


    if (el.closest(".search-suggestions__show-more")) {
      searchOptions.classList.toggle("active");
      btn.innerText = btn.innerText === "показать ещё +" ? "свернуть" : "показать ещё +";
    } // burger menu


    if (el.closest(".header__mobile-wrap")) {
      dropDownMenu.classList.toggle("active");
      iconMenu.classList.toggle("active");
      header.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    }

    if (document.querySelector(".header__search-from").classList.contains("active") && el.closest(".header__mobile-menu")) {
      document.querySelector(".header__search-from").classList.remove("active");
      document.querySelector(".overlay").classList.add("active");
    }
  };

  document.addEventListener("click", delegate); // fixed caps on scroll

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");

    if (window.pageYOffset > 400) {
      header.classList.add("_show");
    } else {
      header.classList.remove("_show");
    }
  }); // phone mask

  var mask = function mask(input) {
    var matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = input.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    input.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
  };

  var number = document.getElementById("footer-number");
  number.addEventListener("click", function () {
    number.addEventListener("input", mask.bind(null, number), false);
    number.addEventListener("focus", mask.bind(null, number), false);
    number.addEventListener("blur", mask.bind(null, number), false);
  }); // Submitting a form

  var handleSubmittingForm = function handleSubmittingForm(form, input, span) {
    var formFooter = document.querySelector(form);
    var inputPhone = document.querySelector(input);
    var spanResult = document.querySelector(span);
    formFooter.addEventListener("submit", function (el) {
      if (inputPhone.value === "") {
        el.preventDefault();
        inputPhone.classList.add("not-filled");
        spanResult.innerText = "необходимо заполнить поле";
      } else if (inputPhone.value.length < 18) {
        el.preventDefault();
        inputPhone.classList.add("not-filled");
        spanResult.innerText = "поле заполнено некорректно";
      } else {
        inputPhone.classList.remove("not-filled");
        spanResult.innerText = "";
      }
    });
  };

  handleSubmittingForm(".footer__form-feedback", ".footer__form-input", ".input-submiting"); // Закрытие модальных окон

  var closingPopup = function closingPopup(el) {
    el = el.target;

    if (el.closest(".close-popup")) {
      document.body.classList.remove("no-scroll");
      document.querySelector(".overlay").classList.remove("active");
      document.querySelector(".popup").classList.remove("active");
    }
  };

  document.addEventListener("click", closingPopup);
});
//# sourceMappingURL=main.js.map
