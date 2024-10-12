const boronTypesSwiper = new Swiper(".boronTypes-slider", {
  // Настройки Swiper
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: ".botonTypes-right-arrow ",
    prevEl: ".botonTypes-left-arrow",
  },
  slidesPerView: 2,
  spaceBetween: 40,
  /* centeredSlides: true, */
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
  /* cssMode: true, */
  breakpoints: {
    // Настройки для разных размеров экрана

    320: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
  },
});
const applictationSwiper = new Swiper(".application-slider", {
  // Настройки Swiper
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: ".application-right-arrow",
    prevEl: ".application-left-arrow",
  },
  slidesPerView: 2.5,
  spaceBetween: 40,
  /* centeredSlides: true, */
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
  /* cssMode: true, */
  breakpoints: {
    // Настройки для разных размеров экрана

    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 1.5,
    },
    1150: {
      slidesPerView: 2.5,
    },
  },
});
