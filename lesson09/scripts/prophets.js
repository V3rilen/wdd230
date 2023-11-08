const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cardHolder = document.querySelector("#cards");
let prophets = [];
const getProphets = async () => {
  const response = await fetch(url).then((response) => response.json());
  prophets = response.prophets;
  renderProphetCards();
  //   console.log(data);
};
getProphets() || [];

const renderProphetCards = () => {
  console.log(prophets);
  prophets.forEach((prophet) => {
    const cardTemplate = `
    <header>
        <h2>${prophet.name} ${prophet.lastname}</h2>
        <span>${prophet.birthdate}</span>
        <span>${prophet.birthplace}</span>
    </header>
    <img src="${prophet.imageurl}" alt="Portrait of ${prophet.name} ${prophet.lastname} loading="lazy">
            `;
    const newCard = document.createElement("section");
    newCard.innerHTML = cardTemplate;
    newCard.classList.add("card");
    // const cardHeader = document.createElement("header");
    // const cardImage = document.createElement("img");
    // cardHeader.innerHTML = `<h2></h2>`;
    // cardImage.src = prophet.imageurl;
    // cardImage.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;
    // cardImage.setAttribute("width", "200px");
    // // cardImage.setAttribute("height", "500px");
    // cardImage.loading = "lazy";
    // newCard.appendChild(cardHeader);
    // newCard.appendChild(cardImage);
    cardHolder.appendChild(newCard);
  });
};
