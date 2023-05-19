import Spinner from "../components/Spinner";
import { Outlet, Navigate, redirect } from 'react-router-dom';
import { useEffect } from "react";

//Components
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import useAuth from "../hook/UseAuth";
import usePrivate from "../hook/UsePrivate";
import clientesAxios from "../config/clientAxios";

export default function AuthRoutes() {

  const { auth, load } = useAuth()
  const { clients, setClient } = usePrivate()


  //get Clients

  useEffect(() => {

    const getClients = async () => {

      const token = localStorage.getItem('AneudyDevToken');

      const config = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
      const { data } = await clientesAxios('/get-clients', config)
      setClient(data.clients);

    }
    getClients()
  }, []);



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
