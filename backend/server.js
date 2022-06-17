const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./router/router");
const jwt = require("jsonwebtoken");
const db = require("./config/database");

dotenv.config({ path: "./config/.env" });

db();

app.use(cors());

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ----> ${PORT}`);
});
