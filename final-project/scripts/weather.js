const weatherDescriptionSpan = document.querySelector("#weather-description");
const temperatureSpan = document.querySelector("#weather-temperature");
const humiditySpan = document.querySelector("#weather-humidity");
// const windchillSpan = document.querySelector("#windchill");
const weatherIcon = document.querySelector("#weather-icon");
const forcastCard = document.querySelector("#forcast");
const LAT = 33.1215196;
const LON = -117.287802;
const apiKey = "1e82d7865ded7fa3165d96b9bdd12312";

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
  //   console.log(weather);
  humiditySpan.textContent = Math.round(weather.main.humidity);
  weatherDescriptionSpan.textContent = weather.weather[0].description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  weatherIcon.alt = weather.weather[0].description;
};

updateWeather();

const getForcast = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${apiKey}&units=imperial`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};
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
  // console.log(updatedForcastData);
  updatedForcastData = updatedForcastData.filter(
    (el) =>
      dates.includes(el.dt_txt.slice(0, 10)) &&
      el.dt_txt.slice(11, -1) == "09:00:0"
  );
  // console.log(updatedForcastData);
  updatedForcastData.forEach((date, index) => {
    const weatherDataTemplate = `
    <header>
      <span>${date.dt_txt.split(" ")[0]}</span>
      </header>
      <p>
      ${date.weather[0].description}
      </p>
      <img alt="${
        date.weather[0].description
      }" src="https://openweathermap.org/img/wn/${date.weather[0].icon}.png">
        
    `;
    const newSection = document.createElement("section");
    newSection.innerHTML = weatherDataTemplate;
    forcastCard.appendChild(newSection);
  });
};

updateForcast();
