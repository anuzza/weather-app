const request = require("request");

const forecast = (long, lat, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a3728fe62d0c3496494bbad3152f9a1b&query=" +
    long +
    "," +
    lat +
    "&units=f";
  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback("Unable to connect to weather services");
      } else if (body.error) {
        console.log("Unable to find the location");
      } else {
        callback(
          undefined,
          `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike}`
        );
      }
    }
  );
};

module.exports = forecast;
