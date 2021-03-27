const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to Alpha Team DevOps");
});
app.get("/new", function (req, res) {
  res.send("Alpha Team Welcomes you");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
