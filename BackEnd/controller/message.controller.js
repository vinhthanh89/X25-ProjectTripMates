// import Message from "../model/message.model.js";

// export const getMessages = async (req, res) => {
//   try {
//     const { userId1, userId2 } = req.params;
//     const messages = await Message.find({
//       $or: [
//         { sender: userId1, receiver: userId2 },
//         { sender: userId2, receiver: userId1 },
//       ],
//     }).sort({ timestamp: 1 });

//     return res.status(200).json({
//       message: "Messages fetched successfully",
//       messages,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// export const createMessage = async (req, res) => {
//   try {
//     const { sender, receiver, content } = req.body;
//     const newMessage = await Message.create({ sender, receiver, content });

//     return res.status(201).json({
//       message: "Message sent successfully",
//       newMessage,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

import Message from "../model/message.model.js";
import User from "../model/user.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, content } = req.body;

    const newMessage = await Message.create({
      sender: senderId,
      receiver: receiverId,
      content,
    });

    // Populate sender and receiver information
    const populatedMessage = await Message.findById(newMessage._id)
      .populate("sender", "fullName avatar")
      .populate("receiver", "fullName avatar");

    // Here you would typically emit a Socket.IO event to notify the receiver

    res.status(201).json({
      message: "Message sent successfully",
      data: populatedMessage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while sending the message",
      error: error.message,
    });
  }
};

export const getConversation = async (req, res) => {
  try {
    const { userId, otherUserId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: userId, receiver: otherUserId },
        { sender: otherUserId, receiver: userId },
      ],
    })
      .sort({ createdAt: 1 })
      .populate("sender", "fullName avatar")
      .populate("receiver", "fullName avatar");

    res.status(200).json({
      message: "Conversation retrieved successfully",
      data: messages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error,
    });
  }
};