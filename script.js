const hamburger = document.querySelector(".hamburger")
const navMenu1 = document.querySelector(".nav-menu1")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu1.classList.toggle("active")
})