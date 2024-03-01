import { useNavigate } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"

export const useLogOut = () => {
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    function logout() {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        navigate('/')
    }

    return {logout}
}