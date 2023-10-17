const navMenuButtons = document.querySelectorAll(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");
let spotlightSlideShowIndex = 0;
let navMenuOpen = false;
let darkModeEnabled = false;
const darkModeToggle = document.querySelector(".dark-mode-toggle");

navMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});

darkModeToggle.addEventListener("click", () => {
  if (darkModeEnabled) {
    darkModeToggle.innerHTML = "Light";
    document.documentElement.style.setProperty(
      "--main-background-color",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--main-text-color",
      "#353535ff"
    );
    darkModeEnabled = false;
  } else {
    darkModeToggle.innerHTML = "Dark";
    document.documentElement.style.setProperty(
      "--main-background-color",
      "#353535ff"
    );
    document.documentElement.style.setProperty(
      "--main-text-color",
      "#d9d9d9ff"
    );
    darkModeEnabled = true;
  }

  // document.style.setProperty("--alternate-highlight", "#d9d9d9ff");
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
