import React from 'react'
import { Line } from 'react-chartjs-2';

function Profits() {
    // Area DATA

    const monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const areaData = {

        labels: monthsOfYear,

        datasets: [{
            label: 'Profits',
            data: [65, 89, 80, 81, 86, 80, 89, 89, 80, 81, 86, 80],
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
        <div  className='shadow my-4 shadow-white p-4 md:col-span-4'>
            <Line data={areaData} options={options} />
        </div>
    )
}

export default Profits