import Topic from '../model/topic.model.js'

export const createTopic = async (req , res) => {
    try {
        const {title , description , locationId , startDate , endDate } = req.body
        
        const userId = req.user;

        console.log("body :::" , req.body);
        console.log('title :::' , title);
        console.log("user id :::" , userId);

        const newTopic = await Topic.create({
            userCreated : userId,
            title : req.body.title,
            description,
            startDate,
            endDate,
            location : locationId
        })

        return res.status(201).json({
            message : "Create Topic Successful",
            newTopic
        })

    } catch (error) {
        console.log("backend error" , error);
        return res.status(500).json({
            message : error
        })
    }
}

export const editTopic = async (req , res) => {
    try {
        const topicId = req.params.topicId
        const {title , description , endDate , continent , country} = req.body

        const updatedTopic = await Topic.findByIdAndUpdate(topicId , {
            title ,
            description ,
            continent,
            country ,
            endDate
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
