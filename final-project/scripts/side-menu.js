const navMenu = document.querySelector("#nav-menu");
const navMenuButtons = document.querySelectorAll("#nav-menu-button");

navMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});
