import { useState } from "react";
import { Link } from "react-router-dom";

import clientesAxios from "../config/clientAxios";
import { toast } from "react-toastify";

export default function CreateAccount() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = async e => {

    e.preventDefault()

    if (password !== repeatPassword) {
      toast.error('The password are diferent')
      return;
    }

    try {

      const { data } = await clientesAxios.post('create', {
        name, email, password
      })

      toast.success(data.msg)

    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }
  return (
    <div className='flex flex-col gap-4 justify-center h-full'>

      <form onSubmit={handleSubmit}>

        {/* Name */}

        <div className='flex gap-2 flex-col mb-2'>

          <label htmlFor="name" className='text-white'>Name</label>

          <input
            value={name}
            placeholder="Your FullName"
            onChange={e => setName(e.target.value)}
            type="text" name="name" id="name" className='w-full border rounded-sm p-2' />
        </div>

        {/* //Email */}


        <div className='flex gap-2 flex-col mb-2'>

          <label htmlFor="email" className='text-white'>Email</label>

          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your Email"
            type="email" name="email" id="email" className='w-full border rounded-sm p-2' />
        </div>

        {/* Password  */}

        <div className='flex gap-2 flex-col mb-2'>

          <label htmlFor="password" className='text-white'>Password</label>

          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"

            type="password" name="password" id="password" className='w-full border rounded-sm p-2' />
        </div>

        {/* Repeat Password  */}

        <div className='flex gap-2 flex-col mb-2'>

          <label htmlFor="repeatPassword" className='text-white'>Repeat Password</label>

          <input
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            placeholder="Repeat Your Password"

            type="password" name="repeatPassword" id="repeatPassword" className='w-full border rounded-sm p-2' />
        </div>

        <button type="submit"
          className='w-1/2 px-4 py-3 rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4 text-lg'>Create it</button>

      </form>

      <nav className='flex justify-between mt-6  text-white'>
        <Link className='border-b pb-2 mr-4 border-indigo-800 hover:text-indigo-700 ' to='/login'>Do you already Have an account? Log In</Link>
        <Link className='border-b pb-2 border-indigo-800 hover:text-indigo-700' to='/forgot-password' >Forgot my Password</Link>
      </nav>

    </div>
  )
}
