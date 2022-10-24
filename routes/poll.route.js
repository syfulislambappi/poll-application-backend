const router = require("express").Router();
const {
  createPollHandler,
  getPollHandler,
  getSinglePollHandler,
} = require("../controllers/poll.controller");

router.get("/", getPollHandler);
router.post("/create", createPollHandler);
router.get("/:pollId", getSinglePollHandler);

module.exports = router;
