const weatherDescriptionSpan = document.querySelector("#weather-description");
const temperatureSpan = document.querySelector("#weather-temperature");
const humiditySpan = document.querySelector("#weather-humidity");
// const windchillSpan = document.querySelector("#windchill");
const weatherIcon = document.querySelector("#weather-icon");
// const forcastCard = document.querySelector("#forcast");
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
