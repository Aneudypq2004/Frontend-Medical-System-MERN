import React, { useEffect, useState } from 'react'
import clientesAxios from '../../config/clientAxios';
import Spinner from '../../components/Spinner';
import usePrivate from '../../hook/UsePrivate';
import { toast } from 'react-toastify';

export default function Clients() {

  const { clients, setClient } = usePrivate();
  const [load, setLoad] = useState(false);

  useEffect(() => {

    const getClients = async () => {

      setLoad(true)

      const token = localStorage.getItem('AneudyDevToken');

      const config = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
      const { data } = await clientesAxios('/get-clients', config)

      setClient(data.clients);

      setLoad(false)

    }
    getClients()
  }, []);


  // Fuctions

  const handleDelete = async id => {

    try {

      const token = localStorage.getItem('AneudyDevToken');

      const config = {
        headers: {
          authorization: `Bearer ${token}`
        }

      }
      const { data } = await clientesAxios.delete(`/delete-client/${id}`, config);

      toast.success(data.msg);

      const newClients = clients.filter(client => client._id !== id);
      setClient(newClients);

    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }


  if (load) return (

    <div className="grid place-items-center h-screen">
      <Spinner />
    </div>

  )

  return (
    <table className='w-full text-white text-center border border-amber-400 table-fixed border-collapse my-4 '>

      <thead className='bg-amber-400 text-black'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th className='hidden md:block'>Tel</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {clients.map(client => (

          <tr key={client._id} className='border-b border-b-amber-400'>

            <td>{client.name}</td>
            <td>{client.email}</td>
            <td className='hidden md:block'>{client.tel}</td>

            <td className='flex justify-between p-3 gap-4'>
              <a href={`mailto:${client.email}?Your tasks is done`} className='bg-indigo-600 hover:bg-indigo-800 text-center uppercase p-2 rounded cursor-pointer'>Send Email</a>
              <button className='bg-red-600 hover:bg-red-800 text-center uppercase p-2 rounded' onClick={() => handleDelete(client._id)}>Delete</button>
            </td>
          </tr>
        ))}

      </tbody>

    </table >
  )
}
