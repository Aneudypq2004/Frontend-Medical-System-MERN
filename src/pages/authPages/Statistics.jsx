import { Line, Pie } from 'react-chartjs-2';

import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, ArcElement, Filler, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, ArcElement, Filler, Legend);

export default function Statistics() {

  const lineData = {

    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

    datasets: [{
      label: 'Money',
      data: [65, 59, 80, 81, 56, 55, 84],
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

    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

    datasets: [{
      label: 'Money',
      data: [65, 59, 80, 81, 56, 55, 100],
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
