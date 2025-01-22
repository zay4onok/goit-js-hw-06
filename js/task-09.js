function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElem = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btnElem.addEventListener("click", onBtnElemClick);

function onBtnElemClick(elem) {
  const randomColor = getRandomHexColor();
  colorText.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}
