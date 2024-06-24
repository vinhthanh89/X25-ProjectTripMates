import mongoose from "mongoose";

const Comment = new mongoose.Schema({
  topicIdComment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "topics",
  },
  usersComment : [
    {
        userId : {
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

export default mongoose.model('comments' , Comment)
