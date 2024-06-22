import mongoose from "mongoose";

const Reaction = new mongoose.Schema({
    topicIdReaction : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'topics'
    },
    reactions : [
        {
            userReaction : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'users'
            },
            react : {
                type : String,
                required : true
            }
        }
    ]
})

export default mongoose.model('reactions' , Reaction)