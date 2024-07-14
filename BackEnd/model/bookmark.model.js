
import mongoose from "mongoose";


const Bookmark = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    bookmarksTopic : [
        {
            topic : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'topics'
            }
        }
    ]
})

export default mongoose.model('bookmarks' , Bookmark)
