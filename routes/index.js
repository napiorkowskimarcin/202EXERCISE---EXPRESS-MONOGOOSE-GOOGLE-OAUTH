const express = require("express");
const router = express.Router();

//Login-landing page
//route Get/
router.get("/", (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

//Dashboard
//Get/dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
