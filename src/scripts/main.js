document.addEventListener("DOMContentLoaded", () => {
  // --------------- Mobile menu ---------------
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.mobile-menu')
  const close = document.querySelector('.mobile-menu__close')

  burger.addEventListener("click", () => {
    menu.classList.add('active')
    document.body.classList.add("no-scroll")
  })
  close.addEventListener("click", () => {
    menu.classList.remove('active')
    document.body.classList.remove("no-scroll")
  })


  // --------------- Mobile menu / выпадающий список ---------------
  // Выбор опций/сортировка
  const handleOption = (el) => {
    el = el.target;

    // открытие списков
    if (el.closest(".linkHasChild")) {
      document.querySelectorAll(".linkHasChild").forEach(function (el) {
        el.classList.remove("active")
      })
      el.closest(".linkHasChild").classList.add("active")
    }
  };
  document.addEventListener("click", handleOption);

  // --------------- Выбор города ---------------
  const filter = document.querySelector('.contacts__filter')
  const overlay = document.querySelector('.contacts__overlay')
  const contactsMobile = document.querySelectorAll('.contacts__mobile')
  const filterTabs = document.querySelectorAll('.tabs__nav-item')

  contactsMobile.forEach((tab) => {
    tab.addEventListener("click", () => {
      filter.classList.add('visible-filter')
      overlay.classList.add('visible-filter')
      document.body.classList.add("no-scroll")
    })
  })
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filter.classList.remove('visible-filter')
      overlay.classList.remove('visible-filter')
      document.body.classList.remove("no-scroll")
    })
  })

  // --------------- Mobile menu / Выбор города ---------------
  const locationBtn = document.querySelector('.location__button')
  const locationOverlay = document.querySelector('.location__overlay')
  const locationMobileBtn = document.querySelector('.mobile-menu__button')
  const locationModal = document.querySelector('.location__modal')
  const locationItems = document.querySelectorAll('.location__modal-item')

  locationBtn.addEventListener("click", () => {
    locationModal.classList.toggle('visible-location')
  })
  locationMobileBtn.addEventListener("click", () => {
    locationModal.classList.toggle('visible-location')
    locationOverlay.classList.toggle('visible-location-overlay')
  })

  locationItems.forEach((item) => {
    item.addEventListener('click', () => {
      locationBtn.innerHTML = item.innerHTML
      locationMobileBtn.innerHTML = item.innerHTML
      locationModal.classList.remove('visible-location')
      locationOverlay.classList.remove('visible-location-overlay')
    })
  })

  // --------------- Маска ввода номера телефона ---------------
  let phoneInputs = document.querySelectorAll("input[data-tel-input]");

  let getInputsNumbersValue = function (input) {
    return input.value.replace(/\D/g, "");
  };

// Обработка ввода
  let onPhoneInput = function (e) {
    let input = e.target;
    let inputNumbersValue = getInputsNumbersValue(input);
    let formattedInputValue = "";
    let selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = "");
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
      let firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      //Форматирование
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
  };

//  Удаление первой цифры
  let onPhoneKeyDown = function (e) {
    let input = e.target;
    if (e.keyCode === 8 && getInputsNumbersValue(input).length === 1) {
      input.value = "";
    }
    if (e.keyCode === "-") {
      input.value = "";
    }
  };

// Нельзя вставить букву из буфера обмена
  let onPhonePaste = function (e) {
    let pasted = e.clipboardData || window.clipboardData;
    let input = e.target;
    let inputNumbersValue = getInputsNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData("Text");

      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

// Перебор полей с телефонами
  for (let i = 0; i < phoneInputs.length; i++) {
    let input = phoneInputs[i];
    input.addEventListener("input", onPhoneInput);
    input.addEventListener("keydown", onPhoneKeyDown);
    input.addEventListener("paste", onPhonePaste);
  }

// ---------------Валидация---------------
  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateForm = (blockForm, blockEmail, blockCheckbox, blockInputs ) => {
    const form = document.querySelector(blockForm);
    const inputEmail = document.querySelector(blockEmail);
    const email = inputEmail.value
    const inputCheckbox = document.querySelector(blockCheckbox);
    const inputs = document.querySelectorAll(blockInputs);

    form.addEventListener('submit', (evt) => {

      inputs.forEach((item) => {
        if (item.value === "") {
          item.classList.add("error");
          evt.preventDefault()
        } else {
          item.classList.remove("error");
        }
      })

      if (!validateEmail(email)) {
        inputEmail.classList.add("error");
        evt.preventDefault()
      } else {
        inputEmail.classList.remove("error");
      }

      if (!inputCheckbox.checked) {
        inputCheckbox.classList.add("error");
        evt.preventDefault()
      } else {
        inputCheckbox.classList.remove("error");
      }

      if (!inputs.value === "" && !inputEmail.value === "" &&  inputCheckbox.checked) {
        form.submit()
      }
    })
  }
  validateForm(".questions__form", ".js-input-email", ".js-input-checkbox", ".rrr")


})








