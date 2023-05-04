import { NavLink } from "react-router-dom"
import NavActive from "../helpers/IsActive"
import useAuth from "../hook/UseAuth"
import usePrivate from "../hook/UsePrivate";

export default function Sidebar() {

  const { setAuth } = useAuth();

  const { sidebarHidden } = usePrivate();

  return (
    <aside
      className={`bg-indigo-600 p-2  h-screen z-40 transition-transform duration-500 md:max-w-max w-6/12
   
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
