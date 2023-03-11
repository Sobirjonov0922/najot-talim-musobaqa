// Scroll To Top
let scrollToTop = document.querySelector('.scrollToTop')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    scrollToTop.classList.add('active')
  } else {
    scrollToTop.classList.remove('active')
  }
})
// Scroll To Top

// Nav Burger
let navBurger = document.querySelector('.nav__burger')

navBurger.addEventListener('click', function () {
  this.classList.toggle('active')
  body.classList.toggle('active')
})
// Nav Burger