const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=a3728fe62d0c3496494bbad3152f9a1b&query=37.8267,-122.4233&units=f";
request(
  {
    url: url,
    json: true,
  },
  (error, response) => {
    if (error) {
      console.log("Unable to connect to weather services!");
    } else if (response.body.error) {
      console.log("Unable to find the location");
    } else {
      console.log(
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike}`
      );
    }
  }
);

// Geocoding
// Address=>Lat/Long=>Weather

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%Angeles.json?access_token=pk.eyJ1IjoicmlzaGFiaHN0aGEiLCJhIjoiY2txcmE2c2x6MXA4czJ1bzh3aDZqc3UwZSJ9.f_hBTLICQKOvpfNmw8qYIg&limit=1";
request(
  {
    url: geocodeUrl,
    json: true,
  },
  (error, response) => {
    if (error) {
      console.log("Unable to connect weather services");
    } else if (response.body.features.length === 0) {
      console.log("Unable to find the location");
    } else {
      const longitude = response.body.features[0].center[0];
      const latitude = response.body.features[0].center[1];
      console.log(latitude, longitude);
    }
  }
);
