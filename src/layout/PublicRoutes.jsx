import doctor from '/img/Doctor.jpg';
import { TITLE_ROUTES as PATHS } from '../helpers/Dictionary';

import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom'

function PublicRoutes() {

    const [title, setTitle] = useState('')

    const { pathname } = useLocation();

    useEffect(() => {

        switch (pathname.split('/')[1]) {

            case 'login':
                setTitle(PATHS.LOGIN)
                break;

            case 'create':
                setTitle(PATHS.CREATE)
                break;
            case 'forgot-password':
                setTitle(PATHS.FORGET)
                break;

            case 'update-password':
                setTitle(PATHS.CHANGE)
                break;

            case 'confirm':
                setTitle(PATHS.CONFIRM)
                break;
            
            default:
                break;
        }

    }, [pathname]);

    return (

        <>

            <h1 className='text-4xl text-indigo-700 uppercase  font-bold text-center my-4'>{title}</h1>

            <main className='grid lg:grid-cols-2 px-4 pb-4 gap-4'>

                <img className='w-full ' src={doctor} alt="Principal Image" width={300} height={200} />

                <Outlet />

            </main >

        </>
    )
}

export default PublicRoutes