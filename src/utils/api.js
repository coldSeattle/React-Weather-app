import axios from 'axios'

export const BASE_URL = 'http://api.weatherstack.com/'

export const ACCESS_KEY = '9170eb3a72675152ffdd54ff7d74fde0'

export const CallAPI  = axios.create({
    baseURL: BASE_URL,
    method: "GET",
}) 