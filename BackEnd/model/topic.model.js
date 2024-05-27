import mongoose from "mongoose";

const Topic = new mongoose.Schema({
    userCreated : {
        type : mongoose.Schema.Types.ObjectId
    },
    title : {
        type : String,
        required : true
    },
    reaction : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'reactions'
        }
    ],
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
        type : mongoose.Schema.Types.ObjectId,
        ref : 'continents'
    },
    country : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'countries'
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
        required : true
    }
})

export default mongoose.model('topics' , Topic)