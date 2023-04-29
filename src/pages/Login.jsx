import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import clientesAxios from '../config/clientAxios';
import { toast } from 'react-toastify';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()


    const handleSubmit = async e => {

        try {
            e.preventDefault()

            if (password.length < 8) {
                toast.error('the password is very short it must be 8 characters')
                return;
            }
            const { data } = await clientesAxios.post('/login', { email, password })

            toast.success(data.msg)

            await localStorage.setItem('AneudyDevToken', data.response.token);

            navigate('/home');


        } catch (error) {
            toast.error(error.response.data.msg);
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

                <div className='flex gap-2 flex-col mb-2'>

                    <label htmlFor="password" className='text-white'>Password</label>

                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                        type="password" name="password" id="password" className='w-full border rounded-sm p-2' />
                </div>

                <button type="submit"
                    className='w-1/2 px-4 py-3 text-lg rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4'>Log In</button>

            </form>

            <nav className='flex justify-between mt-6  text-white'>
                <Link className='border-b pb-2 mr-4 border-indigo-800 hover:text-indigo-700 ' to='/create'>Create Account</Link>
                <Link className='border-b pb-2 border-indigo-800 hover:text-indigo-700' to='/forgot-password'>Forgot my Password</Link>
            </nav>

        </div>

    )
}

export default Login