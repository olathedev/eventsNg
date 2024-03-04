import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../features/auth/userSlice"

export const useLogOut = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function logoutFunc() {
        localStorage.removeItem('user')
        dispatch(logout())
        navigate('/')
    }

    return {logoutFunc}
}