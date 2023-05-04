import { useState } from 'react'
import Spinner from './Spinner';
import clientesAxios from '../config/clientAxios';
import { toast } from 'react-toastify';
import usePrivate from '../hook/UsePrivate';
import useAuth from '../hook/UseAuth';
import x from '/img/delete.svg'

function ModalNewName() {

    const [load, setLoad] = useState(false)
    const { setModalName } = usePrivate()
    const { auth, setAuth} = useAuth()
    const [name, setName] = useState(auth.name ?? '');
    const [email, setEmail] = useState(auth.email ?? '')


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

            if (name.length == '') {
                setLoad(false)
                toast.error('The field is required');
                return;
            }

            const config = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }

            const { data } = await clientesAxios.put('/edit-profile', { name }, config);

            setAuth({...auth, name})     

            setModalName(false)

            toast.success(data?.msg);

        } catch (error) {
            setLoad(false)
            toast.error(error.response.data.msg);
        }

        setLoad(false)
    }

    //Close Modal

    const handleCloseModal = (e) => {

        if (e.target.className.includes('isModal')) {

            setModalName(false)

        }

    }
    return (
        <section style={{ backgroundColor: 'rgba( 0, 0, 0  , .9)' }} onClick={handleCloseModal} className='isModal  min-w-full h-full absolute top-0 bottom-0 right-0 left-0 z-50'>

            <form onSubmit={handleSubmit} className='bg-white translate-y-1/2 rounded shadow-2xl w-full md:w-1/2 m-auto z-50 p-4 '>

                <div>
                    <img width={35} height={20} className='absolute cursor-pointer' src={x} onClick={() => setModalName(false)} />
                    <h1 className='text-indigo-600 text-center text-2xl uppercase font-extrabold'>Change your Name</h1>

                </div>

                {/* email */}

                <div className='flex gap-1 flex-col my-2'>

                    <label htmlFor="email" className='text-amber-400 text-lg'>User Email</label>

                    <input
                        value={email}
                        disabled
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email" name="email" id="email" className='w-full border border-black rounded p-2 disabled:cursor-not-allowed' />
                </div>

                {/* name  */}

                <div className='flex gap-1 flex-col mb-2'>

                    <label htmlFor="name" className='text-amber-400 text-lg'>New Name</label>

                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your New Name"

                        type="text" name="password" id="name" className='w-full border border-black rounded p-2' />
                </div>

                {load ? (

                    <div className='mt-6'>
                        <Spinner />
                    </div>

                ) : (
                    <div className='flex gap-2'>
                        <button type="submit"
                            className='w-1/2 px-4 py-3 rounded-sm font-bold bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white mt-4 text-lg'>Change</button>
                        <button 
                            onClick={() => setModalName(false)}
                            className='w-1/2 px-4 py-3 rounded-sm font-bold bg-red-600 hover:bg-red-800 transition-all duration-700 text-white mt-4 text-lg'>Cancel</button>
                    </div>

                )}

            </form>
        </section>
    )
}

export default ModalNewName