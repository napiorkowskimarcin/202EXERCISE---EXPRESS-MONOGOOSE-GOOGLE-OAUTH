const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth.js");
const Story = require("../models/Story");

//Show add page
//route Get/stories/add
router.get("/add", ensureAuth, (req, res) => {
  res.render("stories/add");
});

module.exports = router;
