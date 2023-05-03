import { createContext, useState } from "react";

const PrivateContext = createContext()

const PrivateProvider = ({ children }) => {
    const [sidebarHidden, setSidebarHidder] = useState(false);


    const sidebarOpen = () => {
        setSidebarHidder(!sidebarHidden)
    }

    return (
        <PrivateContext.Provider value={{
            sidebarOpen

        }}>
            {children}
        </PrivateContext.Provider>
    )
}


export default PrivateProvider

export { PrivateContext }