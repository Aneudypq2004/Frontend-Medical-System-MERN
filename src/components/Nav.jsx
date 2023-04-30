import { NavLink } from "react-router-dom"
import NavActive from "../helpers/IsActive"
import useAuth from "../hook/UseAuth"

export default function Nav() {

  const { setAuth } = useAuth();

  return (
    <>
      <nav className="uppercase bg-indigo-400 text-white flex justify-between text-lg p-2">

        <NavLink to='/home' className={NavActive} >DashBoard</NavLink>

        <NavLink to='/profile' className={NavActive}>Profile</NavLink>

        <NavLink to='/s' className={NavActive}>DashBoard</NavLink>

        <button className="bg-slate-40"  onClick={() => setAuth({})}>Close</button>

      </nav>
    </>
  )
}
