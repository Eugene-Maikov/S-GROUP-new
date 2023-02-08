/* eslint-disable no-undef */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  // ---------------Tabs---------------
  const newsTabs = new GraphTabs("newsTabs");
  const contactsTabs = new GraphTabs("contactsTabs");
});


// ---------------Валидация---------------
const form = document.querySelector(".questions__form");
const inputEmail = document.querySelector(".js-input-email");
const inputCheckbox = document.querySelector(".js-input-checkbox");
const inputs = document.querySelectorAll(".rrr");

form.addEventListener('submit', (evt) => {

  //name, phone
  inputs.forEach((item) => {
    if (item.value === "") {
      item.classList.add("error");
      evt.preventDefault()
    } else {
      item.classList.remove("error");
    }
  })

  //email
  const re =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const isEmailValid = (value) => {
    return re.test(String(value).toLowerCase());
  }

  if (!isEmailValid(inputEmail.value)) {
    inputEmail.classList.add("error");
    evt.preventDefault()
  } else {
    inputEmail.classList.remove("error");
  }

  //checkbox
  if (!inputCheckbox.checked) {
    inputCheckbox.classList.add("error");
    evt.preventDefault()
  } else {
    inputCheckbox.classList.remove("error");
  }

  if (!inputs.value === "" && !inputEmail.value === "" && inputCheckbox.checked) {
    form.submit()
  }
})