"use strict";
document.addEventListener("DOMContentLoaded", () => {

  const filterGroupElements = document.querySelectorAll('.sidebar-filter__head')

  // Открыть/закрыть элемент фильтра
  filterGroupElements.forEach((el) => {
    el.addEventListener('click', () => {
      el.nextElementSibling.classList.toggle('active')
    })
  })

  // Всплывание фильтра на мобилке
  const filterModal = document.querySelector('.sidebar-filter')
  const filterButtonShow = document.querySelector('.catalog__filter-show')
  const filterButtonBack = document.querySelector('.sidebar-filter__back-btn')

  filterButtonShow.addEventListener('click', () => {
    filterModal.classList.add('active')
    document.body.classList.add("no-scroll")
  })
  filterButtonBack.addEventListener('click', () => {
    filterModal.classList.remove('active')
    document.body.classList.remove("no-scroll")
  })
})


