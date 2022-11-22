

var apiKey = "ae7e2452425830b58eb640fb68e72aa6";
var temp = document.querySelector("#temperature");
var humid = document.querySelector("#humidity");
var wind = document.querySelector("#wind-speed");

const uvi = document.querySelector("#uvi");
var searchForm = document.querySelector("#citySearch");

var dataStore = JSON.parse(localStorage.getItem('cities')) || [];




function processWeatherData(data) {

  console.log(data);
};








var cityInput = document.querySelector('#city-input')

var searchBtn = document.querySelector('#search-city');
searchBtn.addEventListener('click', function () {
  var city = cityInput.value;
  console.log(city)

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +
    "&appid=" + apiKey;

  fetch(queryURL)
    .then(response => {
      if (!response.ok) {
        throw response; //check the http response code and if isn't ok then throw the response as an error
      }

      return response.json(); //parse the result as JSON

    }).then(response => {
      //response now contains parsed JSON ready for use
      processWeatherData(response);

    }).catch((errorResponse) => {
      if (errorResponse.text) { //additional error information
        errorResponse.text().then(errorMessage => {
          //errorMessage now returns the response body which includes the full error message
        })
      } else {
        //no additional error information 
      }
    });

});
//lat and lon
// fetch('api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=' + apiKey)

// var urlIcon;
//     if (location.protocol === 'http:') {
//         urlIcon = 'http://openweathermap.org/img/wn/';
//      } else {
//         urlIcon = 'https://openweathermap.org/img/wn/';
//      }
// look for UV index by latitude and longitude coordinates

//I want to display 5 day forecast with the information 
// list.main.humidity
// list.wind.speed
// list.main.temp
// temp.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
//     humid.innerHTML = "Humidity: " + response.data.main.humidity + "%";
//     wind.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
//   