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
const weatherDescriptionSpan = document.querySelector("#weather-description");
const temperatureSpan = document.querySelector("#temperature");
const windspeedSpan = document.querySelector("#windspeed");
const windchillSpan = document.querySelector("#windchill");
const weatherIcon = document.querySelector("#weather-icon");
const LAT = 43.8300505;
const LON = -111.7881829;
const apiKey = "1e82d7865ded7fa3165d96b9bdd12312";

const showWindChill = (temp, speed) => {
  message = `${temp}`;
  if (temp <= 50 && speed > 3.0) {
    let chill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16);
    message = `${Math.round(chill)}`;
    // console.log(message);
  }
  windchillSpan.textContent = message;
};

const getWeather = async (LAT, LON, apiKey) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${apiKey}&units=imperial`
  );
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    return data;
  }
};

const updateWeather = async () => {
  const weather = await getWeather(LAT, LON, apiKey);
  temperatureSpan.textContent = Math.round(weather.main.temp);
  windspeedSpan.textContent = weather.wind.speed;
  weatherDescriptionSpan.textContent = weather.weather[0].description;
  const temperature = parseInt(temperatureSpan.textContent);
  const windspeed = parseFloat(windspeedSpan.textContent);
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  weatherIcon.alt = weather.weather[0].description;
  showWindChill(temperature, windspeed);
};

updateWeather();

const getForcast = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${apiKey}&units=imperial`
  );
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    return data;
  }
};
// getForcast();
// showWindChill(temperature, windspeed);

const updateForcast = async () => {
  const forcastData = await getForcast();
  let dates = [];
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const currentDate = new Date();
  for (i = 1; i <= 3; i++) {
    nextDate = new Date(currentDate.getTime() + ONE_DAY * i);
    // console.log(nextDate);
    nextDate = nextDate.toISOString().slice(0, 10);
    dates.push(nextDate);
  }
  let updatedForcastData = forcastData.list;
  // console.log(dates);
  updatedForcastData = updatedForcastData.filter((el) =>
    dates.includes(el.dt_txt.slice(0, 10))
  );
  // console.log(updatedForcastData);
  console.log(updatedForcastData);
};

updateForcast();

// invatation banner

const bannerDiv = document.querySelector("#banner");
const bannerButton = document.querySelector("#banner-button");
if (new Date().getDay() <= 3) {
  bannerDiv.style.display = "block";
}

bannerButton.addEventListener("click", () => {
  bannerDiv.style.display = "none";
});
