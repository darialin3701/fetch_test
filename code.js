document.addEventListener("DOMContentLoaded", async () => {
  const apiKey = 'ebbe750a60644d6bb7f160946252103';

  try {
    const response = await feath ('http://api.weatherapi.com/v1/current.json?key=ebbe750a60644d6bb7f160946252103&q=London&aqi=no')
    console.log(response);
  } catch (error) {
    console.log(error)
  }
});
