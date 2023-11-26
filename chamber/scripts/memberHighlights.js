const heighlightContainer = document.querySelector("#highlight-container");

const getMemberData = async () => {
  const data = await fetch("./data/members.json").then((response) =>
    response.json()
  );
  return data;
};

const renderHighlights = async () => {
  let memberData = await getMemberData();
  memberData = memberData.sort((a, b) => 0.5 - Math.random());
  let highlights = [];
  highlights.push(memberData.pop());
  highlights.push(memberData.pop());
  highlights.push(memberData.pop());

  highlights.forEach((member) => {
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
    // newCard.classList.add("card");
    newCard.innerHTML = cardTemplate;
    heighlightContainer.appendChild(newCard);
  });
};

renderHighlights();
