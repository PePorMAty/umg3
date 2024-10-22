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

const confirmOrder = () => {
  const companyName = document.getElementById("companyName").value;
  const contactName = document.getElementById("contactName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
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
  topForm.classList.remove("popup-top__form-active");
  orderForm.classList.add("popup-order-form-active");

  obj.companyName = companyName;
  obj.contactName = contactName;
  obj.email = email;
  obj.phone = phone;
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

  console.log(obj);
};

const oneMoreOrder = () => {
  window.scrollTo({ top: 0 });
  topForm.classList.add("popup-top__form-active");
  orderForm.classList.remove("popup-order-form-active");
};
