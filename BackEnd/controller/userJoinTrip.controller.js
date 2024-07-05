
import Topic from '../model/topic.model.js'

export const addUserJoinTrip = async (req , res) => {
    try {
      const topicId = req.params.topicId
      const usersAddToTopic = req.body
      const usersId = usersAddToTopic.map(user => ({userId : user._id}))
  
      const findTopic = await Topic.findById(topicId)
      const topicUserJoinTrip = findTopic.userJoinTrip
      const existingUserJoinTrip = topicUserJoinTrip.map(user => user.userId.toString())
  
      const checkUserExits = usersAddToTopic.filter(user => existingUserJoinTrip.includes(user._id))
  
      if(checkUserExits.length > 0){
        const userExitsEmail = checkUserExits.map(user => user.email)
        const userExitsEmailString = userExitsEmail.join(' , ')
        console.log(userExitsEmailString);
        return res.status(401).json({
          error : "users exist" ,
          errorMessage : `${userExitsEmailString} have been invited to join trip`,
        })
      }
  
      if(checkUserExits.length === 0){
        const findsTopic = await Topic.findOneAndUpdate({_id : topicId} , {
          $push : {
            userJoinTrip : {$each : usersId}
          }
        } , {new : true}).populate('userCreated location userJoinTrip.userId')
    
        return res.status(201).json({
          message : "Add user success",
          findTopic : findsTopic
        })
      }
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message : error
      })
    }
  }

export const userAcceptJoinTrip = async (req , res) => {
    try {
        const topicId = req.params.topicId
        const userId = req.body.userId

        const findTopic = await Topic.findById(topicId)
        if(!findTopic){
          return res.status(404).json({
            message : "Topic Not Found"
          })
        }

        if(findTopic){
          const topicUpdated = await Topic.findOneAndUpdate(
            { _id: topicId, "userJoinTrip.userId": userId },
            { $set: { "userJoinTrip.$.status": "accept" } },
            { new: true }
          );

          return res.status(200).json({
            message: "User status updated to accept",
            topic: topicUpdated
          });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error
        })
    }
}

export const userDeclineJoinTrip = async (req , res) => {
  try {
    const topicId = req.params.topicId
    const userId = req.body.userId

    const findTopic = await Topic.findById(topicId)
    if(!findTopic){
      return res.status(404).json({
        message : "Topic Not Found"
      })
    }

    if(findTopic){
      const topicUpdated = await Topic.findOneAndUpdate(
        { _id: topicId, "userJoinTrip.userId": userId },
        { $set: { "userJoinTrip.$.status": "decline" } },
        { new: true }
      );

      return res.status(200).json({
        message: "User status updated to accept",
        topic: topicUpdated
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message : error
    })
  }
}