const hamburgerMenu = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".menu")

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active")
  menu.classList.toggle("active")
})
