"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 1; i <= 4; i++) {
    // сюда будем помещать drug-&-drop файлы (4)
    window["uploadDragFiles_" + i] = new Object();
  }

  document.querySelectorAll(".upload-file__wrapper").forEach(function (current_item, index) {
    var inputFile = current_item.querySelector(".upload-file__input"); // создаём массив файлов

    var fileList = []; /////////// Кнопка «Прикрепить файл» ///////////

    var textSelector = current_item.querySelector(".upload-file__text"); // Событие выбора файла(ов)

    inputFile.addEventListener("change", function () {
      var _fileList;

      (_fileList = fileList).push.apply(_fileList, _toConsumableArray(inputFile.files)); // вызов функции для каждого файла


      fileList.forEach(function (file) {
        uploadFile(file);
      });
    }); // Проверяем размер файлов и выводим название

    var uploadFile = function uploadFile(file) {
      // размер файла <5 Мб
      if (file.size > 5 * 1024 * 1024) {
        alert("Файл должен быть не более 5 МБ.");
        return;
      } // Показ загружаемых файлов


      if (file && fileList.length > 1) {
        if (fileList.length <= 4) {
          textSelector.textContent = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(fileList.length, " \u0444\u0430\u0439\u043B\u0430");
        } else {
          textSelector.textContent = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(fileList.length, " \u0444\u0430\u0439\u043B\u043E\u0432");
        }
      } else {
        textSelector.textContent = file.name;
      }

      fileList = [];
    }; /////////// Загрузка файлов при помощи «Drag-and-drop» ///////////
    // const dropZones = document.querySelectorAll(".upload-file__label");


    var dropZone = current_item.querySelector(".upload-file__label");
    var dropZoneText = current_item.querySelector(".upload-file__text");
    var maxFileSize = 5000000; // максимальный размер файла - 5 мб.
    // Проверка поддержки «Drag-and-drop»

    if (typeof window.FileReader == "undefined") {
      dropZone.textContent = "Drag&Drop Не поддерживается браузером!";
      dropZone.classList.add("error");
    } // Событие - перетаскивания файла


    dropZone.ondragover = function () {
      this.classList.add("hover");
      return false;
    }; // Событие - отмена перетаскивания файла


    dropZone.ondragleave = function () {
      this.classList.remove("hover");
      return false;
    }; // Событие - файл перетащили


    dropZone.addEventListener("drop", function (e) {
      e.preventDefault();

      _this.classList.remove("hover");

      _this.classList.add("drop");

      uploadDragFiles = e.dataTransfer.files[0]; // один файл
      // Проверка размера файла

      if (uploadDragFiles.size > maxFileSize) {
        dropZoneText.textContent = "Размер превышает допустимое значение!";

        _this.addClass("error");

        return false;
      } // Показ загружаемых файлов


      if (uploadDragFiles.length > 1) {
        if (uploadDragFiles.length <= 4) {
          dropZoneText.textContent = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(uploadDragFiles.length, " \u0444\u0430\u0439\u043B\u0430");
        } else {
          dropZoneText.textContent = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(uploadDragFiles.length, " \u0444\u0430\u0439\u043B\u043E\u0432");
        }
      } else {
        dropZoneText.textContent = e.dataTransfer.files[0].name;
      } // добавляем файл в объект "uploadDragFiles_i"


      window["uploadDragFiles_" + index] = uploadDragFiles;
    });
  });
});
//# sourceMappingURL=forms-work.js.map
