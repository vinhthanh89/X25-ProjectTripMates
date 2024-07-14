import Topic from "../model/topic.model.js";
import UserFollowing from "../model/userFollowing.model.js";

export const filterTopicByContinent = async (req, res) => {
  try {
    const userLogin = req.user;
    const query = req.query.continent;

    const findUserFollow = await UserFollowing.findOne({ userId: userLogin });

    if (!findUserFollow) {
      const usersFollowing = [];

      const filterTopicByContinent = await Topic.find({
        $or: [
          {
            isPrivate: false,
            userCreated: { $ne: userLogin },
            continent: query,
          },
          {
            isPrivate: true,
            userCreated: { $in: usersFollowing },
            continent: query,
          },
        ],
      }).populate("userCreated location userJoinTrip.userId");

      return res.status(200).json({
        message: "success",
        topics: filterTopicByContinent,
      });
    }

    if (findUserFollow) {
      const findUsersFollowing = findUserFollow.usersFollowing;
      const usersFollowing = findUsersFollowing.map((user) => user.userFollow);

      const filterTopicByContinent = await Topic.find({
        $or: [
          {
            isPrivate: false,
            userCreated: { $ne: userLogin },
            continent: query,
          },
          {
            isPrivate: true,
            userCreated: { $in: usersFollowing },
            continent: query,
          },
        ],
      }).populate("userCreated location userJoinTrip.userId");

      return res.status(200).json({
        message: "success",
        topics: filterTopicByContinent,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const filterTopicByTitle = async (req, res) => {
  try {
    const userLogin = req.user;
    const query = req.query.keyword;

    const findUserFollow = await UserFollowing.findOne({ userId: userLogin });

    if (!findUserFollow) {
      const usersFollowing = [];

      const filterTopicByContinent = await Topic.find({
        $or: [
          {
            isPrivate: false,
            userCreated: { $ne: userLogin },
            title: { $regex: query, $options: "i" },
          },
          {
            isPrivate: true,
            userCreated: { $in: usersFollowing },
            title: { $regex: query, $options: "i" },
          },
        ],
      }).populate("userCreated location userJoinTrip.userId");

      return res.status(200).json({
        message: "success",
        topics: filterTopicByContinent,
      });
    }

    if (findUserFollow) {
      const findUsersFollowing = findUserFollow.usersFollowing;
      const usersFollowing = findUsersFollowing.map((user) => user.userFollow);

      console.log(usersFollowing);

      const filterTopicByContinent = await Topic.find({
        $or: [
          {
            isPrivate: false,
            userCreated: { $ne: userLogin },
            title: { $regex: query, $options: "i" },
          },
          {
            isPrivate: true,
            userCreated: { $in: usersFollowing },
            title: { $regex: query, $options: "i" },
          },
        ],
      }).populate("userCreated location userJoinTrip.userId");

      return res.status(200).json({
        message: "success",
        topics: filterTopicByContinent,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
