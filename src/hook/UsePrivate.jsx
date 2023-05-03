import { useContext } from "react";
import { PrivateContext } from "../contex/PrivateProvider";

const usePrivate = () => useContext(PrivateContext)

export default usePrivate;