

import { axiosAuthInstance } from "."


export const bookmarkTopic = (topicId) => {
    return axiosAuthInstance.put('/api/bookmark/add-bookmark' , topicId)
}

export const unBookmarkTopic = (topicId) => {
    return axiosAuthInstance.put('/api/bookmark/remove-bookmark' , topicId)
}

export const checkBookmarkTopic = (topicId) => {
    return axiosAuthInstance.get(`/api/bookmark/check-bookmark/${topicId}`)
}

export const getBookmarkTopicByUserId = (userId) => {
    return axiosAuthInstance.get(`/api/bookmark/get-topic-bookmark/${userId}`)
}