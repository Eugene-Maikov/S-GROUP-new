"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var locationButton = document.querySelector(".location__button");
  var locationItem = document.querySelectorAll(".location__item");
  var locationModal = document.querySelector(".location");
  var html = document.querySelector('html');
  var body = document.querySelector('body');
  var header = document.querySelector('header');
  locationButton.addEventListener('click', function () {
    locationModal.classList.add("visible");

    if (locationModal.classList.contains("visible")) {
      html.classList.add("no-scroll");
      body.classList.add("mr-scroll");
      header.classList.add("pr-scroll");
    }
  });
  locationItem.forEach(function (item) {
    item.addEventListener('click', function () {
      locationModal.classList.toggle("visible");
      html.classList.remove("no-scroll");
      body.classList.remove("mr-scroll");
      header.classList.remove("pr-scroll");
    });
  });
});
//# sourceMappingURL=main.js.map
