require("dotenv").config();
const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");

// Initilize app
const app = express();

app.use(require("./middleware"));

app.use(require("./routes"));

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
