var input = document.querySelector(".input_text");
var button = document.querySelector(".submit");
var today = moment();
var latitude;
var longitude;

button.addEventListener("click", function (event) {
  event.preventDefault();
  $("#currentDay").text(today.format("MMMM Do, YYYY"));
  getCurrentWeather();
  // getWeatherForecast();
  // displayCurrent();
  // displayForecast();

  //Saving to local Storage
  // for (var i = 0; i < input.value.length; i++) {
  //   localStorage.setItem('city: ' + i, input.value);
  // }

// Store
localStorage.setItem("city", input.value);
// Retrieve
document.getElementById("resultCity").textContent = localStorage.getItem("city");

});

$('#clear').on('click', (event) => {
  localStorage.clear();
  document.getElementById("resultCity").textContent = " ";
})

// API call for current weather
var getCurrentWeather = function () {
  var requestURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    ",us&APPID=bd82b02fbda745ecf29d9df8a99a2118";
  // var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Sacramento,us&APPID=bd82b02fbda745ecf29d9df8a99a2118';

  fetch(requestURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // console.log(data.main.temp);

        ////////////////////////////// Current Weather API //////////////////////////////
        var currentCity = data.name;
        document.getElementById("currentCity").textContent = currentCity;
        // console.log(data.name);

        var currentIcon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        // document.getElementById("currentIcon").textContent = currentIcon;
        document.getElementById("currentIcon").src = currentIcon;
        // console.log(data.weather[0].icon);

        var img = document.createElement('img');
        console.log(img);
        console.log('1')
        img.src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(img);
        console.log('2')
        document.getElementById('test').appendChild(img);

        var currentTemp = Math.floor((data.main.temp - 273.15) * (9 / 5) + 32);
        document.getElementById("currentTemp").textContent =
          "Temperature: " + currentTemp + "°F";
        // console.log(currentTemp);

        var currentHumidity = data.main.humidity;
        document.getElementById("currentHumidity").textContent =
          "Humidity: " + currentHumidity + "%";
        // console.log(data.main.humidity);

        var currentWind = data.wind.speed;
        document.getElementById("currentWind").textContent =
          "Wind Speed: " + currentWind + "MPH";
        // console.log(data.wind.speed);

        // console.log("data is here");
        // var latitude;
        latitude = data.coord.lat;
        // console.log(latitude);
        // var longitude;
        longitude = data.coord.lon;
        // console.log(longitude);
      });
    }
  });
  getWeatherForecast();
  displayCurrent();
  displayForecast();
};

// API call for Weather Forecast
var getWeatherForecast = function () {
  var requestURL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=bd82b02fbda745ecf29d9df8a99a2118";
  // var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.4666&lon=-121.3177&appid=bd82b02fbda745ecf29d9df8a99a2118";

  fetch(requestURL).then(function (response) {
    // console.log(response)
    if (response.ok) {
      response.json().then(function (data) {
        // Gets UV
        var currentUV = data.current.uvi;
        document.getElementById("currentUV").textContent =
          "UV Index: " + currentUV;
        // console.log(data.current.uvi);

        // Adds a color to UV depending how much light is outside
        if (currentUV >= 7) {
          document.getElementById("currentUV").style.backgroundColor = "red";
        } else if (currentUV >= 3) {
          document.getElementById("currentUV").style.backgroundColor = "orange";
        } else {
          document.getElementById("currentUV").style.backgroundColor = "yellow";
        }

        ////////////////////////////// Day 1 for 5 day forecast //////////////////////////////
        let dayOneDate = moment();
        $("#dayOneDate").text(dayOneDate.format("MMMM Do, YYYY"));
        // console.log(dayOneDate)

        var dayOneTemp = Math.floor(
          (data.daily[0].temp.day - 273.15) * (9 / 5) + 32
        );
        document.getElementById("dayOneTemp").textContent =
          "Temperature: " + dayOneTemp + "°F";
        // console.log(dayOneTemp)

        var dayOneHumidity = data.daily[0].humidity;
        document.getElementById("dayOneHumidity").textContent =
          "Humidity: " + dayOneHumidity + "%";
        // console.log(dayOneHumidity);

        ////////////////////////////// Day 2 for 5 day forecast //////////////////////////////
        let dayTwoDate = moment().add(1, "days");
        $("#dayTwoDate").text(dayTwoDate.format("MMMM Do, YYYY"));

        var dayTwoTemp = Math.floor(
          (data.daily[1].temp.day - 273.15) * (9 / 5) + 32
        );
        document.getElementById("dayTwoTemp").textContent =
          "Temperature: " + dayTwoTemp + "°F";
        // console.log(dayTwoTemp)

        var dayTwoHumidity = data.daily[1].humidity;
        document.getElementById("dayTwoHumidity").textContent =
          "Humidity: " + dayTwoHumidity + "%";
        // console.log(data.daily[0].humidity);

        ////////////////////////////// Day 3 for 5 day forecast //////////////////////////////
        let dayThreeDate = moment().add(2, "days");
        $("#dayThreeDate").text(dayThreeDate.format("MMMM Do, YYYY"));

        var dayThreeTemp = Math.floor(
          (data.daily[2].temp.day - 273.15) * (9 / 5) + 32
        );
        document.getElementById("dayThreeTemp").textContent =
          "Temperature: " + dayThreeTemp + "°F";
        // console.log(dayTwoTemp)

        var dayThreeHumidity = data.daily[2].humidity;
        document.getElementById("dayThreeHumidity").textContent =
          "Humidity: " + dayThreeHumidity + "%";
        // console.log(data.daily[0].humidity);

        ////////////////////////////// Day 4 for 5 day forecast //////////////////////////////
        let dayFourDate = moment().add(3, "days");
        $("#dayFourDate").text(dayFourDate.format("MMMM Do, YYYY"));

        var dayFourTemp = Math.floor(
          (data.daily[3].temp.day - 273.15) * (9 / 5) + 32
        );
        document.getElementById("dayFourTemp").textContent =
          "Temperature: " + dayFourTemp + "°F";
        // console.log(dayTwoTemp)

        var dayFourHumidity = data.daily[3].humidity;
        document.getElementById("dayFourHumidity").textContent =
          "Humidity: " + dayFourHumidity + "%";
        // console.log(data.daily[0].humidity);

        ////////////////////////////// Day 5 for 5 day forecast //////////////////////////////
        let dayFiveDate = moment().add(4, "days");
        $("#dayFiveDate").text(dayFiveDate.format("MMMM Do, YYYY"));

        var dayFiveTemp = Math.floor(
          (data.daily[4].temp.day - 273.15) * (9 / 5) + 32
        );
        document.getElementById("dayFiveTemp").textContent =
          "Temperature: " + dayFiveTemp + "°F";
        // console.log(dayTwoTemp)

        var dayFiveHumidity = data.daily[4].humidity;
        document.getElementById("dayFiveHumidity").textContent =
          "Humidity: " + dayFiveHumidity + "%";
        // console.log(data.daily[0].humidity);

        // console.log("second data is here");
        // console.log(data)
        // getCurrentWeather();
      });
    }
  });
  // getCurrentWeather();
    // displayCurrent();
  // displayForecast();
};

function displayCurrent() {
  var x = document.querySelector(".top-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function displayForecast() {
  var x = document.querySelector(".bottom-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

