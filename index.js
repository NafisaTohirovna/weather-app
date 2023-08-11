// const API = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8641075dda9ea5d5c961c48c00929bec'
const cityInput = document.querySelector("#cityInput"),
  cityName = document.querySelector("#cityName"),
  weatherStatus = document.querySelector("#weatherStatus"),
  gradus = document.querySelector("#gradus"),
  weekday = document.querySelector("#weekday"),
  data = new Date();
weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


cityInput.addEventListener("input", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=8641075dda9ea5d5c961c48c00929bec`
  )
    .then((value) => value.json())
    .then((city) => {
      cityName.innerHTML = `${city.name} . ${city.sys.country}`;
      weatherStatus.innerHTML = city.weather[0].main;
      gradus.innerHTML = `${Math.floor(city.main.temp)}°C`;
      weekday.textContent = weekDays[data.getDay()];
    })
    .catch((err) => console.log(err));
});
