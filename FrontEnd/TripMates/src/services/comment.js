import { axiosAuthInstance } from "."

export const getUsersComment = (topicId) => {
    return axiosAuthInstance.get(`/api/comment/get-comment-by-topicId/${topicId}`)
}

export const addComment = (topicId , comment) => {
    return axiosAuthInstance.put(`/api/comment/add-comment/${topicId}` , comment)
}