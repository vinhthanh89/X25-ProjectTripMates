import mongoose from "mongoose";

const Topic = new mongoose.Schema({
    userCreated : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    title : {
        type : String,
        required : true
    },
    thumbnail: {
        type : String ,
    },
    reaction : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'reactions'
    },
    description : {
        type : String
    },
    comment : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'comments'
        }
    ],
    continent : {
        type : String,
    },
    country : {
        type : String,
    },
    userJoinTrip : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        }
    ],
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
    },
    location : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "locations"
    },
    post : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'posts'
        }
    ]
} , {timestamps : true})

export default mongoose.model('topics' , Topic)