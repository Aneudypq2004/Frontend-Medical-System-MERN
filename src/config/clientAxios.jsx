import axios from "axios";


const clientesAxios = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL
   
})

export default clientesAxios