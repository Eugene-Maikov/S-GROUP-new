"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const delegate = (el) => {
    el = el.target;
    const header = document.querySelector(".header");
    const overlay = document.querySelector(".overlay");
    const dropDownMenu = document.querySelector(".header__dd-menu"); // - обертка выпадающего меню;
    const iconMenu = document.querySelector(".header__mobile-menu"); // - икнока бургера;
    const searchForm = document.querySelector(".header__search-from"); // - форма поиска;
    const searchInput = document.querySelector(".js-search-input"); // - инпут поиска;
    const searchOptions = document.querySelector(".search-suggestions"); // - обертка вывода поисковых запросов;
    const btn = document.querySelector(".search-suggestions__btn"); // - кнопка показать еще в форме поиска;

    // open dropdown menu
    if (el.closest(".header__dd-item") && !el.closest(".header__dd-item.active")) {
      document.querySelectorAll(".header__dd-item").forEach((el) => {
        el.classList.remove("active");
      });
      el.closest(".header__dd-item").classList.add("active");
    } else if (el.closest(".header__dd-item") && !el.closest(".header__dd-list")) {
      el.closest(".header__dd-item").classList.remove("active");
    }
    if (!el.closest(".header__dd-item")) {
      document.querySelectorAll(".header__dd-item").forEach((el) => {
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
    }

    // open search form
    if (el.closest(".js-search")) {
      searchForm.classList.add("active");
      document.querySelector(".overlay").classList.add("active");
      document.querySelector(".header__mobile-menu").classList.remove("active");
      document.querySelector(".header__dd-menu").classList.remove("active");
      document.body.classList.remove("no-scroll");
      document.querySelector(".header").classList.remove("active");
    }

    // clear search form
    if (el.closest(".close-btn-wrap")) {
      searchInput.value = "";
      searchInput.focus();
    }

    // show more search options
    if (el.closest(".search-suggestions__show-more")) {
      searchOptions.classList.toggle("active");
      btn.innerText = btn.innerText === "показать ещё +" ? "свернуть" : "показать ещё +";
    }

    // burger menu
    if (el.closest(".header__mobile-wrap")) {
      dropDownMenu.classList.toggle("active");
      iconMenu.classList.toggle("active");
      header.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("no-scroll");
    }

    if (
      document.querySelector(".header__search-from").classList.contains("active") &&
      el.closest(".header__mobile-menu")
    ) {
      document.querySelector(".header__search-from").classList.remove("active");
      document.querySelector(".overlay").classList.add("active");
    }
  };
  document.addEventListener("click", delegate);

  // fixed caps on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.pageYOffset > 400) {
      header.classList.add("_show");
    } else {
      header.classList.remove("_show");
    }
  });

  // phone mask
  const mask = (input) => {
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = input.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    input.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
  };
  let number = document.getElementById("footer-number");

  number.addEventListener("click", () => {
    number.addEventListener("input", mask.bind(null, number), false);
    number.addEventListener("focus", mask.bind(null, number), false);
    number.addEventListener("blur", mask.bind(null, number), false);
  });

  // Submitting a form
  const handleSubmittingForm = (form, input, span) => {
    const formFooter = document.querySelector(form);
    const inputPhone = document.querySelector(input);
    const spanResult = document.querySelector(span);

    formFooter.addEventListener("submit", (el) => {
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
  handleSubmittingForm(".footer__form-feedback", ".footer__form-input", ".input-submiting");

  // Закрытие модальных окон
  const closingPopup = (el) => {
    el = el.target;
    if (el.closest(".close-popup")) {
      document.body.classList.remove("no-scroll");
      document.querySelector(".overlay").classList.remove("active");
      document.querySelector(".popup").classList.remove("active");
    }
  };
  document.addEventListener("click", closingPopup);
});
