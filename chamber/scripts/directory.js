// import data from "./data/members.json";
const memberCardHolder = document.querySelector("#member-cards-holder");
const getMemberData = async () => {
  const data = await fetch("./data/members.json").then((response) =>
    response.json()
  );
  const members = data;
  members.forEach((member) => {
    const cardTemplate = `
        <header>
        <a href="${member.website}" target="_blank"><img src="${
      member.icon
    }" height=40 alt="Icon for ${member.name}" loading="lazy"/></a> 
        <span>${member.name}</span>
        </header>
        <section>
          <ul>
            <li>
            <span>Address: ${member.address}</span>
            </li>
            ${
              member.phone &&
              `<li>
                  <span>Phone: ${member.phone}</span>
                </li>`
            }
            
            <li>
            <span>Membership Level: ${member.memberLevel}</span>
            </li>
          </ul>
        </section>
        
  `;
    const newCard = document.createElement("section");
    newCard.classList.add("card");
    newCard.innerHTML = cardTemplate;
    memberCardHolder.appendChild(newCard);
  });
};

getMemberData();
