import { createContext, useEffect, useState } from "react";
import clientesAxios from "../config/clientAxios";
const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [load, setLoad] = useState(true)
    const [auth, setAuth] = useState({})

    useEffect(() => {

        const checkAuth = async () => {

            const token = localStorage.getItem('AneudyDevToken');

            if (!token) {
                setLoad(false)
                return
            }
            const config = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clientesAxios('/home', config)
                setAuth(data)

            } catch (error) {
                setAuth({})
            }
            setLoad(false)
        }
        checkAuth();

    }, [])

    const closeSesionAuth = () => {
        setAuth({})
    }

    return (
        <AuthContext.Provider value={{
            load,
            auth,
            closeSesionAuth,
            setAuth
        }}>

            {children}

        </AuthContext.Provider>
    )
}


export default AuthProvider

export { AuthContext }
