import { axiosAuthInstance } from "."

export const checkIsFollow = (userFollow) => {
    return axiosAuthInstance.get(`/api/following/check-user-isFollow/${userFollow}`)
}

export const getDataUserFollowing = (userProfileId) => {
    return axiosAuthInstance.get(`/api/following/get-users-following/${userProfileId}`)
}

export const getDataUserFollower = (userProfileId) => {
    return axiosAuthInstance.get(`/api/following/get-users-follower/${userProfileId}`)
}

export const followUser = (userFollow) => {
    return axiosAuthInstance.put(`/api/following/follow-user/${userFollow}`)
}

export const unfollowUser = (userFollow) => {
    return axiosAuthInstance.put(`/api/following/unfollow-user/${userFollow}`)
}

