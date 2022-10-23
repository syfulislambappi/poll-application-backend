require("dotenv").config();
const express = require("express");
const run = require("../services/mongoose");
const { notFoundHandler, errorHandler } = require("./error");

// Database connection
run();
// Initilize app
const app = express();

app.use(require("./middleware"));

app.use(require("./routes"));

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
