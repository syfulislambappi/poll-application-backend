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

  options: {
    type: [{ name: String, vote: Number }],
    required: true,
  },
  totalVote: { type: Number, default: 0, required: true },
});

const Poll = model("Poll", pollSchema);

module.exports = Poll;
