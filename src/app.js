const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
app.post("/Signup", async (req, res) => {
  //creating a new instance of the user model
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "Sachin@Tendulkar.com",
    password: "Sahin@123",
  });
  await user.save();
  res.send("User Added Successfully");
});
connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
