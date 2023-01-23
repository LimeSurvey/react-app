import axios from 'redaxios'
import config from 'config'

export const axiosLsApi = axios.create({
    withCredentials: false, // disable cors pre-flight check
    baseURL: config.api.baseURL,
    timeout: config.api.timeout
})

export const getObjectData = (model) => {
    let data = { ...model }
    Object.keys(data).forEach((key) => {
        if (typeof data[key] == 'function') delete data[key]
    })
    return data
}