import Topic from '../model/topic.model.js'

export const createTopic = async (req , res) => {
    try {
        const {title , description , locationId , startDate , endDate , thumbnail } = req.body
        
        const userId = req.user;

        const newTopic = await Topic.create({
            userCreated : userId,
            title ,
            description,
            startDate,
            endDate,
            location : locationId,
            thumbnail
        })

        return res.status(201).json({
            message : "Create Topic Successful",
            newTopic
        })

    } catch (error) {
        return res.status(500).json({
            message : error
        })
    }
}

export const editTopic = async (req , res) => {
    try {
        const topicId = req.params.topicId
        const {title , description , continent , country} = req.body

        const updatedTopic = await Topic.findByIdAndUpdate(topicId , {
            title ,
            description ,
            continent,
            country ,
        } , {new : true})

        return res.status(200).json({
            message : "Edit Topic Successfully" ,
            updatedTopic
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const getTopics = async (req , res) => {
    try {
        const dataTopic = await Topic.find().populate('userCreated location')

        return res.status(200).json({
            message : "Get Topics Successfully",
            dataTopic
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const getTopicById = async (req , res) => {
    try {
        const topicId = req.params.topicId

        const findTopic = await Topic.findById(topicId).populate('userCreated location')

        return res.status(200).json({
            message : "Get Topic Detail Successfully",
            findTopic
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const getTopicByUserCreated = async (req , res) => {
    try {
        const userId = req.params.userId

        const findTopicByUserId = await Topic.find({userCreated : userId}).populate('userCreated location')

        return res.status(200).json({
            message : "Get Topic By User Success",
            findTopicByUserId
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const deleteTopic = async (req , res) => {
    try {
        const topicId = req.params.topicId
        const findTopic = await Topic.findById(topicId)
        if(!findTopic){
            return res.status(404).json({
                message : "Not Found Topic"
            })
        }

        await Topic.findByIdAndDelete(topicId)

        return res.status(200).json({
            message : "Delete Topic Successfully"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}
