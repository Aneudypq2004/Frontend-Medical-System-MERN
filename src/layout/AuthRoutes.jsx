import Spinner from "../components/Spinner";
import { Outlet,  Navigate } from 'react-router-dom';

//Components
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import useAuth from "../hook/UseAuth";

export default function AuthRoutes() { 

  const { auth, load } = useAuth()

  return (
    <>

      {load ? <Spinner /> : null}
      {auth._id ? (
        <>

          <Nav />

          <main className="flex gap-8">
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
