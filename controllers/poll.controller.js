const Poll = require("../model/Poll");

exports.createPollHandler = async (req, res, next) => {
  try {
    let { title, description, options } = req.body;

    options = options.map((option) => {
      return {
        name: option,
        vote: 0,
      };
    });

    const poll = new Poll({ title, description, options });
    await poll.save();
    res.status(201).json({ message: "Poll is created.", poll });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPollHandler = async (_req, res, next) => {
  try {
    const polls = await Poll.find({}).exec();
    res.status(200).json(polls);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getSinglePollHandler = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const poll = await Poll.find({ pollId }).exec();
    res.status(200).json(poll);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateVoteHandler = async (req, res, next) => {
  try {
    const { voteId, pollId } = req.body;

    const poll = await Poll.findOne({ pollId: pollId });

    let options = [...poll.options];
    let index = options.findIndex((v) => v.id === voteId);
    options[index].vote = options[index].vote + 1;
    let totalVote = poll.totalVote + 1;

    await Poll.findOneAndUpdate(
      { pollId: pollId },
      { $set: { options, totalVote } }
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
};
