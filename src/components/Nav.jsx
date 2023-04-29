import { NavLink } from "react-router-dom"
import NavActive from "../helpers/IsActive"

export default function Nav() {
  return (
    <>
      <nav className="uppercase bg-indigo-400 text-white flex justify-between text-lg p-2">

        <NavLink to='/home' className={NavActive} >DashBoard</NavLink>

        <NavLink to='/profile' className={NavActive}>Profile</NavLink>

        <NavLink to='/s' className={NavActive}>DashBoard</NavLink>

        <NavLink to='/q'className={NavActive}>DashBoard</NavLink>

      </nav>
    </>
  )
}
