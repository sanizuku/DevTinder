const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    //logic of db call and get userData
    throw new Error("asls");
    res.send("user Data Send");
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    console.log("Error");
    res.status(500).send("something went wrong2");
  }
});

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777...");
});
