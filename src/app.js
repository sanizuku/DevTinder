const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handle the route user!1");
    // res.send("Response!1");
    next();
  },

  (req, res, next) => {
    next();
  },

  (req, res) => {
    console.log("Handle the route user!3");
    res.send("Response!3");
  }
);

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777...");
});
