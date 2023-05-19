import useAuth from "../hook/UseAuth"
import kit from '/img/kit.svg'
import menu from '/img/menu.svg'
import person from '/img/person.svg'
import config from '/img/config.svg'

import PersonInfo from "./PersonInfo"
import PersonConfig from "./WindowConfig"
import usePrivate from "../hook/UsePrivate"
import { Link } from "react-router-dom"

export default function Header() {

  const { auth } = useAuth();
  const { sidebarOpen, windowConfig, windowInfo, setWindowConfig, setWindowInfo } = usePrivate();


  // Open windows logic

  const handleOpenInfo = () => {

    setWindowConfig(false)
    setWindowInfo(!windowInfo)

  }

  const handleOpenConfig = () => {

    setWindowInfo(false)
    setWindowConfig(!windowConfig)
  }

  return (
    <>
      <header className="uppercase sticky  h-16 top-0  left-0 bottom-0 right-0 bg-gray-300 border-b-2 p-2 border-neutral-400 content-center text-white flex justify-between text-lg">


        <Link  to={'/home'} className="flex justify-center content-center max-w-max">

            <img className="mr-4" src={kit} width={50} height={20} alt="KitDoc Icon" />

            <h1 className="text-black font-bold mt-3">Hi: <span className="text-indigo-700 font-bold "> {auth?.name?.split(' ')[0] || 'Doc'} </span></h1>

          </Link>

        <div className="flex justify-between relative gap-4 ">

          <img onClick={sidebarOpen} className="w-auto md:invisible  visible" src={menu} width={30} height={30} alt="KitDoc Icon" />

          <img onClick={handleOpenInfo} className="w-auto  cursor-pointer" src={person} width={20} height={30} alt="KitDoc Icon" />

          <img onClick={handleOpenConfig} className="w-auto" src={config} width={20} height={30} alt="KitDoc Icon" />

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
