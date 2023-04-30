import { Link } from 'react-router-dom'

import image from '/img/404.jpg';
import useAuth from '../hook/UseAuth';

function Error404() {

  const {auth} = useAuth()

  return (

    <>
      <h1 className='text-4xl text-center text-amber-400 font-black m-6'> Upps, We have a Problem</h1>

      <div className='container flex justify-center gap-8 flex-wrap pb-4'>

        <img src={image} alt="No found Imag" width={500} height={300} />

        <div className='text-white text-2xl flex flex-col justify-center'>

          <h1 className='tracking-widest uppercase text-red-50'>This page cannot Found</h1>

          <Link to={auth._id ? "/home" : '/'} className='bg-indigo-700 hover:bg-indigo-800 w-full uppercase text-center font-bold p-4 rounded-lg mt-6'>
            Back Home</Link>

        </div>

      </div>


    </>
  )
}

export default Error404