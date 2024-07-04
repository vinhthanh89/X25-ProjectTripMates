import Comment from "../model/comment.model.js";
import Topic from "../model/topic.model.js";

export const getCommentByTopicId = async (req, res) => {
  try {
    const topicId = req.params.topicId;

    const commentByTopicId = await Comment.findOne({
      topicIdComment: topicId,
    }).populate("usersComment usersComment.userId");

    if (!commentByTopicId) {
      return res.status(200).json({
        message: "Get data comment success",
        usersComment: [],
      });
    }

    if (commentByTopicId) {
      return res.status(200).json({
        message: "Get data comment success",
        usersComment: commentByTopicId.usersComment,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const userId = req.user;
    const topicId = req.params.topicId;
    const comment = req.body.comment;

    const findTopic = await Topic.findById(topicId);
    if (!findTopic) {
      return res.status(404).json({
        message: "Topic Not Found",
      });
    }

    if (findTopic) {
      const commentsTopic = await Comment.findOneAndUpdate(
        { topicIdComment: topicId },
        {
          $push: {
            usersComment: {
              userId: userId,
              comment: comment,
            },
          },
        },
        { new: true, upsert: true }
      ).populate("usersComment usersComment.userId");

      return res.status(201).json({
        message: "user comment success",
        usersComment: commentsTopic.usersComment,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
