const path = require("path");
const express = require("express");

const app = express();

const publicDirectory = path.join(__dirname, "../public");

app.set("view engine", "hbs");
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
    title: "help",
    message: "some helpful text",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "it is snowing",
    location: "Philadelhia",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
