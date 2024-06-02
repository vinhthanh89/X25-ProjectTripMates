import axios from 'axios'
import { API_URL } from '../config'
import { getAccessTokenFromLocal, getRefreshTokenFromLocal, saveAccessTokenToLocal } from '../utils/localstorage'

export const axiosInstance = axios.create({
    baseURL : API_URL
})

export const axiosAuthInstance = axios.create({
    baseURL : API_URL
})

axiosAuthInstance.interceptors.request.use((config) => {
    const accessToken = getAccessTokenFromLocal();
    const refreshToken = getRefreshTokenFromLocal();
    config.headers['accesstoken'] = `Bearer ${accessToken}`
    config.headers['refreshtoken'] = `Bearer ${refreshToken}`

    return config;
})

axiosAuthInstance.interceptors.response.use((response) => {
    const config = response.config
    const message = response.data.message
    if(message && message === 'jwt expired'){
        console.log('New AccessToken');
        config.headers['accesstoken'] = `Bearer ${response.data.newAccessToken}
        `
        saveAccessTokenToLocal(response.data.newAccessToken)

        return axiosAuthInstance(config)
    }

    return response
})