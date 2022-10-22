exports.notFoundHandler = async (_req, _res, next) => {
  try {
    const error = new Error("Resource not found.");
    error.status = 404;
    return error;
  } catch (error) {
    next(error);
  }
};

exports.errorHandler = (err, _req, res, _next) => {
  if (!!err.status) {
    return res.status(err.status).json({ message: err.message });
  } else {
    return res.status(501).json({ message: "Internal Server Error." });
  }
};
