const scriptureInput = document.querySelector("#favchap");
const submitButton = document.querySelector("#submit-button");
let scriptureList = [];
const scriptureDisplayList = document.querySelector("#list");

if (localStorage.getItem("scriptures")) {
  scriptureList = JSON.parse(localStorage.getItem("scriptures"));
  scriptureList.forEach((scripture) => {
    const newChapListItem = document.createElement("li");
    const newChapLabel = document.createElement("a");
    const newChapDeleteButton = document.createElement("button");
    const linkButton = document.createElement("button");
    newChapLabel.textContent = scripture;
    newChapDeleteButton.textContent = "❌";
    linkButton.textContent = "🔗";
    newChapListItem.append(newChapLabel);
    newChapListItem.append(linkButton);
    newChapListItem.append(newChapDeleteButton);
    scriptureDisplayList.append(newChapListItem);
    newChapDeleteButton.addEventListener("click", () => {
      scriptureDisplayList.removeChild(newChapListItem);
    });
    linkButton.addEventListener("click", () => {
      const linkAddress = prompt("Please Enter Link URL");
      if (linkAddress) {
        newChapLabel.href = linkAddress;
        newChapLabel.target = "_blank";
      }
    });
  });
}

submitButton.addEventListener("click", () => {
  if (scriptureInput.value) {
    scriptureList.push(scriptureInput.value);
    console.log(scriptureList);
    localStorage.setItem("scriptures", JSON.stringify(scriptureList));
    const newChapListItem = document.createElement("li");
    const newChapLabel = document.createElement("a");
    const newChapDeleteButton = document.createElement("button");
    const linkButton = document.createElement("button");
    newChapLabel.textContent = scriptureInput.value;
    newChapDeleteButton.textContent = "❌";
    linkButton.textContent = "🔗";
    newChapListItem.append(newChapLabel);
    newChapListItem.append(linkButton);
    newChapListItem.append(newChapDeleteButton);
    scriptureDisplayList.append(newChapListItem);
    newChapDeleteButton.addEventListener("click", () => {
      console.log(scriptureInput.value);
      scriptureList = scriptureList.filter(
        (spripture) => spripture === scriptureInput.value
      );
      localStorage.setItem("scriptures", JSON.stringify(scriptureList));
      scriptureDisplayList.removeChild(newChapListItem);
    });
    linkButton.addEventListener("click", () => {
      const linkAddress = prompt("Please Enter Link URL");
      if (linkAddress) {
        newChapLabel.href = linkAddress;
        newChapLabel.target = "_blank";
      }
    });
    scriptureInput.focus();
    scriptureInput.value = "";
  } else {
    alert("Input field is empty");
    scriptureInput.focus();
  }
});
