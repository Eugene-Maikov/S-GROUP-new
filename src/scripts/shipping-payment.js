"use strict"
document.addEventListener("DOMContentLoaded", () => {
  // -------------------------- Табы --------------------------//
  const handleTabs = (section, buttons, points, tabsClass) => {
    const tabs = document.querySelector(section)
    const btns = tabs.querySelectorAll(buttons)
    const items = tabs.querySelectorAll(points)

    function change(arr, i) {
      arr.forEach(function (item) {
        item.forEach(function (i) {
          i.classList.remove(tabsClass)
        })
        item[i].classList.add(tabsClass)
      })
    }

    var _loop = function _loop(i) {
      btns[i].addEventListener("click", function () {
        change([btns, items], i)
      })
    }

    for (var i = 0; i < btns.length; i++) {
      _loop(i)
    }
  }
  handleTabs(".tabs-container", ".js-tabs-btn", ".tabs-container__item", "is-active")

  // ------------------ Выбор опций/сортировка ------------------//
  if (document.querySelector(".js-sort-btn")) {
    const handleOrdersOption = (el) => {
      el = el.target
      // list opening
      if (el.closest(".js-sort-btn")) {
        document.querySelectorAll(".js-sort-btn").forEach((el) => {
          el.classList.remove("active")
        })
        el.closest(".js-sort-btn").classList.add("active")
      }

      if (el.closest(".js-sort-list")) {
        const allEl = el.closest(".js-sort-list").querySelectorAll(".js-sort-item")
        allEl.forEach((listItem) => {
          listItem.classList.remove("active")
        })
      }
      // substitution of the selected text
      if (el.classList.contains("js-sort-item")) {
        el.classList.add("active")
        el.closest(".js-sort-box").querySelector(".js-sort-btn").setAttribute("value", el.innerText)
      }
      // list closure
      if (!el.closest(".js-sort-btn")) {
        document.querySelectorAll(".js-sort-btn").forEach((el) => {
          el.classList.remove("active")
        })
      }
    }

    document.addEventListener("click", handleOrdersOption)
  }

    // --------------- Открытие закрытие аккардиона ---------------//
    const handleInfoHideShowBlock = (el) => {
      el = el.target
  
      if (el.closest(".js-item") && !el.closest(".js-item.active")) {
        let scrollHeight = el.closest(".js-item")
        el.closest(".js-item").classList.add("active")
        scrollHeight.querySelector(".js-desc").style.maxHeight =
          scrollHeight.querySelector(".js-desc").scrollHeight + "px"
      } else if (el.closest(".js-item") && !el.closest(".js-desc")) {
        el.closest(".js-item").classList.remove("active")
        let scrollHeight = el.closest(".js-item")
        scrollHeight.querySelector(".js-desc").style.maxHeight = null
      }
    }
    document.addEventListener("click", handleInfoHideShowBlock)
})
