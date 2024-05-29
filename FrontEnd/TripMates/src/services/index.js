import axios from 'axios'
import { API_URL } from '../config'
import { getAccessTokenFromLocal, getRefreshTokenFromLocal } from '../utils/localstorage'

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