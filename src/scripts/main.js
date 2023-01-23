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



  // ---------------Address maps---------------
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map-1", {
          center: [56.304903, 43.992027], zoom: 14,
        },
        {
          searchControlProvider: "yandex#search",
        }), // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="background: #fff; display: flex; padding: 5px 10px; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); width:150px; height: 35px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 14px;">$[properties.iconContent]</div>'),
      myPlacemarkWithContent = new ymaps.Placemark([56.310483, 43.992027], {
        iconContent: "ул. Костина, 6к1",
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent", // Своё изображение иконки метки.
        iconImageHref: "../assets/img/location.png", // Размеры метки.
        iconImageSize: [42, 60], // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24], // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [60, 10], // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      });

    myMap.geoObjects.add(myPlacemarkWithContent);
  });
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map-2", {
          center: [56.304903, 43.992027], zoom: 14,
        },
        {
          searchControlProvider: "yandex#search",
        }), // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="padding: 5px 10px; background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); width:150px; height: 35px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 14px;">$[properties.iconContent]</div>'),
      myPlacemarkWithContent = new ymaps.Placemark([56.310483, 43.992027], {
        iconContent: "ул. Коминтерна, 39 лит С7",
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent", // Своё изображение иконки метки.
        iconImageHref: "../assets/img/location.png", // Размеры метки.
        iconImageSize: [42, 60], // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24], // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [60, 10], // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      });

    myMap.geoObjects.add(myPlacemarkWithContent);
  });
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map-3", {
          center: [56.304903, 43.992027], zoom: 14,
        },
        {
          searchControlProvider: "yandex#search",
        }), // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="padding: 5px 10px; background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); width:150px; height: 35px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 14px;">$[properties.iconContent]</div>'),
      myPlacemarkWithContent = new ymaps.Placemark([56.310483, 43.992027], {
        iconContent: "ул. Ларина 27/4\n" +
          "(павильон 4/2)",
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent", // Своё изображение иконки метки.
        iconImageHref: "../assets/img/location.png", // Размеры метки.
        iconImageSize: [42, 60], // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24], // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [60, 10], // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      });

    myMap.geoObjects.add(myPlacemarkWithContent);
  });
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map-4", {
          center: [56.304903, 43.992027], zoom: 14,
        },
        {
          searchControlProvider: "yandex#search",
        }), // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="padding: 5px 10px; background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); width:150px; height: 35px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 14px;">$[properties.iconContent]</div>'),
      myPlacemarkWithContent = new ymaps.Placemark([56.310483, 43.992027], {
        iconContent: "ул. Новороссийская, 240 Ж",
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent", // Своё изображение иконки метки.
        iconImageHref: "../assets/img/location.png", // Размеры метки.
        iconImageSize: [42, 60], // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24], // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [60, 10], // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      });

    myMap.geoObjects.add(myPlacemarkWithContent);
  });

})

