const router = require("express").Router();
const {
  createPollHandler,
  getPollHandler,
  getSinglePollHandler,
  updateVoteHandler,
} = require("../controllers/poll.controller");

router.get("/", getPollHandler);
router.post("/create", createPollHandler);
router.route("/:pollId").get(getSinglePollHandler).patch(updateVoteHandler);

module.exports = router;
