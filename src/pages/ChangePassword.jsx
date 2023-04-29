import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'

import clientesAxios from '../config/clientAxios';
import { toast } from 'react-toastify';

function ChangePassword() {

    const { token } = useParams();
    const [valid, setValid] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const navigate = useNavigate()

    useEffect(() => {

        const changePassword = async () => {

            try {

                const { data } = await clientesAxios(`/update-password/${token}`);

                setValid(data.isValid);

                toast.success(data.msg);

                navigate('/login');

            } catch (error) {
                toast.error(error.response.data.msg);
                setValid(false)
            }
        }

        changePassword()

    }, [])

    // Request

    const handleSubmit = async e => {

        e.preventDefault();

        if (password.length < 8) {
            toast.error('the password is very short it must be 8 characters')
            return;
        }

        if (password !== repeatPassword) {
            toast.error('The password are diferent')
            return;
        }
     

        try {

            const { data } = await clientesAxios.post(`/update-password/${token}`, { password });

            toast(data.msg)

        } catch (error) {
            toast.error(error.response.data.msg);
        }
    }

    return (
        <div className='flex flex-col gap-4 justify-center h-full'>

            {valid ? (
                <form onSubmit={handleSubmit}>

                    {/* Password  */}

                    <div className='flex gap-2 flex-col mb-2'>

                        <label htmlFor="password" className='text-white'>New password</label>

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
                        className='w-1/2 px-4 py-3 rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4 text-lg'>Change</button>

                </form>
            ) : (

                <div>
                    <p className='text-center uppercase font-bold text-5xl text-indigo-600'>The token is invalid</p>
                </div>
            )}

            <nav className='flex justify-between mt-6  text-white'>
                <Link className='border-b pb-2 mr-4 border-indigo-800 hover:text-indigo-700 ' to='/login'>Log In</Link>
                <Link className='border-b pb-2 border-indigo-800 hover:text-indigo-700' to='/create' >Get a new account</Link>
            </nav>

        </div>
    )
}

export default ChangePassword