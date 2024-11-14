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
  document.querySelector("body").classList.remove("popup-open");
});

// Закрытие попапа по клику вне формы
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
    document.querySelector("body").classList.remove("popup-open");
  }
});

// Открытие попапа для заказа
const openPopup = () => {
  window.scrollTo({ top: 0 });
  detailsForm.classList.add("popup-details__form-active");
  popup.classList.add("popup-active");
  overlay.classList.add("overlay-active");
  header.classList.add("blur");
  main.classList.add("blur");
  footer.classList.add("blur");
  document.querySelector("body").classList.add("popup-open");
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
  comments: "",
  address: {
    city: "",
    street: "",
    house: "",
    office: "",
  },
};

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    const errorSpanId = `${input.name}-error`;

    if (!input.checkValidity()) {
      isValid = false;
      input.classList.add("invalid-input");

      // Добавляем класс к .label-wrapper, если input внутри него не валиден
      const wrapper = input.closest(".label-wrapper");
      if (wrapper) {
        wrapper.classList.add("invalid-input");
      }
    } else {
      input.classList.remove("invalid-input");

      // Убираем класс с .label-wrapper, если input валиден
      const wrapper = input.closest(".label-wrapper");
      if (wrapper) {
        wrapper.classList.remove("invalid-input");
      }
    }
  });

  return isValid;
}

const moveToOrderForm = () => {
  if (validateForm(contactForm)) {
    window.scrollTo({ top: 0 });
    detailsForm.classList.remove("popup-details__form-active");
    contactForm.classList.remove("popup-contact__form-active");
    orderForm.classList.add("popup-order-form-active");

    // Сбор данных формы
    const material = document.getElementById("materialInput").value;
    const size = document.getElementById("size").value;
    const blueprint = document.getElementById("blueprint").value;
    const quantity = document.getElementById("quantity").value;
    const map = document.getElementById("map").value;
    const city = document.getElementById("city").value;
    const street = document.getElementById("street").value;
    const house = document.getElementById("house").value;
    const office = document.getElementById("office").value;
    const comments = document.getElementById("comments").value;

    formData.material = material;
    formData.size = size;
    formData.blueprint = blueprint;
    formData.quantity = quantity;
    formData.map = map;
    formData.address.city = city;
    formData.address.street = street;
    formData.address.house = house;
    formData.address.office = office;
    formData.comments = comments;

    // Обновление отображения данных
    materialOutput.textContent = `${material}`;
    quantityOutput.textContent = `${quantity} шт`;
    sizeOutput.textContent = `${size} мм`;
    addressOutput.textContent = `г.${city}, ул.${street}`;
  }
};

const returnToDetailsForm = () => {
  window.scrollTo({ top: 0 });
  detailsForm.classList.add("popup-details__form-active");
  orderForm.classList.remove("popup-order-form-active");
  contactForm.classList.remove("popup-contact__form-active");
};

const moveToContactForm = () => {
  if (validateForm(detailsForm)) {
    window.scrollTo({ top: 0 });
    detailsForm.classList.remove("popup-details__form-active");
    orderForm.classList.remove("popup-order-form-active");
    contactForm.classList.add("popup-contact__form-active");
  }
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

// Функция для преобразования файла в base64
function getFileBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // Извлечение чистого base64 без префикса
    reader.onerror = (error) => reject(error);
  });
}

// Функция загрузки файла в папку Bitrix24 и получения ID файла
const uploadFile = (file, folderId) => {
  const formDataToSend = new FormData();
  formDataToSend.append("file", file);

  return fetch(
    `https://b24-hoecyn.bitrix24.ru/rest/1/unzteqtggyuf3xdl/disk.folder.uploadfile?id=${folderId}`,
    {
      method: "POST",
      body: formDataToSend,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error("Ошибка загрузки файла: " + data.error_description);
      }
      return data.result.ID; // Возвращаем ID загруженного файла
    });
};

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Сбор данных формы
    confirmForm();

    // Загрузка файла карты, чертежа и ТУ (требований)
    const mapFile = document.getElementById("map").files[0];
    const blueprintFile = document.getElementById("blueprint").files[0];
    const requirementsFile = document.getElementById("requirements").files[0];

    // URL вебхука для создания лида
    const webhookUrl =
      "https://b24-hoecyn.bitrix24.ru/rest/1/unzteqtggyuf3xdl/crm.lead.add.json";

    // Формирование данных для создания лида
    const leadData = {
      fields: {
        TITLE: `Новый заказ от ${formData.material}`,
        NAME: formData.contactName,
        PHONE: [{ VALUE: formData.phone, VALUE_TYPE: "WORK" }],
        EMAIL: [{ VALUE: formData.email, VALUE_TYPE: "WORK" }],
        COMMENTS: formData.comments,
        ADDRESS: `${formData.address.city}, ул. ${formData.address.street}, д. ${formData.address.house}, оф. ${formData.address.office}`,
        UF_CRM_1731490039: null, // Поле для карты (будет заполнено позже)
        UF_CRM_1731502674: null, // Поле для чертежа (будет заполнено позже)
        UF_CRM_1731577537: null, // Поле для требований (будет заполнено позже)
        UF_CRM_1731490628: formData.quantity,
        UF_CRM_1731490661: formData.size,
      },
      params: { REGISTER_SONET_EVENT: "Y" },
    };

    if (mapFile) {
      getFileBase64(mapFile)
        .then((base64Map) => {
          leadData.fields.UF_CRM_1731490039 = {
            fileData: [`${mapFile.name}`, base64Map],
          };
          return blueprintFile ? getFileBase64(blueprintFile) : null;
        })
        .then((base64Blueprint) => {
          if (base64Blueprint) {
            leadData.fields.UF_CRM_1731502674 = {
              fileData: [`${blueprintFile.name}`, base64Blueprint],
            };
          }
          return requirementsFile ? getFileBase64(requirementsFile) : null;
        })
        .then((base64Requirements) => {
          if (base64Requirements) {
            leadData.fields.UF_CRM_1731577537 = {
              fileData: [`${requirementsFile.name}`, base64Requirements],
            };
          }

          console.log("Lead data:", leadData); // Отладка перед отправкой

          // Отправка данных на сервер Bitrix24
          return fetch(webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(leadData),
          });
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
          console.error("Ошибка при подготовке файлов:", error);
          alert("Произошла ошибка при отправке данных.");
        });
    }
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
