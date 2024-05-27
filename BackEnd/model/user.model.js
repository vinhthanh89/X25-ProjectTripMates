
import mongoose from 'mongoose'

const User = new mongoose.Schema({
    email : {
        type : String ,
        required : true
    },
    fullName : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    avatar : {
        type : String ,
        default : null
    },
    age : {
        type : Number ,
        default : null
    },
    birthday : {
        type : Date,
        default : null
    },
    gender : {
        type : String,
        default : null
    },
    description : {
        type : String,
        default : null
    },
    follower : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        }
    ]
} , {timestamps : true})

export default mongoose.model('users' , User)