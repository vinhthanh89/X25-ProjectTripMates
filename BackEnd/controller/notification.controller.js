import Topic from "../model/topic.model.js";
import Notification from "../model/notification.model.js";

export const getNotificationByUserId = async (req, res) => {
  try {
    const userLogin = req.user;

    const findUserNotification = await Notification.findOne({
      userId: userLogin,
    }).populate("notifications.interactUserId notifications.topicId");

    if (!findUserNotification) {
      return res.status(200).json({
        message: "Get notification successe",
        notifications: [],
      });
    }

    if (findUserNotification) {
      return res.status(200).json({
        message: "Get notification success",
        notifications: findUserNotification.notifications,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const addNotification = async (req, res) => {
  try {
    const userLogin = req.user;
    const topicId = req.params.topicId;
    const interaction = req.body.interaction;


    const findTopic = await Topic.findById(topicId);
    if (!findTopic) {
      return res.status(404).json({
        message: "Topic Not Found",
      });
    }

    if (findTopic) {
      const userCreatedId = findTopic.userCreated.toString();
      console.log(userCreatedId);

      if(userLogin === userCreatedId){
        return res.status(200).json({
          message : 'User login is user created'
        })
      }

      if (userLogin !== userCreatedId) {
        const addNotification = await Notification.findOneAndUpdate(
          { userId: userCreatedId },
          {
            $push: {
              notifications: {
                interactUserId: userLogin,
                topicId: findTopic._id,
                interaction: interaction,
              },
            },
          },
          { new: true, upsert: true }
        );

        return res.status(201).json({
          message: "Add Notification Success",
          notifications: addNotification,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const addInviteNotification = async (req, res) => {
  try {
    const userLogin = req.user;
    const topicId = req.params.topicId;
    const pickedUser = req.body;

    const pickedUsersId = pickedUser.map((user) => user._id);

    console.log(topicId);
    console.log(pickedUsersId);

    const findTopic = await Topic.findById(topicId);
    if (!findTopic) {
      return res.status(404).json({
        message: "Topic Not Found",
      });
    }

    if (findTopic) {
      pickedUsersId.forEach(async (user) => {
        await Notification.findOneAndUpdate(
          { userId: user },
          {
            $push: {
              notifications: {
                interactUserId: userLogin,
                topicId: findTopic._id,
                interaction: "invite",
              },
            },
          },
          { new: true, upsert: true }
        );
      });

      return res.status(200).json({
        message: "add invite notification success",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const updateIsReadNotification = async (req, res) => {
  try {
    const userLogin = req.user;
    const notificationId = req.body.notificationsId;

    const findNotification = await Notification.findOneAndUpdate(
      { userId: userLogin, "notifications._id": notificationId },
      { $set: { "notifications.$.isRead": true } },
      { new: true }
    ).populate("notifications.interactUserId notifications.topicId");

    return res.status(200).json({
      message: "Update success",
      notifications: findNotification.notifications,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};
