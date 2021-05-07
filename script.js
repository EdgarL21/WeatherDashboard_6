var questions = 'how do I get the icon?'

var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));





var getCity = function () {
    // var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',us&APPID=bd82b02fbda745ecf29d9df8a99a2118'
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=Sacramento,us&APPID=bd82b02fbda745ecf29d9df8a99a2118';
  
    fetch(requestURL)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            // displayRepos(data, city);
            console.log(data.main.temp);

            var currentCity = data.name;
            document.getElementById('currentCity').textContent = currentCity;
            console.log(data.name);

            var currentIcon = data.weather[0].icon;
            document.getElementById('currentIcon').textContent = currentIcon;
            console.log(data.weather[0].icon);

            var currentTemp =  Math.floor(((data.main.temp-273.15) * (9/5)) + 32);
            document.getElementById('currentTemp').textContent = "Temperature: " + currentTemp + "°F";
            console.log(currentTemp);

            var currentHumidity = data.main.humidity;
            document.getElementById('currentHumidity').textContent = "Humidity: " + currentHumidity + "%";
            console.log(data.main.humidity);

            var currentWind = data.wind.speed;
            document.getElementById('currentWind').textContent = "Wind Speed: " + currentWind + "MPH";
            console.log(data.wind.speed);



            console.log(data)
          });
        }
      })
  };

  getCity();

  
  




console.log('----------------------------------------------------------------------------------------------------')



  var getOneCall = function () {

    var requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.4666&lon=-121.3177&appid=bd82b02fbda745ecf29d9df8a99a2118";
  
    fetch(requestURL)
      .then(function (response) {
        console.log(response)
        if (response.ok) {
          response.json()
      .then(function (data) {
            // displayRepos(data, city);

            // Gets UV
            var currentUV = data.current.uvi;
            document.getElementById('currentUV').textContent = "UV Index: " + currentUV;
            console.log(data.current.uvi);

            // Adds a color to UV depending how much light is outside
            if (currentUV >= 8) {
              document.getElementById('currentUV').style.backgroundColor = "red"
            } else if (currentUV >= 3) {
              document.getElementById('currentUV').style.backgroundColor = "orange"
            } else {
              document.getElementById('currentUV').style.backgroundColor = "yellow"
            };



           ////////////////////////////// Day 1 for 5 day forecast//////////////////////////////
            let dayOneDate = moment();
            $("#dayOneDate").text(dayOneDate.format("MMMM Do, YYYY"));
            console.log(dayOneDate)

            var dayOneTemp =  Math.floor(((data.daily[0].temp.day-273.15) * (9/5)) + 32);
            document.getElementById('dayOneTemp').textContent = "Temperature: " + dayOneTemp + "°F";
            // console.log(dayOneTemp)

            var dayOneHumidity = data.daily[0].humidity;
            document.getElementById('dayOneHumidity').textContent = "Humidity: " + dayOneHumidity + "%";
            // console.log(dayOneHumidity);


           ////////////////////////////// Day 2 for 5 day forecast//////////////////////////////
            let dayTwoDate = moment().add(1,'days');
            $("#dayTwoDate").text(dayTwoDate.format("MMMM Do, YYYY"));

            var dayTwoTemp =  Math.floor(((data.daily[1].temp.day-273.15) * (9/5)) + 32);
            document.getElementById('dayTwoTemp').textContent = "Temperature: " + dayTwoTemp + "°F";
            // console.log(dayTwoTemp)

            var dayTwoHumidity = data.daily[1].humidity;
            document.getElementById('dayTwoHumidity').textContent = "Humidity: " + dayTwoHumidity + "%";
            // console.log(data.daily[0].humidity);

            ////////////////////////////// Day 3 for 5 day forecast//////////////////////////////
            let dayThreeDate = moment().add(2,'days');
            $("#dayThreeDate").text(dayThreeDate.format("MMMM Do, YYYY"));

            var dayThreeTemp =  Math.floor(((data.daily[2].temp.day-273.15) * (9/5)) + 32);
            document.getElementById('dayThreeTemp').textContent = "Temperature: " + dayThreeTemp + "°F";
            // console.log(dayTwoTemp)

            var dayThreeHumidity = data.daily[2].humidity;
            document.getElementById('dayThreeHumidity').textContent = "Humidity: " + dayThreeHumidity + "%";
            // console.log(data.daily[0].humidity);

            ////////////////////////////// Day 4 for 5 day forecast//////////////////////////////
            let dayFourDate = moment().add(3,'days');
            $("#dayFourDate").text(dayFourDate.format("MMMM Do, YYYY"));

            var dayFourTemp =  Math.floor(((data.daily[3].temp.day-273.15) * (9/5)) + 32);
            document.getElementById('dayFourTemp').textContent = "Temperature: " + dayFourTemp + "°F";
            // console.log(dayTwoTemp)

            var dayFourHumidity = data.daily[3].humidity;
            document.getElementById('dayFourHumidity').textContent = "Humidity: " + dayFourHumidity + "%";
            // console.log(data.daily[0].humidity);

            ////////////////////////////// Day 5 for 5 day forecast//////////////////////////////
            let dayFiveDate = moment().add(4,'days');
            $("#dayFiveDate").text(dayFiveDate.format("MMMM Do, YYYY"));

            var dayFiveTemp =  Math.floor(((data.daily[4].temp.day-273.15) * (9/5)) + 32);
            document.getElementById('dayFiveTemp').textContent = "Temperature: " + dayFiveTemp + "°F";
            // console.log(dayTwoTemp)

            var dayFiveHumidity = data.daily[4].humidity;
            document.getElementById('dayFiveHumidity').textContent = "Humidity: " + dayFiveHumidity + "%";
            // console.log(data.daily[0].humidity);


            // console.log(data.daily[0])
          });
        }
      })
  };

  getOneCall();








    // var getFutureCity = function () {
  //   var URL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Sacramento&APPID=bd82b02fbda745ecf29d9df8a99a2118';
  //     // var URL = "http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=bd82b02fbda745ecf29d9df8a99a2118";

  //   fetch(URL)
  //     .then(function (response) {
  //       console.log(response)
  //       if (response.ok) {
  //         console.log(response)
  //         response.json().then(function (data) {
  //           // displayRepos(data, city);
  //           console.log('hello')
  //           console.log(data);
  //           // var currentTemp =  Math.floor(((data.main.temp-273.15) * (9/5)) + 32);
  //           // document.getElementById('currentTemp').textContent = currentTemp
  //           // console.log(currentTemp);
  //         });
  //       }
  //     })
  // };

  // getFutureCity();




  // var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=bd82b02fbda745ecf29d9df8a99a2118";
  // fetch(requestUrl)
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log('Fetch Response \n-------------');
  //   console.log(data);
  // });