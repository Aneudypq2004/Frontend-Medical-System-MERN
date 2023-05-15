import React, { useEffect } from 'react'

export default function Clients() {

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


  return (
    <table className='w-full text-white text-center border border-amber-400 table-fixed border-collapse my-4 '>

      <thead className='bg-amber-400 text-black'>
        <tr>
          <th className='p-2'>Name</th>
          <th>Email</th>
          <th>Tel</th>
        </tr>
      </thead>

      <tbody>
        {number.map(n => (

          <tr key={n} className='border p-4'>
            <td className='p-4'>Luis Aneudy</td>
            <td>dluisaneudy82@gmail.com</td>
            <td>829-451-1343</td>
          </tr>
        ))}

      </tbody>

    </table>
  )
}
