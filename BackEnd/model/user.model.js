
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
        default : "https://res.cloudinary.com/du6uinlwy/image/upload/v1716912737/TripMates/profile-user_w32qio.png"
    },
    age : {
        type : Number ,
    },
    birthday : {
        type : String,
    },
    gender : {
        type : String,
    },
    description : {
        type : String,
    },
    follower : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        }
    ]
} , {timestamps : true})

export default mongoose.model('users' , User)