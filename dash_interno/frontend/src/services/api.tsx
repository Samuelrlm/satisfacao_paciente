import axios from "axios";

const api = axios.create({
    baseURL:"http://10.10.0.200:4002"
})

export default api;