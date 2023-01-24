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

// --------------- Выбор города ---------------
//   const location = document.querySelector('.header__location')
//   const locationModal = document.querySelector('.location__modal')
//
//   location.addEventListener("click" , () => {
//     locationModal.classList.add('visible-location')
//     document.body.classList.add("no-scroll")
//   })

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

})

// --------------- Выбор локации ---------------
const filter = document.querySelector('.contacts__filter')
const overlay = document.querySelector('.contacts__overlay')
const contactsMobile = document.querySelectorAll('.contacts__mobile')
const filterTabs = document.querySelectorAll('.tabs__nav-item')

contactsMobile.forEach((tab) => {
  tab.addEventListener("click" , () =>{
    filter.classList.add('visible-filter')
    overlay.classList.add('visible-filter')
    document.body.classList.add("no-scroll")
  })
});
filterTabs.forEach((tab) => {
  tab.addEventListener("click" , () => {
    filter.classList.remove('visible-filter')
    overlay.classList.remove('visible-filter')
    document.body.classList.remove("no-scroll")
  })
});

