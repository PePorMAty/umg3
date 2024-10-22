const burgerOpen = document.querySelector(".burger-menu__open");
const burgerClose = document.querySelector(".burger-menu__close");
const navList = document.querySelector(".nav-list");
const headerContacts = document.querySelector(".header-contacts");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header-nav");
const headerContainer = document.querySelector(".header-container");

burgerOpen.addEventListener("click", () => {
  navList.classList.add("active");
  headerContacts.classList.add("active");
  burgerOpen.classList.add("close");
  burgerClose.classList.add("open");
  document.querySelector("body").classList.add("no-scroll");
  header.classList.add("header-no-margin");
  headerNav.classList.add("header-no-border");
  headerContainer.classList.add("container-no-padding");
});
burgerClose.addEventListener("click", () => {
  navList.classList.remove("active");
  headerContacts.classList.remove("active");
  burgerOpen.classList.remove("close");
  burgerClose.classList.remove("open");
  document.querySelector("body").classList.remove("no-scroll");
  header.classList.remove("header-no-margin");
  headerNav.classList.remove("header-no-border");
  headerContainer.classList.remove("container-no-padding");
});
