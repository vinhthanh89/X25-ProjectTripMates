import mongoose from "mongoose";

const Comment = new mongoose.Schema({
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "topics",
  },
  commentsOfTopic : [
    {
        userComment : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        },
        comment : {
            type : String,
            required : true
        }
        
    }
  ]
});
