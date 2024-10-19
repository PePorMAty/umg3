const popup = document.querySelector(".popup");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const overlay = document.querySelector(".overlay");
const topForm = document.querySelector(".popup-top__form");
const orderForm = document.querySelector(".popup-order-form");

overlay.addEventListener("click", function (e) {
  popup.classList.remove("popup-active");
  overlay.classList.remove("overlay-active");
  header.classList.remove("blur");
  main.classList.remove("blur");
  footer.classList.remove("blur");
  orderForm.classList.remove("popup-order-form-active");
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
    orderForm.classList.remove("popup-order-form-active");
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
