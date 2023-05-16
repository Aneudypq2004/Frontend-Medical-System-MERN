import { createContext, useState } from "react";

const PrivateContext = createContext()

const PrivateProvider = ({ children }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false);
    const [modalPassword, setModalPassword] = useState(false);
    const [modalName, setModalName] = useState(false)
    const [windowInfo, setWindowInfo] = useState(false);
    const [windowConfig, setWindowConfig] = useState(false);
    const [clients, setClient] = useState([])



    const sidebarOpen = () => {
        setSidebarHidden(!sidebarHidden)
    }

    const deleteClient = async id => {

        try {
            
        } catch (error) {
            
        }


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
            setModalName,
            clients, 
            setClient,
            deleteClient

            

        }}>
            {children}
        </PrivateContext.Provider>
    )
}


export default PrivateProvider

export { PrivateContext }