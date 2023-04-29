import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import clientesAxios from "../config/clientAxios";
import { toast } from "react-toastify";


function ForgotPassword() {

  const [email, setEmail] = useState('');

  const handleSubmit = async e => {

    e.preventDefault();

    try {

      const { data } = await clientesAxios.post('/forgot-passwod', { email });
      toast.success(data.msg);

    } catch (error) {
      toast.error(error.response.data.msg)
    }


  }
  return (
    <div className='flex flex-col gap-4 justify-center h-full'>

      <form onSubmit={handleSubmit}>

        <div className='flex gap-2 flex-col mb-2'>

          <label htmlFor="email" className='text-white'>Email</label>

          <input

            value={email}

            onChange={e => setEmail(e.target.value)}

            type="email" name="email" id="email" className='w-full border rounded-sm p-2' />

        </div>



        <button type="submit"
          className='w-1/2 px-4 py-3 text-lg rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4'>

          Send</button>

      </form>

      <nav className='flex justify-between mt-6  text-white'>
        <Link className='border-b pb-2 mr-4 border-indigo-800 hover:text-indigo-700 ' to='/login'>Log In</Link>
        <Link className='border-b pb-2 border-indigo-800 hover:text-indigo-700' to='/create'>No ocount ? Create one</Link>
      </nav>

    </div>
  )
}

export default ForgotPassword