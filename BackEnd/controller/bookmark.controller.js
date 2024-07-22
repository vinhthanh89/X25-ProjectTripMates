import Bookmark from "../model/bookmark.model.js";

export const bookmarkTopic = async (req, res) => {
  try {
    const userLogin = req.user;
    const topicId = req.body.topicId;

    const bookmarkTopicByUserId = await Bookmark.findOneAndUpdate(
      { userId: userLogin },
      {
        $push: {
          bookmarksTopic: {
            topic: topicId,
          },
        },
      },
      { new: true, upsert: true }
    );

    return res.status(201).json({
      message: "Bookmark topic success",
      topics: bookmarkTopicByUserId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const unBookmarkTopic = async (req, res) => {
  try {
    const userLogin = req.user;
    const topicId = req.body.topicId;

    const bookmarkTopicByUserId = await Bookmark.findOneAndUpdate(
      { userId: userLogin },
      {
        $pull: {
          bookmarksTopic: {
            topic: topicId,
          },
        },
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Bookmark topic success",
      topics: bookmarkTopicByUserId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const checkBookmarkTopic = async (req, res) => {
  try {
    const userLogin = req.user;
    const topicId = req.params.topicId;

    const findBookmarkTopicByUser = await Bookmark.findOne({
      userId: userLogin,
    });

    if (!findBookmarkTopicByUser) {
      return res.status(200).json({
        message: "check bookmarks success",
        checkBookmark: false,
      });
    }

    if (findBookmarkTopicByUser) {
      const bookmarksTopic = findBookmarkTopicByUser.bookmarksTopic;
      const checkBookmark = bookmarksTopic.some(
        (bookmark) => bookmark.topic.toString() === topicId
      );

      return res.status(200).json({
        message: "check success",
        checkBookmark: checkBookmark ? true : false,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getBookmarkTopic = async (req, res) => {
  try {
    const userId = req.params.userId;

    const findBookmarkTopicByUserId = await Bookmark.findOne({
      userId: userId,
    }).populate({
      path: "bookmarksTopic.topic",
      populate: {
        path: "location",
        model: "locations",
      },
    });

    if (!findBookmarkTopicByUserId) {
      return res.status(200).json({
        message: "No Bookmark Topics",
        bookmarksTopic: [],
      });
    }

    if (findBookmarkTopicByUserId) {
      return res.status(200).json({
        message: "Get Bookmark Topic success",
        bookmarksTopic: findBookmarkTopicByUserId.bookmarksTopic,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
