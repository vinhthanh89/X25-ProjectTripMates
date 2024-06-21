import { axiosAuthInstance } from "."


export const createPost = (fromData) => {
    return axiosAuthInstance.post('/api/post/create-post' , fromData)
}

export const getPostById = (postId) => {
    return axiosAuthInstance.get(`/api/post/get-post-by-id/${postId}`)
}

export const getPostByTopicId = (topicId) => {
    return axiosAuthInstance.get(`/api/post/get-post-by-topicId/${topicId}`)
}