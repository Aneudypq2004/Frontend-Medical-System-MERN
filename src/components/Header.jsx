import useAuth from "../hook/UseAuth"
import kit from '/img/kit.svg'
import menu from '/img/menu.svg'
import person from '/img/person.svg'
import config from '/img/config.svg'
import { useState } from "react"

export default function Header() {

  const { setAuth, auth } = useAuth();
  const [modal, setModal] = useState(false)


  const { name, email, _id, createdAt } = auth


  const handleClose = () => {

  }

  return (
    <>
      <header className="uppercase h-16 bg-white border-b-2 p-2 border-neutral-400 content-center text-white flex justify-between text-lg">

        <div className="flex justify-center content-center">

          <img className="w-auto mr-4" src={kit} width={20} height={20} alt="KitDoc Icon" />

          <h1 className="text-black font-bold max-h-max">Hi: <span className="text-indigo-700 font-bold "> {auth.name.split(' ')[0] || 'Doc'} </span></h1>

        </div>

        <div className="flex justify-between relative gap-4 ">

          <img onClick={() => handleClose()} className="w-auto" src={menu} width={30} height={30} alt="KitDoc Icon" />
          <img onClick={() => setModal(!modal)} className="w-auto  cursor-pointer" src={person} width={20} height={30} alt="KitDoc Icon" />
          <img onClick={() => setModal(!modal)} className="w-auto" src={config} width={20} height={30} alt="KitDoc Icon" />

          {modal ? (

            <div className="text-lg text-indigo-600 capitalize shadow-2xl absolute top-14  right-0 bg-white w-max">

              <div className="bg-indigo-400 p-12">

              </div>

              <img onClick={() => setModal(!modal)} className="w m-auto bg-white rounded-full -mt-12" src={person} width={80} height={30} alt="KitDoc Icon" />


              <div className="p-4">

                <p>{name}</p>

                <p>{email}</p>

                <p>UserId: <span className="text-black">{_id}</span></p>

                <p>Since: {createdAt}</p>

              </div>

            </div>
          ) : null}
        </div>
      </header>
    </>
  )
}
