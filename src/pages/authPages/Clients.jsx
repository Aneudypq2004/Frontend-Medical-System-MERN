import React, { useEffect } from 'react'

export default function Clients() {

  const number = [1, 2, 3, 4, 5, 6, 7];


  return (
    <table className='w-full text-white text-center border border-amber-400 table-fixed border-collapse my-4 '>

      <thead className='bg-amber-400 text-black'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Tel</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {number.map(n => (

          <tr key={n} className='border-b border-b-amber-400'>
            <td>Luis Aneudy</td>
            <td>dluisaneudy82@gmail.com</td>
            <td >829-451-1343</td>
            <td className='flex justify-between p-3 gap-4'>
              <button className='bg-indigo-600 hover:bg-indigo-800 text-center uppercase p-2 rounded'>Send Email</button>
              <button className='bg-red-600 hover:bg-red-800 text-center uppercase p-2 rounded'>Delete</button>
            </td>
          </tr>
        ))}

      </tbody>

    </table >
  )
}
