const express = require("express");

const app = express();

//app.com
//app.com/help
//app.com/about

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Anuja",
      age: 19,
    },
    {
      name: "Susan",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
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
