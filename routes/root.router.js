const express = require("express");

rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Hello worldsdsa",
    caption: "Complete Node asddsd js",
  });
});

module.exports = rootRouter;
