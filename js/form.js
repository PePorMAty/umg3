const popup = document.querySelector(".popup");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const overlay = document.querySelector(".overlay");
const detailsForm = document.querySelector(".popup-details__form");
const orderForm = document.querySelector(".popup-order-form");
const contactForm = document.querySelector(".popup-contact__form");
// Открытие попапа и формы
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
// Обработка полей  формы
const formData = {
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

  formData.material = material;
  formData.size = size;
  formData.blueprint = blueprint;
  formData.quantity = quantity;
  formData.map = map;
  formData.address.city = city;
  formData.address.street = street;
  formData.address.house = house;
  formData.address.office = office;

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

  formData.companyName = companyName;
  formData.contactName = contactName;
  formData.email = email;
  formData.phone = phone;
};

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    confirmForm();
    console.log(formData);

    const webhookUrl =
      "https://b24-hoecyn.bitrix24.ru/rest/1/8prrmu40folgl1rq/"; // Замените на URL вашего вебхука

    // Формирование данных для создания лида
    const leadData = {
      fields: {
        TITLE: `Новый заказ от ${formData.material}`,
        NAME: formData.contactName,
        PHONE: [{ VALUE: formData.phone, VALUE_TYPE: "WORK" }],
        EMAIL: [{ VALUE: formData.email, VALUE_TYPE: "WORK" }],
        COMMENTS: `Материал: ${formData.material}, Количество: ${formData.quantity}, Размер: ${formData.size}`,
        ADDRESS: `${formData.address.city}, ул. ${formData.address.street}, д. ${formData.address.house}, оф. ${formData.address.office}`,
        UF_CRM_BLUEPRINT: `Чертёж: ${formData.blueprint}`, // Замените на идентификатор пользовательского поля, если необходимо
        UF_CRM_MAP: `Карта: ${formData.map}`, // Замените на идентификатор пользовательского поля, если необходимо
        MATERIAL: `Материал: ${formData.material}`, // Замените на идентификатор пользовательского поля, если необходимо
        UF_CRM_QUANTITY: `Количество: ${formData.quantity}`, // Замените на идентификатор пользовательского поля, если необходимо
        UF_CRM_SIZE: `Размер: ${formData.size}`,
      },
      params: { REGISTER_SONET_EVENT: "Y" }, // Создание события в ленте новостей
    };

    // Отправка данных на сервер Bitrix24
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          alert("Заказ оформлен! ID лида: " + data.result);
        } else {
          alert(
            "Ошибка: " + (data.error_description || "Не удалось создать лид")
          );
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Произошла ошибка при отправке данных.");
      });
  });

// Поведение input type file
const labelFile1 = document.querySelector(".label-file1 input[type=file]");
const labelFile2 = document.querySelector(".label-file2 input[type=file]");
const labelFile3 = document.querySelector(".label-file3 input[type=file]");
const inputFileImg = document.querySelectorAll(".input-file");

labelFile1.addEventListener("change", function () {
  let file = this.files[0];
  this.nextElementSibling.textContent = file.name;
  inputFileImg.forEach((el, index) => {
    if (index === 0) {
      el.classList.add("inputWithoutImg");
    }
  });
});
labelFile2.addEventListener("change", function () {
  let file = this.files[0];
  this.nextElementSibling.textContent = file.name;
  inputFileImg.forEach((el, index) => {
    if (index === 1) {
      el.classList.add("inputWithoutImg");
    }
  });
});
labelFile3.addEventListener("change", function () {
  let file = this.files[0];
  this.nextElementSibling.textContent = file.name;
  inputFileImg.forEach((el, index) => {
    if (index === 2) {
      el.classList.add("inputWithoutImg");
    }
  });
});
