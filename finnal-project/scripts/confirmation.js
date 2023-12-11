const url = new URL(window.location);
const params = url.searchParams;

// Displays the users Smothie choice
const nameSpan = document.querySelector("#firstname");
const emailSpan = document.querySelector("#email");
const phoneSpan = document.querySelector("#phone");
const fruitSpan1 = document.querySelector("#fruit1");
const fruitSpan2 = document.querySelector("#fruit2");
const fruitSpan3 = document.querySelector("#fruit3");
const instructionsSpan = document.querySelector("#instructions");
nameSpan.textContent = params.get("first-name");
emailSpan.textContent = params.get("email");
phoneSpan.textContent = params.get("phone");
fruitSpan1.textContent = params.get("ingredient1");
fruitSpan2.textContent = params.get("ingredient2");
fruitSpan3.textContent = params.get("ingredient3");
instructionsSpan.textContent = params.get("special-instructions");

// Displays the nutrition info for the users smoothie
const carbs = document.querySelector("#carbohydrates");
const protein = document.querySelector("#protein");
const fat = document.querySelector("#fat");
const sugar = document.querySelector("#sugar");
const calories = document.querySelector("#calories");

const getIngredients = async () => {
  const response = await fetch("./ingredients.json");
  const data = await response.json();
  return data;
};

const calculateNutrition = async () => {
  const ingredients = await getIngredients();
  const nutritionInfo = [
    ingredients.find((search) => search.name == params.get("ingredient1")),
    ingredients.find((search) => search.name == params.get("ingredient2")),
    ingredients.find((search) => search.name == params.get("ingredient3")),
  ];
  carbs.textContent = nutritionInfo.reduce((sum, current) => {
    return (sum += current.nutritions.carbohydrates);
  }, 0);
  protein.textContent = nutritionInfo.reduce((sum, current) => {
    return (sum += current.nutritions.protein);
  }, 0);
  fat.textContent = nutritionInfo.reduce((sum, current) => {
    return (sum += current.nutritions.fat);
  }, 0);
  sugar.textContent = nutritionInfo.reduce((sum, current) => {
    return (sum += current.nutritions.sugar);
  }, 0);
  calories.textContent = nutritionInfo.reduce((sum, current) => {
    return (sum += current.nutritions.calories);
  }, 0);
};

calculateNutrition();
