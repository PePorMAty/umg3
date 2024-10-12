const burgerOpen = document.querySelector(".burger-menu__open");
const burgerClose = document.querySelector(".burger-menu__close");

burgerOpen.addEventListener("click", () => {
  document.querySelector(".nav-list").classList.add("active");
  document.querySelector(".header-contacts").classList.add("active");
  document.querySelector(".burger-menu__open").classList.add("close");
  document.querySelector(".burger-menu__close").classList.add("open");
  document.querySelector("body").classList.add("no-scroll");
  document.querySelector(".header").classList.add("header-no-margin");
  document.querySelector(".header-nav").classList.add("header-no-border");
  document
    .querySelector(".header-container")
    .classList.add("container-no-padding");
});
burgerClose.addEventListener("click", () => {
  document.querySelector(".nav-list").classList.remove("active");
  document.querySelector(".header-contacts").classList.remove("active");
  document.querySelector(".burger-menu__open").classList.remove("close");
  document.querySelector(".burger-menu__close").classList.remove("open");
  document.querySelector("body").classList.remove("no-scroll");
  document.querySelector(".header").classList.remove("header-no-margin");
  document.querySelector(".header-nav").classList.remove("header-no-border");
  document
    .querySelector(".header-container")
    .classList.remove("container-no-padding");
});
