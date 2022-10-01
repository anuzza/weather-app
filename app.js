const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=a3728fe62d0c3496494bbad3152f9a1b&query=37.8267,-122.4233";
request(
  {
    url: url,
  },
  (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
  }
);
