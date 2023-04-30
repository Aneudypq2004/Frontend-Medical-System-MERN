import { useContext } from "react";
import { AuthContext } from "../contex/AuthProvider";


const useAuth = () => useContext(AuthContext)


export default useAuth