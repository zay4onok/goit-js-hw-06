const valueElem = document.querySelector("#value");
const decrementElem = document.querySelector("[data-action=decrement]");
const incrementElem = document.querySelector("[data-action=increment]");

let counterValue = 0;

function onDecrementElemClick(event) {
  counterValue--;
  valueElem.textContent = counterValue;
}

function onIncrementElemClick(event) {
  counterValue++;
  valueElem.textContent = counterValue;
}

decrementElem.addEventListener("click", onDecrementElemClick);
incrementElem.addEventListener("click", onIncrementElemClick);
