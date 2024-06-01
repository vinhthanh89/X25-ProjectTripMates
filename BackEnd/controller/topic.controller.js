import Topic from '../model/topic.model.js'

export const createTopic = async (req , res) => {
    try {
        const {title , description , startDate , endDate , continent , country} = req.body
        const userId = req.user
        console.log(userId);

        const newTopic = await Topic.create({
            userCreated : userId,
            title,
            description,
            startDate,
            endDate,
            continent,
            country
        })

        return res.status(201).json({
            message : "Create Topic Successful",
            newTopic
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
        const dataTopic = await Topic.find().populate('userCreated')

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

        const findTopic = await Topic.findById(topicId).populate('userCreated')

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
