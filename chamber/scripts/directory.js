// import data from "./data/members.json";
const memberCardHolder = document.querySelector("#member-cards-holder");
const displaySwitch = document.querySelector("#display-switch");
const membersTable = document.querySelector("#members-table");
let displayAsTable = false;

displaySwitch.addEventListener("click", () => {
  displayAsTable = !displayAsTable;
  memberCardHolder.innerHTML = "";
  membersTable.innerHTML = `<tr>
  <th>Name</th>
  <th>Address</th>
  <th>Phone</th>
  <th>Website</th>
  <th>Membership level</th>
</tr>`;
  membersTable.classList.toggle("hidden");
  getMemberData();
  if (displayAsTable) {
    displaySwitch.textContent = "Blocks";
  } else {
    displaySwitch.textContent = "Table";
  }
});

const getMemberData = async () => {
  const data = await fetch("./data/members.json").then((response) =>
    response.json()
  );
  const members = data;
  members.forEach((member) => {
    if (displayAsTable) {
      const rowTemplate = `
        <td><span>${member.name}</span></td>
        <td><span>${member.address}</span></td>
        <td><span>${member.phone}</span></td>
        <td><a href="${member.website}" target="_blank">${member.website}</a></td>
        <td><span>${member.memberLevel}</span></td>
      `;
      const newRow = document.createElement("tr");
      // newCard.classList.add("card");
      newRow.innerHTML = rowTemplate;
      membersTable.appendChild(newRow);
      return;
    }
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
