function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.sys.country;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let minElement = document.querySelector("#min");
  minElement.innerHTML = Math.round(response.data.main.temp_min);

  let maxElement = document.querySelector("#max");
  maxElement.innerHTML = Math.round(response.data.main.temp_max);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let feelsElement = document.querySelector("#feels");
  feelsElement.innerHTML = Math.round(response.data.main.feels_like);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].main;
}

let apiKey = "fd8d1409866553a493730aeed9a355b9";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
