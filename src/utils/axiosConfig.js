import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const {user} = useAuthContext()

export const customRequest = axios.create({
    baseURL: 'http://localhost:4000/api/v1/eventsng/auth',
    headers: {
        'Authorization': `Bearer ${user}`
    }

})