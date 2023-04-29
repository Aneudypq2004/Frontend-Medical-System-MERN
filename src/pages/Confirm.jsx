import React from 'react'

import { Link, useParams } from 'react-router-dom'

function Confirm() {

  const { token } = useParams()

  return (
    <>

      <div className='flex flex-col justify-center'>

        <Link to="/" className='bg-indigo-700 text-white hover:bg-indigo-800 w-full h-max uppercase text-lg text-center font-bold p-4 rounded-lg mt-6'>
          Back Home</Link>

      </div >

    </>


  )
}

export default Confirm