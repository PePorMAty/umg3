const boronTypesSwiper = new Swiper(".typesSlider-slider", {
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: ".typesSlider-right-arrow ",
    prevEl: ".typesSlider-left-arrow",
  },
  slidesPerView: 2,
  spaceBetween: 40,
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
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

const boronTypesModileSwiper = new Swiper(".typesSlider-mobile", {
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: ".typesSlider-mobile-right-arrow",
    prevEl: ".typesSlider-mobile-left-arrow",
  },
  slidesPerView: 2,
  spaceBetween: 40,
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
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

const boronProcessingMobileSwiper = new Swiper(
  ".boronProcessingMobile-slider",
  {
    loop: true, // Бесконечная прокрутка
    navigation: {
      nextEl: ".boronProcessingMobile-right-arrow",
      prevEl: ".boronProcessingMobile-left-arrow",
    },
    slidesPerView: 2,
    spaceBetween: 40,
    initialSlide: 0,
    slideToClickedSlide: true,
    freeMode: true,
    breakpoints: {
      // Настройки для разных размеров экрана
      320: {
        slidesPerView: 1,
      },
      750: {
        slidesPerView: 2,
      },
    },
  }
);

const applictationSwiper = new Swiper(".application-slider", {
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: ".application-right-arrow",
    prevEl: ".application-left-arrow",
  },
  slidesPerView: 2.5,
  spaceBetween: 40,
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
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
const baseSwiper = new Swiper(".base-slider", {
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: ".base-right-arrow",
    prevEl: ".base-left-arrow",
  },
  slidesPerView: 1,
  spaceBetween: 40,
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
});

const baseModileSwiper = new Swiper(".base-slider-mobile", {
  loop: true, // Бесконечная прокрутка
  navigation: {
    nextEl: ".base-slider-mobile-right-arrow",
    prevEl: ".base-slider-mobile-left-arrow",
  },
  slidesPerView: 1,
  spaceBetween: 40,
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
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

const tableSwiper = new Swiper(".table-slider", {
  loop: true, // Бесконечная прокрутка
  pagination: {
    el: ".swiper-pagination",
    /* bulletClass: ".table-slider__bullet", */
  },
  slidesPerView: 1,
  spaceBetween: 40,
  initialSlide: 0,
  slideToClickedSlide: true,
  freeMode: true,
});
