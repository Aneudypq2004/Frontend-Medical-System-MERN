import useAuth from "../hook/UseAuth"
import kit from '/img/kit.svg'
import menu from '/img/menu.svg'
import person from '/img/person.svg'
import config from '/img/config.svg'

import { useState } from "react"

import PersonInfo from "./PersonInfo"
import PersonConfig from "./WindowConfig"
import ModalNewPassword from "./ModalNewPassword"

export default function Header() {

  const { auth } = useAuth();
  const [windowInfo, setWindowInfo] = useState(false)
  const [windowConfig, setWindowConfig] = useState(false)
  const handleClose = () => {

  }

  return (
    <>
      <header className="uppercase h-16 bg-white border-b-2 p-2 border-neutral-400 content-center text-white flex justify-between text-lg">

        <div className="flex justify-center content-center">

          <img className="w-auto mr-4" src={kit} width={10} height={20} alt="KitDoc Icon" />

          <h1 className="text-black font-bold mt-3">Hi: <span className="text-indigo-700 font-bold "> {auth.name.split(' ')[0] || 'Doc'} </span></h1>

        </div>

        <div className="flex justify-between relative gap-4 ">

          <img onClick={() => handleClose()} className="w-auto md:invisible visible" src={menu} width={30} height={30} alt="KitDoc Icon" />
          <img onClick={() => setWindowInfo(!windowInfo)} className="w-auto  cursor-pointer" src={person} width={20} height={30} alt="KitDoc Icon" />
          <img onClick={() => setWindowConfig(!windowConfig)} className="w-auto" src={config} width={20} height={30} alt="KitDoc Icon" />

            {/* Windows  */}

          {windowInfo ? (

            <PersonInfo />

          ) : null}

          {windowConfig ? (

            <PersonConfig />

          ) : null}
        </div>
      </header>

    </>
  )
}
