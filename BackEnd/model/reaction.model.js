import mongoose from "mongoose";

const Reaction = new mongoose.Schema({
    topicIdReaction : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'topics'
    },
    usersReaction : [
        {
            userId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'users'
            },
            react : {
                type : String,
                required : true
            }
        }
    ]
} ,  {timestamps : true})

export default mongoose.model('reactions' , Reaction)