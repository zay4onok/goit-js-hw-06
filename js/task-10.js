function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBox = document.querySelector("#boxes");
const addBtnElem = document.querySelector("[data-create]");
const destroyBtnElem = document.querySelector("[data-destroy]");

addBtnElem.addEventListener("click", onAddBtnElemClick);
destroyBtnElem.addEventListener("click", onDestroyBtnElemClick);

function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;
  for (let i = 1; i <= amount; i++) {
    const divElem = document.createElement("div");
    divElem.style.width = divWidth + "px";
    divElem.style.height = divHeight + "px";
    divElem.style.backgroundColor = getRandomHexColor();
    divBox.append(divElem);
    divWidth += 10;
    divHeight += 10;
  }
}

function onAddBtnElemClick(event) {
  const numberInput = +addBtnElem.previousElementSibling.value;
  createBoxes(numberInput);
}

function onDestroyBtnElemClick(elem) {
  addBtnElem.previousElementSibling.value = "";
  divBox.innerHTML = "";
}
