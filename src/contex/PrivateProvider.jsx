import { createContext } from "react";

const PrivateContext = createContext()

const privateProvider = ({ children }) => {

    return (
        <PrivateContext.Provider value={{

        }}>
            {children}
        </PrivateContext.Provider>
    )
}


export default privateProvider

export { PrivateContext }