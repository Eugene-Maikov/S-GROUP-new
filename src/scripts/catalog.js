"use strict";
document.addEventListener("DOMContentLoaded", () => {

  // Открыть/закрыть элемент фильтра
  const handleGroupElements = () => {
    const filterGroupElements = document.querySelectorAll('.sidebar-filter__head')

    if(filterGroupElements){
      filterGroupElements.forEach((el) => {
        el.addEventListener('click', () => {
          el.nextElementSibling.classList.toggle('active')
        })
      })
    }
  }

  // Всплывание фильтра на мобилке
  const handleFilterModal = () => {

    const filterModal = document.querySelector('.sidebar-filter')
    const filterButtonShow = document.querySelector('.catalog__filter-show')
    const filterButtonBack = document.querySelector('.sidebar-filter__back-btn')

    if (filterModal) {
      filterButtonShow.addEventListener('click', () => {
        filterModal.classList.add('active')
        document.body.classList.add("no-scroll")
      })
      filterButtonBack.addEventListener('click', () => {
        filterModal.classList.remove('active')
        document.body.classList.remove("no-scroll")
      })
    }
  }

  handleGroupElements()
  handleFilterModal()

  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  })



})


