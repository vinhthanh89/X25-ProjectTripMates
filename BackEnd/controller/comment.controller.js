import Comment from '../model/comment.model.js'

export const getCommentByTopicId = async (req , res) =>{
    try {
        const topicId = req.params.topicId

        const commentByTopicId = await Comment.find({topicComment : topicId})

        return res.status(200).json({
            message : "Get Data Comment Success",
            user
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}