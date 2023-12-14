const ingredientDropdowns = document.querySelectorAll(".ingredient-dropdown");
const ingredientsList = document.querySelector("#ingredient-list");

const getIngredients = async () => {
  const response = await fetch("./ingredients.json");
  const data = await response.json();
  return data;
};
const populateDropdowns = async () => {
  const ingredients = await getIngredients();
  ingredientDropdowns.forEach(async (dropdown) => {
    ingredients.forEach((item) => {
      const newOption = document.createElement("option");
      newOption.value = item.name;
      newOption.textContent = item.name;
      dropdown.appendChild(newOption);
    });
  });
};

populateDropdowns();

const populateIngredientsList = async () => {
  const ingredients = await getIngredients();
  ingredients.forEach((item) => {
    const displayTemplate = `
    <section class="ingredient-card">
    <h2>${item.name}</h2>
    <p>Calories: ${item.nutritions.calories}</p>
    <p>Fat: ${item.nutritions.fat}</p>
    <p>Sugar: ${item.nutritions.sugar}</p>
    <p>Carbohydrates: ${item.nutritions.carbohydrates}</p>
    <p>Protein: ${item.nutritions.protein}</p>
    </section>

    `;
    const newLi = document.createElement("li");
    newLi.innerHTML = displayTemplate;
    ingredientsList.appendChild(newLi);
  });
};

populateIngredientsList();

document.querySelector("#submition-time").value = new Date();

document.querySelector("#order-form").addEventListener("submit", () => {
  const prevOrderCount = parseInt(localStorage.getItem("order-count"));
  localStorage.setItem("order-count", prevOrderCount + 1);
});
