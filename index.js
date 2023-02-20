const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
)
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})

const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i) => {
  const itenNumber = movieLists[i].querySelectorAll("img").length
  let clickCounter = 0
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270)
    console.log(ratio)
    console.log(itenNumber)
    clickCounter++
    let value
    if (ratio === 6) {
      value = 6
    } else if (ratio > 2 && ratio < 6) {
      value = 5
    } else {
      value = 4
    }
    if (itenNumber - (4 + clickCounter) - (ratio - value) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 320
      }px)`
    } else {
      movieLists[i].style.transform = "translateX(0)"
      clickCounter = 0
    }
  })
})
