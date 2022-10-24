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
    next(error);
  }
};

exports.getPollHandler = async (_req, res, next) => {
  try {
    const polls = await Poll.find({}).exec();
    res.status(200).json(polls);
  } catch (error) {
    next(error);
  }
};
