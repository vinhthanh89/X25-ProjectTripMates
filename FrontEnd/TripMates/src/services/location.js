import { axiosAuthInstance } from "."

export const getLocation = () => {
    return axiosAuthInstance.get('/api/location/get-location')
}