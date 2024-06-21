import mongoose from 'mongoose'


const Post = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    topicId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'topics'
    },
    content : {
        type : String ,
        require : true
    },
    location : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'locations'
    },
    date : {
        type : Date,
        require : true
    },
    userCreated : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
} , {timestamps : true})

export default mongoose.model('posts' , Post)