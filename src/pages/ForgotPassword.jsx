import {  useState } from "react";
import { Link} from "react-router-dom";

import clientesAxios from "../config/clientAxios";
import { validEmail } from "../helpers/ValidEmail";

import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function ForgotPassword() {

  const [email, setEmail] = useState('');
  const [load, setLoad] = useState(false)

  const handleSubmit = async e => {

    setLoad(true)

    try {

    e.preventDefault();

    const emailValid = validEmail(email)

    if (!emailValid) {
      setLoad(false)
      toast.error('The email is invalid');
      return;
    }

      const { data } = await clientesAxios.post('/forgot-passwod', { email });
      toast.success(data.msg);
      setEmail('')

    } catch (error) {
      setLoad(false)
      toast.error(error.response.data.msg)
    }
    setLoad(false)

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

        {load ? (
          
          <div className='mt-6'>
            <Spinner />
          </div>

        ) : (

          <button type="submit"
            className='w-1/2 px-4 py-3 text-lg rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4'>

            Send</button>
        )}

      </form>

      <nav className='flex justify-between mt-6 text-white uppercase tracking-wider'>
        <Link className='border-b pb-2 mr-4 border-indigo-800 hover:text-indigo-700 ' to='/login'>Log In</Link>
        <Link className='border-b pb-2 border-indigo-800 hover:text-indigo-700' to='/create'>No ocount ? Create one</Link>
      </nav>

    </div>
  )
}

export default ForgotPassword