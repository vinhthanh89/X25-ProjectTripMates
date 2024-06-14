import { axiosAuthInstance } from "."

export const fetchTopicData = () => {
    return axiosAuthInstance.get('/api/topic/get-topics')
}

export const getTopicById = (topicId) => {
    return axiosAuthInstance.get(`/api/topic/topic-detail/${topicId}`)
}

export const getTopicByUserCreated = (userId) => {
    return axiosAuthInstance.get(`/api/topic/topic-by-user-created/${userId}`)
}

export const createTopic = (formData) => {
    return axiosAuthInstance.post('/api/topic/create-topic' , formData)
}

export const deleteTopic = (topicId) => {
    return axiosAuthInstance.delete(`/api/topic/delete-topic/${topicId}`)
}