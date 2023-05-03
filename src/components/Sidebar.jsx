import { NavLink } from "react-router-dom"
import NavActive from "../helpers/IsActive"
import useAuth from "../hook/UseAuth"
import usePrivate from "../hook/UsePrivate";

export default function Sidebar() {

  const { setAuth } = useAuth();

  const { sidebarHidden } = usePrivate();

  return (
    <aside
      className={`bg-indigo-600 h-screen p-2 transition-transform duration-500 md:max-w-max w-1/2 sticky right-0 top-14 left-0 bottom-0
   
        ${sidebarHidden ? '-translate-x-0' : '-translate-x-full md:-translate-x-0'}`}>

      <h1>sidebar here</h1>


      <nav className="uppercase text-white  mt-4  flex flex-col gap-4">

        <NavLink to='/home' className={NavActive} >DashBoard</NavLink>

        <NavLink to='/profile' className={NavActive}>Profile</NavLink>

        <NavLink to='/s' className={NavActive}>DashBoard</NavLink>

      </nav>

    </aside>
  )
}
