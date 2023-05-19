import { useEffect } from "react";
import { createContext, useState } from "react";
import clientesAxios from "../config/clientAxios";
import Spinner from "../components/Spinner";

const PrivateContext = createContext()

const PrivateProvider = ({ children }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false);
    const [modalPassword, setModalPassword] = useState(false);
    const [modalName, setModalName] = useState(false)
    const [windowInfo, setWindowInfo] = useState(false);
    const [windowConfig, setWindowConfig] = useState(false);
    const [clients, setClient] = useState([]);
    const [totalClient, setTotalClient] = useState(0)
    const [load, setLoad] = useState(false);

    const sidebarOpen = () => {
        setSidebarHidden(!sidebarHidden)
    }

    //Get price total of every client

    useEffect(() => {

        let total = 0;

        for (let i = 0; i < clients.length; i++) {

            total += clients[i]?.price || 0
        }

        setTotalClient(total);

    }, [clients]);    

    return (
        <PrivateContext.Provider value={{
            sidebarOpen,
            sidebarHidden,
            setModalPassword,
            windowConfig,
            windowInfo,
            setWindowConfig,
            setWindowInfo,
            modalName,
            setModalName,
            clients,
            setClient,
            totalClient,
            load,
            setLoad,
            modalPassword




        }}>
            {children}
        </PrivateContext.Provider>
    )
}


export default PrivateProvider

export { PrivateContext }