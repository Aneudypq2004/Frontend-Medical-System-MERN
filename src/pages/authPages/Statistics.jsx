import { Line, Pie } from 'react-chartjs-2';
import usePrivate from '../../hook/UsePrivate';

import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, ArcElement, Filler, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, ArcElement, Filler, Legend);

export default function Statistics() {

  const { clients } = usePrivate();

  const labelClients = clients.map(client => client.name.split(' ')[0]);
  const PriceClients = clients.map(client => client.price);

  //Line Data

  const lineData = {

    labels: labelClients,

    datasets: [{
      label: 'Money',
      data: PriceClients,
      borderColor: 'rgba(255, 205, 86, 1)',
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(201, 203, 207, 1)'
      ],
    }]
  }

  // Pie data

  const PieData = {

    labels: labelClients,

    datasets: [{
      label: 'Money',
      data: PriceClients,
      borderColor: '#494490',
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(201, 203, 207, 1)'
      ],
    }]
  }



  //OPTIONS
  const options = {
    scales: {
      y: {
        grid: {
          color: '#fff'
        },
      },
      x: {
        grid: {
          color: '#fff',
        },
      },
    },
  };


  return (
    <div className='grid grid-cols-1 md:grid-cols-4  my-4 gap-y-4 md:gap-x-4'>

      <div className='shadow shadow-white p-4 col-span-2 '>
        <Line data={lineData} options={options} />

      </div>

      <div className='shadow shadow-white p-4 col-span-2' >
        <Pie data={PieData} />

      </div>



    </div>
  )
}
