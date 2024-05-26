
import { axiosInstance } from "./index.js";


export const login = ({email , password}) => {
    return axiosInstance.post('/api/user/login' , {email , password})
}

export const signup = ({fullName , email , password , confirmPassword}) => {
    return axiosInstance.post('/api/user/signup' , {fullName , email , password , confirmPassword})
}