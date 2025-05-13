// Fetching weather data


function fetchData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getWeatherByLocation(location, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getWeatherByCoordinates(latitude, longitude, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getMultipleWeatherLocations(locations, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/group?cnt=10&id=${locations.join(',')}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getWeatherForecastByLocation(location, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
function getWeatherForecastByCoordinates(latitude, longitude, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
function getWeatherForecastByMultipleLocations(locations, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/group?cnt=10&id=${locations.join(',')}&appid=${apiKey}&units=metric&dt=2160`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getWeatherForecastByCityName(cityName, country, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${country}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getWeatherForecastByPostalCode(postalCode, country, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${postalCode},${country}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function getWeatherForecastByCoordinates(lat, lon, apiKey) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}