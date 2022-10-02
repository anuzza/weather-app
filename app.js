const request = require("request");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

geoCode("Philadelphia N", (error, data) => {
  console.log(error);
  console.log(data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
