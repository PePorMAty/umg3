const burgerOpen = document.querySelector(".burger-menu__open");
const burgerClose = document.querySelector(".burger-menu__close");

const navList = document.querySelector(".nav-list");
const headerContacts = document.querySelector(".header-contacts");
const popup = document.querySelector(".popup");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".heade-nav");
const headerContainer = document.querySelector(".header-container");
const overlay = document.querySelector(".overlay");

const topForm = document.querySelector(".popup-top__form");
const orderForm = document.querySelector(".popup-order-form");

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

overlay.addEventListener("click", function (e) {
  popup.classList.remove("popup-active");
  overlay.classList.remove("overlay-active");
  header.classList.remove("blur");
  main.classList.remove("blur");
  footer.classList.remove("blur");
});
popup.addEventListener("click", function (e) {
  const topFormPopup = e.composedPath().includes(topForm);
  const orderFormPopup = e.composedPath().includes(orderForm);
  if (!topFormPopup && !orderFormPopup) {
    popup.classList.remove("popup-active");
    overlay.classList.remove("overlay-active");
    header.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
  }
});

const openPopup = () => {
  window.scrollTo({ top: 0 });
  topForm.classList.add("popup-top__form-active");
  popup.classList.add("popup-active");
  overlay.classList.add("overlay-active");
  header.classList.add("blur");
  main.classList.add("blur");
  footer.classList.add("blur");
};

const confirmOrder = () => {
  window.scrollTo({ top: 0 });
  topForm.classList.remove("popup-top__form-active");
  orderForm.classList.add("popup-order-form-active");
};

const oneMoreOrder = () => {
  window.scrollTo({ top: 0 });
  topForm.classList.add("popup-top__form-active");
  orderForm.classList.remove("popup-order-form-active");
};
