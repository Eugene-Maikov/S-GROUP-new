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

  // ------- Валидация и отправка формы НЕ в модальном окне -------//
  const handleFormSubmitPage = (formItem) => {
    const form = document.querySelector(formItem)

    if (form) {
      const pristine = new Pristine(form)

      form.addEventListener("submit", (evt) => {
        evt.preventDefault()
        const valid = pristine.validate()
        if (valid) {
          evt.preventDefault()

          const formData = Object.fromEntries(new FormData(evt.target).entries())
          if (document.querySelector("input[name='fiz-phone']")) {
            formData["fiz-phone"] = formData["fiz-phone"].replace(/\D/g, "")
          }
          if (document.querySelector("input[name='entity-phone']")) {
            formData["entity-phone"] = formData["entity-phone"].replace(/\D/g, "")
          }
          delete formData["privacy-policy"]
          console.log(formData)
          // evt.target.submit()
        }
      })
    }
  }
  handleFormSubmitPage('form[name="ordering"]')
  handleFormSubmitPage('form[name="quick-order"]')

  // ---------------- Переключатель радио кнопок ----------------//
  const handleSwitchRadioButton = (block) => {
    if (document.querySelector(block)) {
      const radioWrap = document.querySelector(block)
      const arrRadio = radioWrap.querySelectorAll(".ordering__radio")

      arrRadio.forEach((itemRadio) => {
        itemRadio.addEventListener("click", (evt) => {
          arrRadio.forEach((el) => {
            el.checked = false
          })
          itemRadio.checked = true
        })
      })
    }
  }
  handleSwitchRadioButton(".js-delivery-method")
  handleSwitchRadioButton(".js-payment-method")
  handleSwitchRadioButton(".js-purchase-method")
  handleSwitchRadioButton(".js-entity-delivery-method")

  // --------------- Переключатель модального окна ---------------//
  const toggleModalWindow = () => {
    const inputOrder = document.querySelector(".js-modal-window")
    const inputPartner = document.querySelector(".js-partner")
    const modal = document.querySelector(".js-modal-quick-order")
    const overlay = document.querySelector(".overlay")
    const closeBtn = document.querySelector(".js-close")
    const form = document.querySelector(".js-form-quick-order")
    const pristine = new Pristine(form)

    inputOrder.addEventListener("change", (evt) => {
      evt.preventDefault()
      if ((inputOrder.checked = true)) {
        pristine.reset()
        modal.classList.add("active")
        overlay.classList.add("active")
        document.body.classList.add("no-scroll")
      }
    })

    overlay.addEventListener("click", (evt) => {
      evt.preventDefault()
      modal.classList.remove("active")
      overlay.classList.remove("active")
      document.body.classList.remove("no-scroll")
      inputOrder.checked = false
      inputPartner.checked = true
    })

    closeBtn.addEventListener("click", (evt) => {
      evt.preventDefault()
      modal.classList.remove("active")
      overlay.classList.remove("active")
      document.body.classList.remove("no-scroll")
      inputOrder.checked = false
      inputPartner.checked = true
    })

    if (window.screen.width > 767) {
      document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
          evt.preventDefault()
          modal.classList.remove("active")
          overlay.classList.remove("active")
          document.body.classList.remove("no-scroll")
          inputOrder.checked = false
          inputPartner.checked = true
        }
      })
    }
  }
  toggleModalWindow()
})
