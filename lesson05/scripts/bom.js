const scriptureInput = document.querySelector("#favchap");
const submitButton = document.querySelector("#submit-button");
const scriptureList = document.querySelector("#list");

submitButton.addEventListener("click", () => {
  if (scriptureInput.value) {
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
    scriptureList.append(newChapListItem);
    newChapDeleteButton.addEventListener("click", () => {
      scriptureList.removeChild(newChapListItem);
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
