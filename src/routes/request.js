const express = require("express");
const { userAuth } = require("../middlewares/auth");
const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  //send connection request
  console.log("sending request");
  res.send(user.firstName + "sent the connection request !!");
});

module.exports = requestRouter;
