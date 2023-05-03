import { createContext, useState } from "react";

const PrivateContext = createContext()

const PrivateProvider = ({ children }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false);
    const [modalPassword, setModalPassword] = useState(false);


    const sidebarOpen = () => {
        setSidebarHidden(!sidebarHidden)
    }

    return (
        <PrivateContext.Provider value={{
            sidebarOpen,
            sidebarHidden,
            modalPassword,
            setModalPassword
            

        }}>
            {children}
        </PrivateContext.Provider>
    )
}


export default PrivateProvider

export { PrivateContext }