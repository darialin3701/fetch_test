document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ebbe750a60644d6bb7f160946252103';

  const fetchData = async (cityName) => {
    const response = await feath('http://api.weatherapi.com/v1/current.json?key=${apiKey}=${cityName}&aqi=no&lang=ru')
    console.log(response);
  }
  
  fetchData ('Odintsovo');
  fetchData ('Moscow');
  fetchData ('London');
  fetchData ('Sochi');
});
