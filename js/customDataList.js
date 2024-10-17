materialInput.onfocus = function () {
  material.style.display = "block";
  materialInput.style.borderRadius = "5px 5px 0 0";
};
for (let option of material.options) {
  option.onclick = function () {
    materialInput.value = option.value;
    material.style.display = "none";
    materialInput.style.borderRadius = "5px";
  };
}

materialInput.oninput = function () {
  currentFocus = -1;
  var text = materialInput.value.toUpperCase();
  for (let option of material.options) {
    if (option.value.toUpperCase().indexOf(text) > -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  }
};
var currentFocus = -1;
materialInput.onkeydown = function (e) {
  if (e.keyCode == 40) {
    currentFocus++;
    addActive(material.options);
  } else if (e.keyCode == 38) {
    currentFocus--;
    addActive(material.options);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    if (currentFocus > -1) {
      /*and simulate a click on the "active" item:*/
      if (material.options) material.options[currentFocus].click();
    }
  }
};

function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  x[currentFocus].classList.add("active");
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
}
