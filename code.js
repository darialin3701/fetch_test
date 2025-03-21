document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ebbe750a60644d6bb7f160946252103';

  const fetchData = async (cityName) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`)
    const responesJSON = await response.json();
    return responesJSON;
  }

  fetchData ('Odintsovo');
  fetchData ('London');
  fetchData ('Moscow');
  fetchData ('Sochi');
});
