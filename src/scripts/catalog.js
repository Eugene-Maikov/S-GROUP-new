"use strict";
document.addEventListener("DOMContentLoaded", () => {

  //Сортировка
  const handleCatalogFilter = () => {
    const filterBox = document.querySelector('.catalog-filter__action')
    const filterItem = document.querySelectorAll('.catalog-filter__item')
    const filterStatus = document.querySelector('.catalog-filter__status')
    let filterStatusText = ''

    // Открытие и закрытие списка
    filterBox.addEventListener('click', () => {
      filterBox.classList.toggle('active')
    })

    //Присваивание текста первому активному элементу
    filterItem.forEach((item) => {
      if (item.classList.contains('active')) {
        filterStatusText = item.textContent
      }
    })
    filterStatus.textContent = filterStatusText

    // Переключение между активными элементами
    const handleOption = (el) => {
      el = el.target

      if (el.closest(".catalog-filter__item")) {
        filterItem.forEach(function (el) {
          el.classList.remove("active")
        })
        el.closest(".catalog-filter__item").classList.add("active")
        if (el.closest(".catalog-filter__item").classList.contains('active')) {
          filterStatusText = el.textContent
        }
        filterStatus.textContent = filterStatusText
      }
    }
    document.addEventListener("click", handleOption)
  }

  // Открыть/закрыть элемент фильтра
  const handleGroupElements = () => {
    const filterGroupElements = document.querySelectorAll('.sidebar-filter__head')

    if (filterGroupElements) {
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

    if (add) {
      add.addEventListener('click', () => {
        counter++
        input.value = counter
      })
    }
    if (remove) {
      remove.addEventListener('click', () => {
        if (!counter <= 0) {
          counter--
          input.value = counter
        }
      })
    }

  }

  handleCatalogFilter()
  handleGroupElements()
  handleFilterModal()
  handleCounter()

  Fancybox.bind('["data-fancybox="gallery"]', {
    // Your custom options
  })


})


