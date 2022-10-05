// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 8080;

// Application middlewares
app.use([express.json()]);

// Set view engine
app.set("view engine", "ejs");

// Main routes
app.get("/", (req, res) => res.status(200).render("index"));

// Application error handler
app.use(errorHandler);

// Connect database
const main = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/poll");
    console.log(`Database is connected.`);
    // Create server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Global error handler
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});

// Call the database connection and server connection
main();
