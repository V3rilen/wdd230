const navMenuButtons = document.querySelectorAll(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");

let navMenuOpen = false;

navMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
