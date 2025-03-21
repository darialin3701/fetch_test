document.addEventListener("DOMContentLoaded", () => {
  const apiKey = 'ebbe750a60644d6bb7f160946252103';

  const searchText = document.getElementById('searchText');
  const buttonSearch = document.getElementById('buttonSearch');
  const tableData = document.getElementById('tableData');

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no&lang=ru`)
      const responesJSON = await response.json();
      return responesJSON;
    } catch (error) {
      console.log('error', error);
    }
  }

  buttonSearch.addEventListener('click', async () => {
    const name = searchText.value;
    if (!name) {
      alert('Введите название города');
    } else {
      const data = await fetchData(name);
      console.log(data);
    }
  })
});
