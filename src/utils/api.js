import axios from 'axios'

export const BASE_URL = 'https://api.weatherbit.io/v2.0/current'


export const KEY = 'bb7ec4d0829e4cd0967a4fe370d65e31'

export const CallAPI  = axios.create({
    baseURL: BASE_URL,
    method: "GET",
}) 