const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    //read the token from req cookies
    //verify/validate token
    //find the user
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).send("Please Login");
    }
    const decodedMessage = await jwt.verify(token, process.env.JWT_SECRET);
    const { _id } = decodedMessage;
    // console.log("LOGGED IN USER IS : " + _id);
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User Not Found");
    }
    req.user = user; //attaching user to req object
    next(); //call req handler
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
};

module.exports = { userAuth };
