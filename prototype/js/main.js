const card = document.querySelector(".card-inner")
const finish = document.querySelector(".finish")
const f = document.querySelector(".btn-f")
const gg = document.querySelector(".btn-gg")

card.addEventListener("click", function(e) {
    card.classList.toggle('is-flipped')
    finish.classList.toggle('is-clicked')
})