exports.healthHandler = async (_req, res, next) => {
  try {
    res.status(200).json({ message: "Health route is worked successfully." });
  } catch (error) {
    error.status = 501;
    error.message = "Website health is bad.";
    next(error);
  }
};
