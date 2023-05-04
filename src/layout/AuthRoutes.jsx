import Spinner from "../components/Spinner";
import { Outlet, Navigate } from 'react-router-dom';

//Components
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import useAuth from "../hook/UseAuth";

export default function AuthRoutes() {

  const { auth, load } = useAuth()


  if (load) return (

    <div className="grid place-items-center h-screen">
      <Spinner />
    </div>

  )

  return (
    <>
      {auth._id ? (
        <>

          <Header />

          <main className="md:flex md:gap-8 ">
            <Sidebar />
            <Outlet />
          </main>
        </>
      ) :
        <Navigate to={'/login'} />
      }
    </>
  )
}
