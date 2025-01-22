const categoriesList = document.querySelector("#categories");
const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesList.children.length}`);

categories.forEach((elem) => {
  console.log(
    `Category: ${elem.firstElementChild.textContent}\nElements: ${elem.lastElementChild.children.length}`
  );
});
