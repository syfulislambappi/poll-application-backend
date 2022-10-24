require("dotenv").config();
const http = require("http");
const app = require("./app/app");
const dbConnection = require("./services/mongoose");

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

const run = async () => {
  try {
    await dbConnection();
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  } catch (error) {
    return error;
  }
};

run();
