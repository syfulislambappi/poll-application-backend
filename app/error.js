exports.errorHandler = async (_req, _res, next) => {
  try {
    const error = new Error("Resource not found.");
    error.status = 404;
    return error;
  } catch (error) {
    next(error);
  }
};
