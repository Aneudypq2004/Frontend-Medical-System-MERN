import useAuth from "../hook/UseAuth";
import person from '/img/person.svg'
import logout from '/img/logout.svg'
import formatDate from "../helpers/FormatDate";
import edit from '/img/edit.svg'
import { useState } from "react";
import ModalNewPassword from "./ModalNewPassword";
import usePrivate from "../hook/UsePrivate";

function WindowConfig() {

    const { auth, closeSesionAuth } = useAuth();

    const { setModalPassword, setWindowConfig, setModalName } = usePrivate()

    const { name, createdAt } = auth

    const handleNewPassword = () => {
        setModalPassword(true)
        setWindowConfig(false)
    }

    const handleNewName = () => {
        setModalName(true);
        setWindowConfig(false);
    }


    return (
        <>

            <div className="text-lg text-indigo-600  capitalize shadow-2xl absolute top-14  right-0 bg-white w-max z-50">

                <div className="bg-indigo-400 p-12">

                </div>

                <img className="m-auto -mt-12 bg-white rounded-full " src={person} width={80} height={30} alt="KitDoc Icon" />

                <div className="p-4">

                    <div className="flex justify-between">

                        <p>{name}</p>

                        <button onClick={handleNewName} className="ml-4 flex uppercase text-center text-white px-4 py-2 rounded bg-amber-400 hover:bg-amber-600">
                            Edit <img className="" width={30} src={edit} /></button>
                    </div>

                    <div className="flex justify-between mt-4">

                        <p>password: <span className="text-black font-bol">*********</span></p>

                        <button onClick={handleNewPassword} className="ml-4 flex uppercase text-center text-white px-4 py-2 rounded bg-amber-400 hover:bg-amber-600">
                            Edit <img className="" width={30} src={edit} /></button>

                    </div>

                    <p>Since: <span className="text-black">{formatDate(createdAt)} </span> </p>

                    <button onClick={() => closeSesionAuth()} className="w-full uppercase flex justify-center content-center gap-4 bg-red-500 hover:bg-red-800 transition-all duration-300 mt-4 px-4 py-2 text-white rounded-lg">Close
                        <img className="w-auto" width={30} height={20} src={logout} alt="Exit icon" />
                    </button>

                </div>

            </div>

        </>
    )
}

export default WindowConfig