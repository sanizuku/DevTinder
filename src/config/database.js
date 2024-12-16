const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sandeeps16x:5YjbnQHGqbPDS1dD@namaste-node.gxur1.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
