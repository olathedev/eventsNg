import axios from "axios";

const authRequest = axios.create({
    baseURL: 'http://localhost:4000/api/v1/eventsng/auth'
})

export default authRequest