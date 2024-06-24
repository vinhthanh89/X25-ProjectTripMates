import Reaction from "../model/reaction.model.js";

export const getReactByTopicId = async (req, res) => {
  try {
    const userId = req.user;
    const topicId = req.params.topicId;

    const findReactByTopic = await Reaction.findOne({
      topicIdReaction: topicId,
    }).populate('usersReaction usersReaction.userId')

    if (!findReactByTopic) {
      return res.status(200).json({
        message: "Topic has no reactions yet",
        reactions: [],
      });
    }

    if (findReactByTopic) {
      return res.status(200).json({
        message: "Get React By Topic Successfully",
        reactions: findReactByTopic.usersReaction
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const reactTopic = async (req, res) => {
  try {
    const userId = req.user;
    const topicId = req.params.topicId;

    const findTopicReaction = await Reaction.findOne({
      topicIdReaction: topicId,
    }).populate('usersReaction usersReaction.userId');

    if (!findTopicReaction) {
      const newTopicReactions = await Reaction.create({
        topicIdReaction: topicId,
        usersReaction: [
          {
            userId: userId,
            react: "like",
          },
        ],
      });

      return res.status(201).json({
        message: "React Successfully",
        reactions : newTopicReactions.usersReaction
      });
    }

    if (findTopicReaction) {
      const newTopicReactions = await Reaction.findOneAndUpdate(
        { topicIdReaction: topicId },
        {
            $push: {
              usersReaction: {
                userId: userId,
                react: 'like'
              }
            }
          },{new : true}
      ).populate('usersReaction usersReaction.userId');

      return res.status(201).json({
        message: "React Successfully",
        reactions : newTopicReactions.usersReaction,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const removeReact = async (req, res) => {
  try {
    const userId = req.user;
    const topicId = req.params.topicId;

    const newTopicReactions = await Reaction.findOneAndUpdate(
      { topicIdReaction: topicId },
      {
        $pull: {
          usersReaction: { userId: userId },
        },
      },
      { new: true }
    ).populate('usersReaction usersReaction.userId');

    return res.status(200).json({
      message: "Remove React Successfull",
      reactions : newTopicReactions.usersReaction
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
