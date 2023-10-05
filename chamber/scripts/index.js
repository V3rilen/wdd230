const navMenuButtons = document.querySelectorAll(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");

let navMenuOpen = false;

navMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});

let today1 = new Date();

// let visitcount = parseInt(localStorage.getItem("visitcount"));
// if (visitcount) {
//   visitcount += 1;
//   localStorage.setItem("visitcount", visitcount);
//   document.querySelector("#pagevisits").textContent = visitcount;
// } else {
//   localStorage.setItem("visitcount", 1);
// }

document.querySelector("#currentyear").textContent = today1.getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;
