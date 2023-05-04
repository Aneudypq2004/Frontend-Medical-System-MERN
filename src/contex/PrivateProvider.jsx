import { createContext, useState } from "react";

const PrivateContext = createContext()

const PrivateProvider = ({ children }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false);
    const [modalPassword, setModalPassword] = useState(false);
    const [modalName, setModalName] = useState(false)
    const [windowInfo, setWindowInfo] = useState(false);
    const [windowConfig, setWindowConfig] = useState(false);


    const sidebarOpen = () => {
        setSidebarHidden(!sidebarHidden)
    }

    return (
        <PrivateContext.Provider value={{
            sidebarOpen,
            sidebarHidden,
            modalPassword,
            setModalPassword,
            windowConfig,
            windowInfo,
            setWindowConfig,
            setWindowInfo,
            modalName,
            setModalName

            

        }}>
            {children}
        </PrivateContext.Provider>
    )
}


export default PrivateProvider

export { PrivateContext }