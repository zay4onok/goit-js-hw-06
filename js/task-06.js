const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onValidationInputBlur);
validationInput.addEventListener("focus", onValidationInputFocus);

function onValidationInputBlur(elem) {
  if (elem.target.value.length > +elem.target.dataset.length) {
    elem.target.classList.add("valid");
  } else {
    elem.target.classList.add("invalid");
  }
}

function onValidationInputFocus(elem) {
  elem.target.classList.remove("valid", "invalid");
}
