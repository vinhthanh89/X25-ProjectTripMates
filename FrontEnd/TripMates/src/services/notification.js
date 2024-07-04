import { axiosAuthInstance } from "."

export const addNotification = (topicId , interaction) => {
    return axiosAuthInstance.put(`/api/notification/add-notification/${topicId}` , interaction)
}

export const addInviteNotification = (topicId , pickedUser) => {
    return axiosAuthInstance.put(`/api/notification/add-inviteNotification/${topicId}` , pickedUser)
}

export const getNotification = () => {
    return axiosAuthInstance.get('/api/notification/get-notification')
}

export const updateIsRead = (notificationsId) => {
    return axiosAuthInstance.put('/api/notification/update-isRead' , {notificationsId})
}