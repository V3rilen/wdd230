const userVisitMessage = document.querySelector("#user-visit-message");
let currentDate = Date.now();
if (localStorage.getItem("lastVisitDate")) {
  let lastVisitDate = localStorage.getItem("lastVisitDate");
  if (
    new Date(currentDate).getDay() == new Date(parseInt(lastVisitDate)).getDay()
  ) {
    userVisitMessage.textContent = "Back so soon! Awesome!";
  } else {
    const timeDiff = Math.floor((currentDate - lastVisitDate) / 86400000);
    if (timeDiff == 1) {
      userVisitMessage.textContent = `You last visited 1 day ago.`;
    } else {
      userVisitMessage.textContent = `You last visited ${timeDiff} days ago.`;
    }
  }
  //   console.log(currentDate, lastVisitDate);
} else {
  userVisitMessage.textContent =
    "Welcome! Let us know if you have any questions.";
}
localStorage.setItem("lastVisitDate", currentDate);
