import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'

import clientesAxios from '../config/clientAxios';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';

function ChangePassword() {

    const { token } = useParams();
    const [valid, setValid] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [load, setLoad] = useState(false);

    const navigate = useNavigate()

    // check if token is valid

    useEffect(() => {

        const changePassword = async () => {

            setLoad(true)

            try {

                const { data } = await clientesAxios(`/update-password/${token}`);

                setValid(data.isValid);

                toast.success(data.msg);


            } catch (error) {
                setLoad(false)
                setValid(false)
                toast.error(error.response.data.msg);
            }

            setLoad(false)
        }

        changePassword()

    }, [])

    // Request

    const handleSubmit = async e => {

        setLoad(true);

        try {
            e.preventDefault();

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

            const { data } = await clientesAxios.post(`/update-password/${token}`, { password });

            toast.success(data.msg)

            navigate('/login')

        } catch (error) {
            setLoad(false)
            toast.error(error.response.data.msg);
        }

        setLoad(false)
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

                    {load ? (

                        <div className='mt-6'>
                            <Spinner />
                        </div>

                    ) : (
                        <button type="submit"
                            className='w-1/2 px-4 py-3 rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4 text-lg'>Change</button>

                    )}

                </form>

            ) : (
                <>
                    {load ? <Spinner />

                        : <p className='text-center uppercase font-bold text-5xl text-indigo-600'>The token is invalid</p>}
                </>
            )}

            <nav className='flex justify-between mt-6 text-white uppercase tracking-wider'>
                <Link className='border-b pb-2 mr-4 border-indigo-800 hover:text-indigo-700 ' to='/login'>Log In</Link>
                <Link className='border-b pb-2 border-indigo-800 hover:text-indigo-700' to='/create' >Get a new account</Link>
            </nav>

        </div>
    )
}

export default ChangePassword