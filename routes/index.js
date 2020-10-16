const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth.js");

//Login-landing page
//route Get/
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

//Dashboard
//Get/dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
  res.render("dashboard", {
    name: req.user.firstName,
  });
});

module.exports = router;
