document.addEventListener("DOMContentLoaded", async () => {
  const apiKey = 'ebbe750a60644d6bb7f160946252103';

  const fetchData = (cityName) => {
    feath ('http://api.weatherapi.com/v1/current.json?key=${apiKey}=${cityName}&aqi=no&lang=ru')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  
  fetchData ('Odintsovo');
  fetchData ('Moscow');
  fetchData ('London');
  fetchData ('Sochi');
});
