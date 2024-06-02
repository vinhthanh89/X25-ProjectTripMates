import { axiosAuthInstance } from "."

export const fetchTopicData = () => {
    return axiosAuthInstance.get('/api/topic/get-topics')
}

export const getTopicById = (topicId) => {
    return axiosAuthInstance.get(`/api/topic/${topicId}`)
}