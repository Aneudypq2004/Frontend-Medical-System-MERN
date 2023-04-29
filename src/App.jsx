import { Route, Navigate, Routes, useLocation, BrowserRouter } from "react-router-dom";


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

//Redux
import store from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import AuthRoutes from "./layout/AuthRoutes";

function App() {

  return (

    <>
      <BrowserRouter>
        <Provider store={store}>
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
        </Provider>
      </BrowserRouter>
      <ToastContainer className="uppercase" autoClose={3000} />
    </>
  )
}

export default App
