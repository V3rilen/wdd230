const url = new URL(window.location);
const params = url.searchParams;

// Displays the users Smothie choice
// const nameSpan = document.querySelector("#firstname");
// const emailSpan = document.querySelector("#email");
// const phoneSpan = document.querySelector("#phone");
// const fruitSpan1 = document.querySelector("#fruit1");
// const fruitSpan2 = document.querySelector("#fruit2");
// const fruitSpan3 = document.querySelector("#fruit3");
// const instructionsSpan = document.querySelector("#instructions");
// nameSpan.textContent = params.get("first-name");
// emailSpan.textContent = params.get("email");
// phoneSpan.textContent = params.get("phone");
// fruitSpan1.textContent = params.get("ingredient1");
// fruitSpan2.textContent = params.get("ingredient2");
// fruitSpan3.textContent = params.get("ingredient3");
// instructionsSpan.textContent = params.get("special-instructions");

const displayOverview = () => {
  const templateOverview = `
  <header>Order Overview</header>
        <ul>
          <li>
            <p>Name:
            ${params.get("first-name")}
            </p>
          </li>
          <li>
            <p>Email:
            ${params.get("email")}
            </p>
          </li>
          <li>
            <p>Phone:
            ${params.get("phone")}
            </p>
          </li>
          <li>
            <p>Fruit 1:
            ${params.get("ingredient1")}
            </p>
          </li>
          <li>
          <p>Fruit 2:
          ${params.get("ingredient2")}
          </p>
          </li>
          <li>
          <p>Fruit 3:
          ${params.get("ingredient3")}
          </p>
          </li>
          ${
            // Display special instructions if there are any. If there arnt any, leave this blank
            params.get("special-instructions") &&
            `<li>
            <p>Special Instructions:
            ${params.get("special-instructions")}
            </p>
          </li>`
          }
        </ul>
        <p>Order Placed on ${new Date(
          params.get("submition-time")
        ).toLocaleString()} 
        <p>
          <span>Your order will be ready at ${new Date(
            new Date(params.get("submition-time")).getTime() + 15 * 60000
          ).toLocaleTimeString()}</span>
        </p>
  `;
  document.querySelector(".order-overview").innerHTML = templateOverview;
};

displayOverview();

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
  return nutritionInfo;
  //   carbs.textContent = nutritionInfo.reduce((sum, current) => {
  //     return (sum += current.nutritions.carbohydrates);
  //   }, 0);
  //   protein.textContent = nutritionInfo.reduce((sum, current) => {
  //     return (sum += current.nutritions.protein);
  //   }, 0);
  //   fat.textContent = nutritionInfo.reduce((sum, current) => {
  //     return (sum += current.nutritions.fat);
  //   }, 0);
  //   sugar.textContent = nutritionInfo.reduce((sum, current) => {
  //     return (sum += current.nutritions.sugar);
  //   }, 0);
  //   calories.textContent = nutritionInfo.reduce((sum, current) => {
  //     return (sum += current.nutritions.calories);
  //   }, 0);
};

calculateNutrition();

const displayNutrition = async () => {
  const nutritionInfo = await calculateNutrition();
  const templateInfo = `
  <header>Nutrition. Info</header>
    <ul>
        <li>
        <p>Carbohydrates: 
        ${nutritionInfo.reduce((sum, current) => {
          return (sum += current.nutritions.carbohydrates);
        }, 0)}
        </p>
        </li>
        <li>
        <p>Protein:
        ${nutritionInfo.reduce((sum, current) => {
          return (sum += current.nutritions.protein);
        }, 0)}
        </p>
        </li>
        <li>
        <p>Fat:
        ${nutritionInfo.reduce((sum, current) => {
          return (sum += current.nutritions.fat);
        }, 0)}
        </p>
        </li>
        <li>
        <p>Sugar:
        ${nutritionInfo.reduce((sum, current) => {
          return (sum += current.nutritions.sugar);
        }, 0)}
        </p>
        </li>
        <li>
        <p>Calories:
        ${nutritionInfo.reduce((sum, current) => {
          return (sum += current.nutritions.calories);
        }, 0)}
        </p>
        </li>
    </ul>
    `;
  document.querySelector(".nutrition").innerHTML = templateInfo;
};

displayNutrition();

document.querySelector("#place-order-button").addEventListener("click", () => {
  alert("Your Order has been placed");

  // document.querySelector("#confirmation-popup").classList.remove("hidden");
  // setTimeout(() => {
  //   document.querySelector("#confirmation-popup").classList.add("hidden");
  // }, 2000);
});
