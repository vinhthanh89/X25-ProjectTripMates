import { axiosAuthInstance } from "."

export const getUsersComment = (topicId) => {
    return axiosAuthInstance.get(`/api/comment/get-comment-by-topicId/${topicId}`)
}

export const addComment = (topicId , comment) => {
    return axiosAuthInstance.put(`/api/comment/add-comment/${topicId}` , comment)
}

export const deleteComment = (topicId , commentId) => {
    return axiosAuthInstance.delete(`/api/comment/delete-comment/${topicId}?commentId=${commentId}`)
}