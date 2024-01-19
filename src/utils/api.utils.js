import axios from "axios";
import { getAuthToken } from ".";

const API=axios.create({
    baseURL:process.env.REACT_APP_BASE_URL
})

API.interceptors.request.use(
    (config)=>{
        const authToken=getAuthToken()
        if(authToken){
            config.headers.Authorization=`Bearer ${authToken}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)
export default API