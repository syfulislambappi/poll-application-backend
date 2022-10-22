const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const middleware = [express(), morgan("dev"), cors()];

module.exports = middleware;
