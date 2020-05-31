const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://TheFarrier:Password1@ds347298.mlab.com:47298/heroku_sxbdh51b");


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});