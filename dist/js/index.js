/* eslint-disable no-undef */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // ---------------Tabs---------------
  var newsTabs = new GraphTabs("newsTabs");
  var contactsTabs = new GraphTabs("contactsTabs");
}); // ---------------Валидация---------------

var form = document.querySelector(".questions__form");
var inputEmail = document.querySelector(".js-input-email");
var inputCheckbox = document.querySelector(".js-input-checkbox");
var inputs = document.querySelectorAll(".rrr");
form.addEventListener('submit', function (evt) {
  //name, phone
  inputs.forEach(function (item) {
    if (item.value === "") {
      item.classList.add("error");
      evt.preventDefault();
    } else {
      item.classList.remove("error");
    }
  }); //email

  var re = /^(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+(\.(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+)*)|("(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+"))@(((?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S])+\.)+(?:(?![\t-\r "\(\),\.:-<>@\[\]\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])[\s\S]){2,})$/i;

  var isEmailValid = function isEmailValid(value) {
    return re.test(String(value).toLowerCase());
  };

  if (!isEmailValid(inputEmail.value)) {
    inputEmail.classList.add("error");
    evt.preventDefault();
  } else {
    inputEmail.classList.remove("error");
  } //checkbox


  if (!inputCheckbox.checked) {
    inputCheckbox.classList.add("error");
    evt.preventDefault();
  } else {
    inputCheckbox.classList.remove("error");
  }

  if (!inputs.value === "" && !inputEmail.value === "" && inputCheckbox.checked) {
    form.submit();
  }
});
//# sourceMappingURL=index.js.map
