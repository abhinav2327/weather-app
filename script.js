const button =document.getElementById("search-button")
const input =document.getElementById("city-input")

const CityName =document.getElementById("cityname");
const CityTime =document.getElementById("citytime");
const CityTemp =document.getElementById("citytemp");

 async function getdata(cityName){
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=5f5725598b2941f7be754836250705&q=${cityName}&aqi=yes`);
  return await promise.json()
}

button.addEventListener("click" , async () => {
  const value=input.value ;
 const result=await getdata(value);
 CityName.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
 CityTime.innerText=result.location.localtime;
 CityTemp.innerText=result.current.temp_c; 
});