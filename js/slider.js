// Slider
const newsSwiper = new Swiper(".news-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1140: {
      slidesPerView: 3,
    }
  },
});

const teamSwiper = new Swiper(".team-swiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1140: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    }
  },
});
// Slider