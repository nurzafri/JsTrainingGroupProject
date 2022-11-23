var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apik = "3045dd712ffe6e702e3245525ac7fa38";

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.
function convertion(val) {
  return (val - 273).toFixed(2);
}

//Fetch all the information with the help of fetch method
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    //.then(data => console.log(data))

    .then((data) => {
      var nameval = "";
      var desc = "";
      var tempature = "";
      var windSpeed = "";
      var icon = "";
      data.weather.forEach((w) => {
        desc = w.description;
        icon = w.icon;
      });
      //Display data into HTML page
      city.innerHTML = `Weather of <span>${data.name} <img src="http://openweathermap.org/img/wn/${icon}@2x.png" width="60" height="60"></span>`;
      temp.innerHTML = `Temperature: <span>${convertion(
        data.main.temp
      )} C</span>`;
      description.innerHTML = `Sky Conditions: <span> ${desc}`;
      wind.innerHTML = `Wind Speed: <span>${data.wind.speed} km/h<span>`;
    })
    .catch((err) => alert("You entered Wrong city name"));
});
