const mongoose = require("mongoose");

const uri = process.env.URI;

const run = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is connected.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = run;
