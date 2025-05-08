const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const CityName = document.getElementById("cityname");
const CityTime = document.getElementById("citytime");
const CityTemp = document.getElementById("citytemp");

async function getdata(cityName) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5f5725598b2941f7be754836250705&q=${cityName}&aqi=yes`);
    const result = await response.json();
    return result;
  } catch (error) {
    alert("Failed to fetch weather data.");
    console.error(error);
  }
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getdata(value);
  if (result) {
    CityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    CityTime.innerText = result.location.localtime;
    CityTemp.innerText = result.current.temp_c;
  }
});
