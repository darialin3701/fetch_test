document.addEventListener("DOMContentLoaded", async () => {
  const apiKey = 'ebbe750a60644d6bb7f160946252103';

  const fetchData = (cityName) => {
    try {
      const response = await feath ('http://api.weatherapi.com/v1/current.json?key=${apiKey}=${cityName}&aqi=no&lang=ru')
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
  
  fetchData ('Odintsovo');
  fetchData ('Moscow');
  fetchData ('London');
  fetchData ('Sochi');
});
