import { NavLink } from "react-router-dom"
import NavActive from "../helpers/IsActive"
import useAuth from "../hook/UseAuth"
import usePrivate from "../hook/UsePrivate";

export default function Sidebar() {

  const { setAuth } = useAuth();

  const { sidebarHidden } = usePrivate();

  return (
    <aside
      className={`bg-indigo-600 p-4 mt-16 h-full   fixed top-0 bottom-0  z-50 transition-transform duration-500 md:w-44 w-6/12
   
        ${sidebarHidden ? '-translate-x-0' : '-translate-x-full md:-translate-x-0'}`}>


      <nav className="uppercase text-white  mt-4  flex flex-col gap-8">

        <NavLink to='/home' className={NavActive} >DashBoard</NavLink>

        <NavLink to='/statistics' className={NavActive}>Statistics</NavLink>

        <NavLink to='/clients' className={NavActive}>Clients</NavLink>

        <NavLink to='/message' className={NavActive}>Message</NavLink>

        <NavLink to='/profits' className={NavActive}>Profits</NavLink>

        {/* <NavLink to='/report' className={NavActive}>Report</NavLink> */}

      </nav>

    </aside>
  )
}
