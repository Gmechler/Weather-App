$(document).ready(function() {
  var apiKey = "APPID=65c2d57d5385fc26b3814a24c68ff22b";
  var queryUrlBase = "http://api.openweathermap.org/data/2.5/";

  $("#searchButton").on("click", function() {
    var searchCity = $("#searchBox")
      .val()
      .trim();
    var queryURL = queryUrlBase + "weather?q=" + searchCity + "&" + apiKey;
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var tempF = (response.main.temp - 273.15) * 1.8 + 32;
      tempF = tempF.toFixed(2);
      $("#temp").text(tempF);
      $("#wind").text(response.wind.speed);
      lat = response.coord.lat;
      lon = response.coord.lon;
      console.log(lat, lon);
      queryURL = queryUrlBase + "uvi?" + apiKey + "&lat=" + lat + "&lon=" + lon;
      console.log(queryURL);
    });
    $.ajax({
      url: queryURL,
      method: "Get"
    }).then(function() {
      console.log();
    });
  });
});
