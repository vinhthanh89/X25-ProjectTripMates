
import { axiosAuthInstance } from "."


export const fetchTopicData = () => {
    return axiosAuthInstance.get('/api/topic/get-topics')
}

export const fetchDataTopics = () => {
    return axiosAuthInstance.get(`/api/topic/fetch-topics`)
}

export const fetchTopicsByUserFollow = () => {
    return axiosAuthInstance.get('/api/topic/get-topic-by-userFollow')
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

export const editTopic = (topicId , formData) => {
    return axiosAuthInstance.put(`/api/topic/edit-topic/${topicId}` , formData)
}

export const uploadTopicThumbnail = (topicId , formData) => {
    return axiosAuthInstance.put(`/api/topic/upload-thumbnail/${topicId}` , formData)
}

export const filterTopicByContinent = (continentQuery) => {
    return axiosAuthInstance.get(`/api/topic/filter-topic?continent=${continentQuery}`)
}

export const filterTopicByTitle = (titleQuery) => {
    return axiosAuthInstance.get(`/api/topic/filter-topic-by-title?keyword=${titleQuery}`)
}