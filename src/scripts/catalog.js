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

  // Счетчик - 1 +
  const handleCounter = () => {
    const remove = document.querySelector('.single-card__counting-remove')
    const add = document.querySelector('.single-card__counting-add')
    const input = document.querySelector('.single-card__counting-number')

    let counter = 1

    add.addEventListener('click', () => {
      counter++
      input.value = counter
    })
    remove.addEventListener('click', () => {
      if(!counter <= 0) {
        counter--
        input.value = counter
      }
    })


  }

  handleGroupElements()
  handleFilterModal()
  handleCounter()

  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  })



})


