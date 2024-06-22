import Reaction from "../model/reaction.model.js";

export const getReactByTopicId = async (req, res) => {
  try {
    const userId = req.user;
    const topicId = req.params.topicId;

    const findReactByTopic = await Reaction.findOne({
      topicIdReaction: topicId,
    });

    if (!findReactByTopic) {
      return res.status(200).json({
        message: "Topic has no reactions yet",
        reactions: [],
      });
    }

    if (findReactByTopic) {
      return res.status(200).json({
        message: "Get React By Topic Successfully",
        reactions: findReactByTopic.reactions,
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
    });

    if (!findTopicReaction) {
      const newTopicReactions = await Reaction.create({
        topicIdReaction: topicId,
        reactions: [
          {
            userReaction: userId,
            react: "like",
          },
        ],
      });

      return res.status(201).json({
        message: "React Successfully",
        newTopicReactions,
      });
    }

    if (findTopicReaction) {
      const newTopicReactions = await Reaction.findOneAndUpdate(
        { topicIdReaction: topicId },
        {
            $push: {
              reactions: {
                userReaction: userId,
                react: 'like'
              }
            }
          },
      );

      return res.status(201).json({
        message: "React Successfully",
        newTopicReactions,
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
          reactions: { userReaction: userId },
        },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Remove React Successfull",
      newTopicReactions,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
