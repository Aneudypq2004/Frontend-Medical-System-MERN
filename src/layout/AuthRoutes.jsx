import Spinner from "../components/Spinner";
import { Outlet, Navigate, redirect } from 'react-router-dom';

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

          <main className="md:flex  md:gap-8">
            <Sidebar />
            <section className="container m-auto md:pl-52">
              <Outlet />
            </section>
          </main>
        </>
      ) :
        <Navigate to='/login' />
      }
    </>
  )
}
