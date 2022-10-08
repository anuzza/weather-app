const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

//Define paths for Express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

//Setup hadlerbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectory));

//app.com
//app.com/help
//app.com/about

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Anuja Sharma",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Anuja Sharma",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Anuja sharma",
    message: "Some helpful text",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "you must provide an address",
    });
  }
  geoCode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({
            error: "Unable to fetch weather data",
          });
        }
        res.send({
          forecast: forecastData,
          location: location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query);
  res.send({
    producct: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Anuja Sharma",
    errorMsg: "Help article not found!",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Anuja Sharma",
    errorMsg: "Page not found!",
  });
});

app.listen(port, () => {
  console.log("Server is up on port 3000");
});
