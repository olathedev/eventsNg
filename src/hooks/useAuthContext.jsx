import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error("Auth context can only be used inside auth provider")
    }

    return context
}
