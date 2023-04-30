import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import clientesAxios from '../config/clientAxios'
import Spinner from '../components/Spinner'

function Confirm() {

  const { token } = useParams();
  const [confirm, setConfirm] = useState(false);
  const [valid, setValid] = useState(true)

  useEffect(() => {

    const confirmUser = async () => {
      try {

        const { data } = await clientesAxios(`/confirm/${token}`);
        toast.success(data.msg)
        setConfirm(true)

      } catch (error) {
        setValid(false)
        toast.error(error.response?.data.msg)
      }

    }

    confirmUser()

  }, [])

  return (
    <>
      <div className='flex flex-col justify-center items-center'>

        {!confirm ? (
          <>
              {valid ? <Spinner/> :  <h4 className='text-white text-4xl font-bold uppercase '>The token is invalid</h4>}

          </>
        ) : (

          <div>

            <h4 className='text-white text-4xl font-bold uppercase '>Your account has been confirmed</h4>

          </div >
        )
        }

        <Link to="/" className='bg-indigo-700 mt-8 text-white hover:bg-indigo-800 w-10/12 h-max uppercase text-lg text-center font-bold p-4 rounded-lg'>
          Go Home</Link>
      </div >
    </>


  )
}

export default Confirm