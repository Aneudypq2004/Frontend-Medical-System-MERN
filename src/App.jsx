import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from 'react'

//Pages
import Login from "./pages/Login"
import Error404 from "./pages/Error404";
import PublicRoutes from "./layout/PublicRoutes";
import CreateAccount from "./pages/CreateAccount";
import Confirm from "./pages/Confirm";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";

//Privates Pages
import Home from "./pages/Home";

import { ToastContainer } from "react-toastify";
import AuthRoutes from "./layout/AuthRoutes";
import usePrivate from "./hook/UsePrivate";
import ModalNewPassword from "./components/ModalNewPassword";
import ModalNewName from "./components/ModalNewName";

function App() {

  const { modalPassword, modalName } = usePrivate()

  return (

    <>
      <main className={modalPassword || modalName ? ' overflow-y-hidden' : ''}>

        <BrowserRouter>
          <Routes>
            {/* //---------------------------- Public Routes  ---------------------------------  */}
            <Route path="/" element={<PublicRoutes />}>

              <Route index element={<Navigate to='/home' />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<CreateAccount />} />
              <Route path="/confirm/:token" element={<Confirm />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-password/:token" element={<ChangePassword />} />
            </Route>

            {/* //---------------------------- Private Routes  ---------------------------------  */}
            <Route path="/home" element={<AuthRoutes />}>
              <Route index element={<Home />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer className="uppercase" autoClose={3000} />

        {modalPassword ? (

          <ModalNewPassword />

        ) : null}


        {modalName ? (
          <ModalNewName />
          
        ) : null}

      </main>

    </>
  )
}

export default App
