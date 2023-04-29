import { useEffect } from "react"
import { authUser, isLoad } from "../features/user/UserSlice"

import { useDispatch, useSelector } from 'react-redux';

import Spinner from "../components/Spinner";
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import clientesAxios from "../config/clientAxios";


//Components
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

export default function AuthRoutes() {

  const { auth, load } = useSelector(state => state.user);
  const dispatch = useDispatch();



  useEffect(() => {

    const checkAuth = async () => {

      const token = localStorage.getItem('AneudyDevToken');

      if (!token) {
        dispatch(isLoad());
        return
      }
      const config = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }

      try {
        const { data } = await clientesAxios('/home', config)
        dispatch(authUser(data))

      } catch (error) {
        dispatch(authUser({}))
      }

      dispatch(isLoad());

    }


    checkAuth();

  }, [])

  if (load) {

    return <Spinner />

  }

  return (
    <>
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
