import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import clientesAxios from '../config/clientAxios';
import { toast } from 'react-toastify';
import useAuth from '../hook/UseAuth';
import { validEmail } from "../helpers/ValidEmail";
import Spinner from '../components/Spinner';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(false);

    const navigate = useNavigate();

    const { setAuth, auth } = useAuth();

    if (auth._id) {
        navigate('/home');
    }

    const handleSubmit = async e => {

        setLoad(true)

        try {
            e.preventDefault()

            const emailValid = validEmail(email)

            if (!emailValid) {
                setLoad(false)
                toast.error('The email is invalid');
                return;
            }

            if (password.length < 8) {
                setLoad(false)
                toast.error('the password is very short it must be 8 characters');
                return;
            }
            const { data } = await clientesAxios.post('/login', { email, password })

            console.log(data)

            setAuth(data.response)

            localStorage.setItem('AneudyDevToken', data.response.token);

            navigate('/home');

            toast.success(data.msg)

        } catch (error) {
            setLoad(false)
            toast.error(error.response.data.msg);
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

                <div className='flex gap-2 flex-col mb-2'>

                    <label htmlFor="password" className='text-white'>Password</label>

                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}

                        type="password" name="password" id="password" className='w-full border rounded-sm p-2' />
                </div>

                {load ? (

                    <div className='mt-6'>
                        <Spinner />
                    </div>

                ) : (
                    <button type="submit"
                        className='w-1/2 px-4 py-3 text-lg rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4'>Log In</button>
                )}

            </form>

            <nav className='flex justify-between mt-6  text-white uppercase tracking-wider'>
                <Link className='border-b pb-2 mr-4 border-indigo-800 hover:text-indigo-700 ' to='/create'>Create Account</Link>
                <Link className='border-b pb-2 border-indigo-800 hover:text-indigo-700' to='/forgot-password'>Forgot my Password</Link>
            </nav>

        </div>

    )
}

export default Login