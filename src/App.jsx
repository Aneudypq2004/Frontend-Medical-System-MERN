import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";

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
import Statistics from "./pages/authPages/Statistics";
import Message from "./pages/authPages/Message";
import Profits from "./pages/authPages/Profits";
import Clients from "./pages/authPages/Clients";
import Report from "./pages/authPages/Report";

import AuthRoutes from "./layout/AuthRoutes";
import usePrivate from "./hook/UsePrivate";

//Modal
import { ToastContainer } from "react-toastify";
import ModalNewPassword from "./components/ModalNewPassword";
import ModalNewName from "./components/ModalNewName";


function App() {

  const { modalPassword, modalName } = usePrivate()

  return (

    <>

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

          <Route element={<AuthRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/message" element={<Message />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/profits" element={<Profits />} />
            {/* <Route path="/report" element={<Report />} /> */}
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>

      {/* Modal   */}

      <ToastContainer className="uppercase" autoClose={1000} />

      {modalPassword ? (

        <ModalNewPassword />

      ) : null}


      {modalName ? (
        <ModalNewName />

      ) : null}


    </>
  )
}

export default App
