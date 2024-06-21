
import mongoose from "mongoose";
import cloudinary from "../configs/cloudinary.js";


import Topic from "../model/topic.model.js";
import { handleUpload } from "../utils/handleUpload.js";



const { ObjectId } = mongoose.Types;

export const createTopic = async (req, res) => {
  try {
    const { title, description, locationId, startDate, endDate , thumbnail } = req.body;

    const userId = req.user;

    const newTopic = await Topic.create({
      userCreated: userId,
      title,
      description,
      startDate,
      endDate,
      location: locationId,
      thumbnail
    });

    return res.status(201).json({
      message: "Create Topic Successful",
      newTopic,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const editTopic = async (req, res) => {
  try {
    const userLogin = req.user;
    const topicId = req.params.topicId;
    const { title, description, locationId , thumbnail } = req.body;

    const findTopic = await Topic.findById(topicId).populate("userCreated");
    if (!findTopic) {
      return res.status(404).json({
        message: "Topic Not Found",
      });
    }

    if (userLogin !== findTopic.userCreated._id.toString()) {
      return res.status(403).json({
        message: "user does not has permission for this function",
      });
    }

    const updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        title,
        description,
        location: locationId,
        thumbnail
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Edit Topic Successfully",
      updatedTopic,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getTopics = async (req, res) => {
  try {
    const dataTopic = await Topic.find().populate("userCreated location");

    return res.status(200).json({
      message: "Get Topics Successfully",
      dataTopic,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getTopicById = async (req, res) => {
  try {
    const topicId = req.params.topicId;

    const findTopic = await Topic.findById(topicId).populate(
      "userCreated location post"
    ).populate({
      path : 'post',
      populate : {
        path : 'location'
      }
    })

    return res.status(200).json({
      message: "Get Topic Detail Successfully",
      findTopic,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const getTopicByUserCreated = async (req, res) => {
  try {
    const userId = req.params.userId;

    const findTopicByUserId = await Topic.find({
      userCreated: userId,
    }).populate("userCreated location");

    return res.status(200).json({
      message: "Get Topic By User Success",
      findTopicByUserId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const deleteTopic = async (req, res) => {
  try {
    const topicId = req.params.topicId;
    const findTopic = await Topic.findById(topicId);
    if (!findTopic) {
      return res.status(404).json({
        message: "Not Found Topic",
      });
    }

    await Topic.findByIdAndDelete(topicId);

    return res.status(200).json({
      message: "Delete Topic Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const uploadTopicThumbnail = async (req, res) => {
  try {
    const userLogin = req.user
    const topicId = req.params.topicId;
    const file = req.file;

    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;

    const [result , findTopic] = await Promise.all([handleUpload(dataURI) ,Topic.findById(topicId).populate('userCreated') ])

    if (!findTopic) {
        if(result){
            cloudinary.uploader.destroy(result.public_id)
          }
        
          return res.status(403).json({
            message : "Topic Not Found"
          })
    }

    if(userLogin !== findTopic.userCreated._id.toString()){
        if(result){
            cloudinary.uploader.destroy(result.public_id)
          }

        return res.status(403).json({
            message : "User does not permission for this function"
        })
    }

    const topicUpdated = await Topic.findByIdAndUpdate(findTopic._id , {thumbnail : result.secure_url} , {new : true})

    return res.status(200).json({
        message : "Upload Topic Thumbnail Successfully",
        topicUpdated
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const addPostToTopic = async (req , res) => {
  try {
    const topicId = req.params.topicId
    const newPostId = req.body.postId

    console.log('topicID' ,topicId);
    console.log('postId' , newPostId);
    console.log('body' ,req.body);

    const findTopic = await Topic.findById(topicId)
    if(!findTopic){
      return res.status(404).json({
        message : "Topic Not Found"
      })
    }

    const topic = await Topic.findByIdAndUpdate(findTopic._id , {$push : {post : newPostId}} , {new : true})

    return res.status(200).json({
      message : "Add Post To Topic Successfully",
      topic
    })


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : error
    })
  }
}
