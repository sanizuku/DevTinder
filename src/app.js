const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Sandeep", lastName: "Singh" });
});
app.post("/user", (req, res) => {
  res.send("user data Updated successfully");
});
app.delete("/user", (req, res) => {
  res.send("user data Deleted Successfully");
});

app.use("/test", (req, res) => {
  res.send("helo hello");
});

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777...");
});
