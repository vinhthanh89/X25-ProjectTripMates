

import { axiosAuthInstance } from "./index.js";

export const addUserJoinTrip = (topicId , userJoinTrip) => {
    return axiosAuthInstance.put(`/api/userJoinTrip/add-userJoinTrip/${topicId}` , userJoinTrip)
}

export const handleUserAcceptJoinTrip = (topicId , userId) => {
    return axiosAuthInstance.put(`/api/userJoinTrip/user-accept/${topicId}` , userId)
}

export const handleUserDeclineJoinTrip = (topicId , userId) => {
    return axiosAuthInstance.put(`/api/userJoinTrip/user-decline/${topicId}` , userId)
}