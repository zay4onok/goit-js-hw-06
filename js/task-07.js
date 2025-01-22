const inputSizeFont = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputSizeFont.addEventListener("input", onInputSizeFontChange);

function onInputSizeFontChange(elem) {
  text.style.fontSize = elem.target.value + "px";
}
