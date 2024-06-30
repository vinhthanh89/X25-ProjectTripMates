import Comment from '../model/comment.model.js'

export const getCommentByTopicId = async (req , res) =>{
    try {
        const topicId = req.params.topicId

        const commentByTopicId = await Comment.findOne({topicIdComment : topicId}).populate('usersComment usersComment.userId')

        if(!commentByTopicId){
            return res.status(200).json({
                message : 'Get data comment success',
                usersComment : []
            })
        }

        if(commentByTopicId){
            return res.status(200).json({
                message : 'Get data comment success',
                usersComment : commentByTopicId.usersComment
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const addComment = async (req , res) => {
    try {
        const userId = req.user
        const topicId = req.params.topicId
        const comment = req.body.comment
   
        const topicComment = await Comment.findOne({topicIdComment : topicId}).populate('usersComment usersComment.userId')

        if(!topicComment){
            const commentsTopic = await Comment.create({
                topicIdComment : topicId,
                usersComment :[
                    {
                        userId : userId,
                        comment : comment
                    }
                ]
            })

            return res.status(201).json({
                message : "User comment success",
                usersComment : commentsTopic.usersComment
            })
        }

        if(topicComment){
            const commentsTopic = await Comment.findOneAndUpdate({topicIdComment : topicId} , {
                $push : {
                    usersComment : {
                        userId : userId,
                        comment : comment
                    }
                }
            } , {new : true}).populate('usersComment usersComment.userId')

            return res.status(201).json({
                message : "user comment success",
                usersComment : commentsTopic.usersComment
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}