const navMenuButtons = document.querySelectorAll(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");
// const navMenuCloseButton = document.querySelector(".nav-menu-closebutton");

let navMenuOpen = false;

navMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log("hit");
    navMenu.classList.toggle("open");
    // navMenuCloseButton.classList.toggle("showing");
  });
});

function setNavMenuOpen(value) {
  navMenuOpen = value;
}
