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
  }); // --------------- Mobile menu / выпадающий список ---------------
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

  document.addEventListener("click", handleOption); // --------------- Выбор города ---------------

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
  }); // --------------- Mobile menu / Выбор города ---------------

  var locationBtn = document.querySelector('.location__button');
  var locationOverlay = document.querySelector('.location__overlay');
  var locationMobileBtn = document.querySelector('.mobile-menu__button');
  var locationModal = document.querySelector('.location__modal');
  var locationItems = document.querySelectorAll('.location__modal-item');
  locationBtn.addEventListener("click", function () {
    locationModal.classList.toggle('visible-location');
  });
  locationMobileBtn.addEventListener("click", function () {
    locationModal.classList.toggle('visible-location');
    locationOverlay.classList.toggle('visible-location-overlay');
  });
  locationItems.forEach(function (item) {
    item.addEventListener('click', function () {
      locationBtn.innerHTML = item.innerHTML;
      locationMobileBtn.innerHTML = item.innerHTML;
      locationModal.classList.remove('visible-location');
      locationOverlay.classList.remove('visible-location-overlay');
    });
  }); // --------------- Маска ввода номера телефона ---------------

  var phoneInputs = document.querySelectorAll("input[data-tel-input]");

  var getInputsNumbersValue = function getInputsNumbersValue(input) {
    return input.value.replace(/\D/g, "");
  }; // Обработка ввода


  var onPhoneInput = function onPhoneInput(e) {
    var input = e.target;
    var inputNumbersValue = getInputsNumbersValue(input);
    var formattedInputValue = "";
    var selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }

      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      // Российский номер
      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }

      var firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " "; //Форматирование

      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      // Не российский номер
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  }; //  Удаление первой цифры


  var onPhoneKeyDown = function onPhoneKeyDown(e) {
    var input = e.target;

    if (e.keyCode === 8 && getInputsNumbersValue(input).length === 1) {
      input.value = "";
    }

    if (e.keyCode === "-") {
      input.value = "";
    }
  }; // Нельзя вставить букву из буфера обмена


  var onPhonePaste = function onPhonePaste(e) {
    var pasted = e.clipboardData || window.clipboardData;
    var input = e.target;
    var inputNumbersValue = getInputsNumbersValue(input);

    if (pasted) {
      var pastedText = pasted.getData("Text");

      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  }; // Перебор полей с телефонами


  for (var i = 0; i < phoneInputs.length; i++) {
    var input = phoneInputs[i];
    input.addEventListener("input", onPhoneInput);
    input.addEventListener("keydown", onPhoneKeyDown);
    input.addEventListener("paste", onPhonePaste);
  } // ---------------Валидация---------------


  var form = document.querySelector(".questions__form");
  var formInputs = document.querySelectorAll(".form__input");
  var inputEmail = document.querySelector(".js-input-email");
  var inputPhone = document.querySelector(".js-input-phone");
  var inputCheckbox = document.querySelector(".js-input-checkbox");

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateCountry(country) {
    var re = new RegExp(".co$");
    return re.test(String(country).toLowerCase());
  } // Проходит автоматически, тк маска не пропускает некорректные данные


  function validatePhone(phone) {
    return test(String(phone));
  } // Условия отправки


  form.onsubmit = function () {
    var emailVal = inputEmail.value;
    var phoneVal = inputPhone.value;
    var emptyInputs = Array.from(formInputs).filter(function (input) {
      return input.value === "";
    });
    formInputs.forEach(function (input) {
      if (input.value === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    if (emptyInputs.length !== 0) {
      console.log("inputs not filled");
      return false;
    }

    if (!validateEmail(emailVal)) {
      inputEmail.classList.add("error");
      return false;
    } else {
      inputEmail.classList.remove("error");
    }

    if (validateCountry(emailVal)) {
      inputEmail.classList.add("error");
      return false;
    } else {
      inputEmail.classList.remove("error");
    }

    if (!validatePhone(phoneVal)) {
      inputPhone.classList.add("error");
      return false;
    } else {
      inputPhone.classList.remove("error");
    }
  };
});
//# sourceMappingURL=main.js.map
