import React from 'react'
import { Line } from 'react-chartjs-2';
import usePrivate from '../../hook/UsePrivate';

function Profits() {

    const { clients } = usePrivate();

    const labelClients = clients.map(client => client.name.split(' ')[0]);
    const PriceClients = clients.map(client => client.price);

    // Area DATA

    const areaData = {

        labels: labelClients,

        datasets: [{
            label: 'Profits',
            data: PriceClients,
            fill: true,
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
    // OPTIONS

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
        <div className='shadow my-4 shadow-white p-4 md:col-span-4'>
            <Line data={areaData} options={options} />
        </div>
    )
}

export default Profits