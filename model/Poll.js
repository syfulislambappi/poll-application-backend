const { Schema, model } = require("mongoose");
const shortid = require("shortid");

const pollSchema = new Schema({
  pollId: {
    type: String,
    default: shortid.generate(),
    required: [true, "Poll id must be inserted."],
  },
  title: {
    type: String,
    required: [true, "Poll title must be inserted."],
  },
  description: {
    type: String,
    required: [true, "Poll description must be inserted."],
  },
  options: [{ body: String, value: { type: String, default: 0 } }],
});

const Poll = model("Poll", pollSchema);

module.exports = Poll;
