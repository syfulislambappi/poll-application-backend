const router = require("express").Router();
const {
  createPollHandler,
  getPollHandler,
} = require("../controllers/poll.controller");

router.get("/", getPollHandler);
router.post("/create", createPollHandler);

module.exports = router;
