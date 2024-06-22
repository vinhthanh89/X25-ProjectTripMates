import { axiosAuthInstance } from "."

export const getReactByTopicId = (topicId) => {
    return axiosAuthInstance.get(`/api/react/get-react-by-topicId/${topicId}`)
}

export const reactTopic = (topicId) => {
    return axiosAuthInstance.put(`/api/react/react-topic/${topicId}`)
}

export const removeReact = (topicId) => {
    return axiosAuthInstance.put(`/api/react/remove-react/${topicId}`)
}