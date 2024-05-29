import { axiosAuthInstance } from "."



export const fetchTopicData = () => {
    return axiosAuthInstance.get('/api/topic/get-topics')
}