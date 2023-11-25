const navMenuButtons = document.querySelectorAll(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");
let spotlightSlideShowIndex = 0;
let navMenuOpen = false;
let darkModeEnabled = false;
const darkModeToggle = document.querySelector(".dark-mode-toggle input");
const callToActionBtn = document.querySelector(".calltoaction");
if (localStorage.getItem("darkModeEnabled")) {
  rawDarkModeEnabled = localStorage.getItem("darkModeEnabled");
  if (rawDarkModeEnabled == "true") {
    darkModeEnabled = true;
  }
}
if (!darkModeEnabled) {
  darkModeToggle.innerHTML = "Light";
  document.documentElement.style.setProperty(
    "--main-background-color",
    "#ffffff"
  );
  document.documentElement.style.setProperty("--main-text-color", "#353535ff");
  darkModeToggle.checked = false;
} else {
  darkModeToggle.innerHTML = "Dark";
  document.documentElement.style.setProperty(
    "--main-background-color",
    "#353535ff"
  );
  document.documentElement.style.setProperty("--main-text-color", "#d9d9d9ff");
  darkModeToggle.checked = true;
}

navMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});

darkModeToggle.addEventListener("change", () => {
  darkModeEnabled = !darkModeEnabled;
  if (!darkModeEnabled) {
    darkModeToggle.innerHTML = "Light";
    document.documentElement.style.setProperty(
      "--main-background-color",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--main-text-color",
      "#353535ff"
    );
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
  }
  localStorage.setItem("darkModeEnabled", darkModeEnabled);

  // document.style.setProperty("--alternate-highlight", "#d9d9d9ff");
});

if (callToActionBtn) {
  callToActionBtn.addEventListener("click", () => {
    window.location = "./join.html";
  });
}

// invatation banner

const bannerDiv = document.querySelector("#banner");
const bannerButton = document.querySelector("#banner-button");
if (new Date().getDay() <= 3) {
  bannerDiv.style.display = "block";
}

if (bannerButton) {
  bannerButton.addEventListener("click", () => {
    bannerDiv.style.display = "none";
  });
}
