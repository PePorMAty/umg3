const popup = document.querySelector(".popup");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const overlay = document.querySelector(".overlay");
const detailsForm = document.querySelector(".popup-details__form");
const orderForm = document.querySelector(".popup-order-form");
const contactForm = document.querySelector(".popup-contact__form");

const obj = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  material: "",
  size: "",
  blueprint: "",
  quantity: 0,
  map: "",
  address: {
    city: "",
    street: "",
    house: "",
    office: "",
  },
};

overlay.addEventListener("click", function (e) {
  popup.classList.remove("popup-active");
  overlay.classList.remove("overlay-active");
  header.classList.remove("blur");
  main.classList.remove("blur");
  footer.classList.remove("blur");
  orderForm.classList.remove("popup-order-form-active");
});
popup.addEventListener("click", function (e) {
  const detailsFormPopup = e.composedPath().includes(detailsForm);
  const orderFormPopup = e.composedPath().includes(orderForm);
  const contactFormPopup = e.composedPath().includes(contactForm);
  if (!detailsFormPopup && !orderFormPopup && !contactFormPopup) {
    popup.classList.remove("popup-active");
    overlay.classList.remove("overlay-active");
    header.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
    orderForm.classList.remove("popup-order-form-active");
    contactForm.classList.remove("popup-contact__form-active");
  }
});

const openPopup = () => {
  window.scrollTo({ top: 0 });
  detailsForm.classList.add("popup-details__form-active");
  popup.classList.add("popup-active");
  overlay.classList.add("overlay-active");
  header.classList.add("blur");
  main.classList.add("blur");
  footer.classList.add("blur");
};

const moveToOrderForm = () => {
  const material = document.getElementById("materialInput").value;
  const size = document.getElementById("size").value;
  const blueprint = document.getElementById("blueprint").value;
  const quantity = document.getElementById("quantity").value;
  const map = document.getElementById("map").value;
  const city = document.getElementById("city").value;
  const street = document.getElementById("street").value;
  const house = document.getElementById("house").value;
  const office = document.getElementById("office").value;
  const materialOutput = document.getElementById("materialOutput");
  const quantityOutput = document.getElementById("quantityOutput");
  const sizeOutput = document.getElementById("sizeOutput");
  const addressOutput = document.getElementById("addressOutput");

  window.scrollTo({ top: 0 });
  detailsForm.classList.remove("popup-details__form-active");
  contactForm.classList.remove("popup-contact__form-active");
  orderForm.classList.add("popup-order-form-active");

  obj.material = material;
  obj.size = size;
  obj.blueprint = blueprint;
  obj.quantity = quantity;
  obj.map = map;
  obj.address.city = city;
  obj.address.street = street;
  obj.address.house = house;
  obj.address.office = office;

  materialOutput.textContent = `${material}`;
  quantityOutput.textContent = `${quantity} шт`;
  sizeOutput.textContent = `${size} мм`;
  addressOutput.textContent = `г.${city}, ул.${street}`;
};

const returnToDetailsForm = () => {
  window.scrollTo({ top: 0 });
  detailsForm.classList.add("popup-details__form-active");
  orderForm.classList.remove("popup-order-form-active");
  contactForm.classList.remove("popup-contact__form-active");
};

const moveToContactForm = () => {
  window.scrollTo({ top: 0 });
  detailsForm.classList.remove("popup-details__form-active");
  orderForm.classList.remove("popup-order-form-active");
  contactForm.classList.add("popup-contact__form-active");
};

const confirmForm = () => {
  const companyName = document.getElementById("companyName").value;
  const contactName = document.getElementById("contactName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  obj.companyName = companyName;
  obj.contactName = contactName;
  obj.email = email;
  obj.phone = phone;

  console.log(obj);
};
