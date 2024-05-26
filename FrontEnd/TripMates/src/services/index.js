import axios from 'axios'
import { API_URL } from '../config'

export const axiosInstance = axios.create({
    baseURL : API_URL
})
