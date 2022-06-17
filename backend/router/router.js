const express = require("express");
const router = express.Router();
const { login } = require("../controller/login");
const { register } = require("../controller/register");

//LOGIN SECTION
router.route("/login").post(login);

//REGISTER SECTION
router.route("/register").post(register);

module.exports = router;
