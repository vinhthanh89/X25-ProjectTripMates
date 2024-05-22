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

    },
    age : {
        type : Number ,
    },
    birthday : {
        type : Date
    },
    gender : {
        type : String
    },
    description : {
        type : String
    }
})