import useAuth from "../hook/UseAuth";
import person from '/img/person.svg'
import formatDate from "../helpers/FormatDate";
import edit from '/img/edit.svg'
import { useState } from "react";
import ModalNewPassword from "./ModalNewPassword";

function WindowConfig() {

    const { auth } = useAuth();
    const [modalPassword, setModalPassword] = useState(false)


    const { name, email, _id, createdAt } = auth

    const handleNewPassword = () => {

        setModalPassword(!modalPassword)

    }


    return (
        <>

            <div className="text-lg text-indigo-600 capitalize shadow-2xl absolute top-14  right-0 bg-white w-max">

                <div className="bg-indigo-400 p-12">

                </div>

                <img className="w m-auto bg-white rounded-full -mt-12" src={person} width={80} height={30} alt="KitDoc Icon" />


                <div className="p-4">

                    <div className="flex justify-between">

                        <p>{name}</p>

                        <button className="ml-4 flex uppercase text-center text-white px-4 py-2 rounded bg-amber-400 hover:bg-amber-600">
                            Edit <img className="" width={30} src={edit} /></button>
                    </div>

                    <div className="flex justify-between mt-4">

                        <p>password: <span className="text-black font-bol">*********</span></p>

                        <button onClick={handleNewPassword} className="ml-4 flex uppercase text-center text-white px-4 py-2 rounded bg-amber-400 hover:bg-amber-600">
                            Edit <img className="" width={30} src={edit} /></button>

                    </div>

                    <p>Since: <span className="text-black">{formatDate(createdAt)} </span> </p>

                </div>

                {modalPassword ? (

                    <ModalNewPassword />

                ) : null}

            </div>

        </>
    )
}

export default WindowConfig