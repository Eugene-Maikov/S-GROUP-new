document.addEventListener("DOMContentLoaded", () => {

    const locationButton = document.querySelector(".location__button");
    const locationItem = document.querySelectorAll(".location__item");
    const locationModal = document.querySelector(".location");
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    const header = document.querySelector('header')

    locationButton.addEventListener('click', () => {
        locationModal.classList.add("visible")

        if (locationModal.classList.contains("visible")){
            html.classList.add("no-scroll")
            body.classList.add("mr-scroll")
            header.classList.add("pr-scroll")
        }
    })
    locationItem.forEach(item => {
        item.addEventListener('click', () => {
            locationModal.classList.toggle("visible")
            html.classList.remove("no-scroll")
            body.classList.remove("mr-scroll")
            header.classList.remove("pr-scroll")
        })
    })
})