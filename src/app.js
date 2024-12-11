const express = require("express");

const app = express();
app.use(
  "/admin",
  (req, res, next) => {
    console.log("Admin auth is getting checked");
    const token = "xyzz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
      res.status(401).send("unauthorized request");
    } else {
      next();
    }
  },
  (req, res) => {
    res.send("admin authenticated");
  }
);

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777...");
});
