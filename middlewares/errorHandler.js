const errorHandler = (err, req, res, next) => {
  console.log(`err ${err.message}`);
  const status = err.status || 400;
  res.status(status).send(err.message);
};

module.exports = errorHandler;
