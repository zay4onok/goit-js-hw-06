const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onNameInputChange);

function onNameInputChange(elem) {
  nameOutput.textContent = elem.target.value;
  if (!elem.target.value.length) {
    nameOutput.textContent = "Anonymous";
  }
}
