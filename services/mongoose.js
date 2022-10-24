const mongoose = require("mongoose");

const uri = process.env.URI;

const dbConnection = async () => {
  try {
    await mongoose.connect(uri, { connectTimeoutMS: 2000 });
    console.log("Database is connected.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
