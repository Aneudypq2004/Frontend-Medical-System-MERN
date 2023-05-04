import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import clientesAxios from '../config/clientAxios';
import { toast } from 'react-toastify';
import usePrivate from '../hook/UsePrivate';
import x from '/img/delete.svg'


function ModalNewPassword() {

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [load, setLoad] = useState(false)
  const { setModalPassword} = usePrivate()

  // Request

  const handleSubmit = async e => {

    setLoad(true);

    try {
      e.preventDefault();

      const token = localStorage.getItem('AneudyDevToken');

      if (!token) {
        setLoad(false)
        return
      }

      if (password.length < 8) {
        setLoad(false)
        toast.error('the password is very short it must be 8 characters');
        return;
      }

      if (password !== repeatPassword) {
        setLoad(false)
        toast.error('The password are diferent')
        return;
      }

      const config = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientesAxios.put('/edit-profile', { password }, config);
 
      setModalPassword(false)

      toast.success(data?.msg);

    } catch (error) {
      setLoad(false)
      toast.error(error.response.data.msg);
    }

    setLoad(false)
  }

  const handleCloseModal = (e) => {

    if (e.target.className.includes('isModal')) {

      setModalPassword(false)

    }

  }

  return (
    <section style={{backgroundColor : 'rgba( 0, 0, 0  , .9)'}} onClick={handleCloseModal} className='isModal  min-w-full h-full absolute top-0 bottom-0 right-0 left-0 z-50'>

      <form onSubmit={handleSubmit} className='bg-white rounded-lg shadow-2xl w-full md:w-1/2 m-auto z-50 p-4 translate-y-1/2'>

        <div>
          <img width={35} height={20} className='absolute cursor-pointer' src={x} onClick={() => setModalPassword(false)} />
          <h1 className='text-indigo-600 text-center text-2xl uppercase font-extrabold'>Change your password</h1>

        </div>


        {/* Password  */}

        <div className='flex gap-2 flex-col mb-2'>

          <label htmlFor="password" className='text-white'>New password</label>

          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete='true'

            type="password" name="password" id="password" className='w-full border border-black rounded-sm p-2' />
        </div>

        {/* Repeat Password  */}

        <div className='flex gap-2 flex-col mb-2'>

          <label htmlFor="repeatPassword" className='text-white'>Repeat Password</label>

          <input
            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
            placeholder="Repeat Your Password"
            autoComplete='true'

            type="password" name="repeatPassword" id="repeatPassword" className='w-full border-black border rounded-sm p-2' />
        </div>

        {load ? (

          <div className='mt-6'>
            <Spinner />
          </div>

        ) : (
          <button type="submit"
            className='w-1/2 px-4 py-3 rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4 text-lg'>Change</button>

        )}

      </form>
    </section>
  )
}

export default ModalNewPassword