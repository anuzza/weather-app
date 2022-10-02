const request = require("request");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (!location) {
  console.log("please provide an address");
} else {
  geoCode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
