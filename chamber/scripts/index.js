const navMenuButtons = document.querySelectorAll(".nav-menu-button");
const navMenu = document.querySelector(".nav-menu");
let spotlightSlideShowIndex = 0;
let navMenuOpen = false;
let darkModeEnabled = false;
const darkModeToggle = document.querySelector(".dark-mode-toggle input");
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

const temperatureSpan = document.querySelector("#temperature");
const windspeedSpan = document.querySelector("#windspeed");
const windchillSpan = document.querySelector("#windchill");
const temperature = parseInt(temperatureSpan.textContent);
const windspeed = parseFloat(windspeedSpan.textContent);

function showWindChill(temp, speed) {
  message = "N/A";
  if (temp <= 50 && speed > 3.0) {
    let chill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16);
    message = `${Math.round(chill)}`;
    console.log(message);
  }
  windchillSpan.textContent = message;
}

showWindChill(temperature, windspeed);
