import { NavLink } from "react-router-dom"
import NavActive from "../helpers/IsActive"
import useAuth from "../hook/UseAuth"

export default function Sidebar() {

  const { setAuth } = useAuth();

  return (
    <aside className="bg-amber-400 max-w-max p-2 h-screen w-full  ">

      <h1>sidebar here</h1>


      <nav className="uppercase  text-white mt-4 flex flex-col gap-4">

        <NavLink to='/home' className={NavActive} >DashBoard</NavLink>

        <NavLink to='/profile' className={NavActive}>Profile</NavLink>

        <NavLink to='/s' className={NavActive}>DashBoard</NavLink>



      </nav>

    </aside>
  )
}
