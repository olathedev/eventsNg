import { createContext, useContext, useState } from "react";

export const sidebarContext = createContext()

export const SidebarContextProvider = ({children}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    console.log(sidebarOpen);
    return (
        <sidebarContext.Provider value={{sidebarOpen, setSidebarOpen}}>
            {children}
        </sidebarContext.Provider>
    )
}

export const useSidebaarContext = () => {
    const context = useContext(sidebarContext)

    if(!context) {
        throw new Error('side bar context can oly be used in sidebar provider')
    }

    return context
}
