const router = require("express").Router();
const { healthHandler } = require("./controller");

router.use("/api/v1/poll", require("../routes/poll.route"));
router.all("/health", healthHandler);

module.exports = router;
