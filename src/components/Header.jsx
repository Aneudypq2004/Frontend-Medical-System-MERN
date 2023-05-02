import useAuth from "../hook/UseAuth"
import kit from '/img/kit.svg'
import menu from '/img/menu.svg'

export default function Header() {

  const { setAuth, auth } = useAuth();


  const handleClose = () => {

  }

  return (
    <>
      <header className="uppercase h-16 bg-amber-400 content-center text-white flex justify-between text-lg p-2">

        <div className="flex justify-center content-center">

          <img className="w-auto mr-4" src={kit} width={20} height={20} alt="KitDoc Icon" />

          <h1 className="text-black font-bold max-h-max">Hi: <span className="text-indigo-700 font-bold "> {auth.name.split(' ')[0] || 'Doc'} </span></h1>

        </div>

        <div className="flex justify-between ">

          <img onClick={() => handleClose()} className="w-auto" src={menu} width={30} height={30} alt="KitDoc Icon" />

        </div>


      </header>
    </>
  )
}
