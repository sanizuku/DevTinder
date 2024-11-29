const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello server");
});
app.use("/hello", (req, res) => {
  res.send("helo hello");
});

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777...");
});
