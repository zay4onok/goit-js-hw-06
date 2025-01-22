const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListElem = document.querySelector("#ingredients");

function ingredientCreate(ingredient) {
  const ingredientsElem = document.createElement("li");
  ingredientsElem.classList.add("item");
  ingredientsElem.textContent = ingredient;
  return ingredientsElem;
}

function ingredientsCreate(ingredients) {
  return ingredients.map(ingredientCreate);
}

function renderIngredint(ingredients) {
  const ingredientsList = ingredientsCreate(ingredients);
  ingredientsListElem.append(...ingredientsList);
}

renderIngredint(ingredients);
