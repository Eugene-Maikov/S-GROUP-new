/* eslint-disable no-undef */
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // ---------------Tabs---------------
  var newsTabs = new GraphTabs("newsTabs");
  var contactsTabs = new GraphTabs("contactsTabs"); //Изменение размеров строки, при увеличении кол-ва текста

  var catalogTexts = document.querySelectorAll('.catalog__text');

  var switchPropertyText = function switchPropertyText(item) {
    if (window.screen.width > 1330) {
      item.style.fontSize = "15px";
      item.style.height = '65px';
      item.style.paddingLeft = '10px';
      item.style.paddingRight = '10px';
    }

    if (window.screen.width < 1330) {
      item.style.fontSize = "12px";
      item.style.height = '62px';
      item.style.paddingLeft = '10px';
      item.style.paddingRight = '10px';
    }

    if (window.screen.width < 767) {
      item.style.fontSize = "10px";
      item.style.height = '45px';
      item.style.paddingLeft = '10px';
      item.style.paddingRight = '10px';
    }
  };

  catalogTexts.forEach(function (item) {
    var string = item.innerHTML;

    if (string.length > 20) {
      switchPropertyText(item);
      window.addEventListener('resize', function () {
        switchPropertyText(item);
      }, true);
    }
  });
});
//# sourceMappingURL=index.js.map
