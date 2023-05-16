import React, { useState, useEffect } from 'react'
import Bar from '../components/charts/Bar';
import clientesAxios from '../config/clientAxios';
import { toast } from 'react-toastify';

function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [price, setPrice] = useState('')
  const [tasks, setTasks] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {

      const token = localStorage.getItem('AneudyDevToken');

      const config = {
        headers: {
          authorization: `Bearer ${token}`
        }
      }

      const { data } = await clientesAxios.post('/add-client', {
        name,
        email,
        tel,
        price,
        tasks

      }, config);

      toast.success(data.msg);

      // RESET STATE

      setName('');
      setEmail('');
      setTel('');
      setPrice('');
      setTasks('');

    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  return (
    <>
      {/* <h2 className='text-center w-full mt-8 text-3xl uppercase text-amber-700 '>Manage your patients</h2> */}

      <div className='grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-4 my-4'>

        {/* Form */}

        <form onSubmit={handleSubmit} className=' w-full p-4 text-black rounded shadow shadow-white col-span-2 ' >

          <legend className='text-center text-white text-2xl font-extrabold uppercase '>Add Client</legend>

          {/* Input  */}
          <div className='flex flex-col mb-4 '>

            <label htmlFor="name" className='uppercase text-lg text-amber-400'>Name</label>

            <input
              value={name}
              placeholder='Name'
              onChange={e => setName(e.target.value)}
              className='border border-black outline-none focus:border-indigo-800 focus:shadow-lg focus:shadow-indigo-600 px-4 py-2 rounded-sm' type="text" name="name" id="name" />

          </div>

          {/* Input  */}

          <div className='flex flex-col mb-4'>

            <label htmlFor="email" className='uppercase text-lg text-amber-400'>Email</label>

            <input
              value={email}
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
              className='border border-black outline-none focus:border-indigo-800 focus:shadow-lg focus:shadow-indigo-600 px-4 py-2 rounded-sm' type="email" name="email" id="email" />

          </div>

          {/* Input  */}

          <div className='flex flex-col mb-4'>

            <label htmlFor="tel" className='uppercase text-lg text-amber-400'>Phone</label>

            <input
              value={tel}
              placeholder='809-451-1343'
              onChange={e => setTel(e.target.value)}
              className='border border-black outline-none focus:border-indigo-800 focus:shadow-lg focus:shadow-indigo-600 px-4 py-2 rounded-sm' type="tel" name="tel" id="tel" />

          </div>

          {/* Input  */}

          <div className='flex flex-col mb-4'>

            <label htmlFor="task" className='uppercase text-lg text-amber-400'>Work</label>

            <input
              value={tasks}
              placeholder='Work Done'
              onChange={e => setTasks(e.target.value)}
              className='border border-black outline-none focus:border-indigo-800 focus:shadow-lg focus:shadow-indigo-600 px-4 py-2 rounded-sm' type="text" name="task" id="task" />
          </div>

          {/* Input  */}

          <div className='flex flex-col mb-4'>

            <label htmlFor="tel" className='uppercase text-lg text-amber-400'>Price</label>

            <input
              value={price}
              min={1}
              placeholder='99 USD'
              onChange={e => setPrice(e.target.value)}
              className='border border-black outline-none focus:border-indigo-800 focus:shadow-lg focus:shadow-indigo-600 px-4 py-2 rounded-sm' type="number" name="price" id="price" />
          </div>


          {/* button  */}
          <button className='px-4 py-2 bg-indigo-700 hover:bg-indigo-900 transition-all duration-300 font-bold text-center
        text-lg text-white rounded w-1/2 mt-4 uppercase' type="submit">Add</button>

        </form>

        {/* Section */}

        <div className='p-4 w-full text-white rounded shadow shadow-white  flex flex-col justify-between col-span-3'>
          < Bar />

          <p className='mt-4 text-2xl font-bold'>Earning this week: <span className='text-amber-700 ml-4'>900 USD</span></p>

        </div>







      </div>
    </>

  )
}


export default Home