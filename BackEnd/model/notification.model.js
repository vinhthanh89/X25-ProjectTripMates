import mongoose from 'mongoose'

const Notification = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    notifications : [
        {
            interactUserId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'users'
            },
            topicId : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'topics'
            },
            interaction : {
                type : String,
                require : true
            },
            isRead : {
                type : Boolean,
                default : false
            }

        }
    ]
} , {timestamps : true})

export default mongoose.model('notifications' , Notification)