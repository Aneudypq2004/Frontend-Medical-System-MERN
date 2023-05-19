import { Bar } from "react-chartjs-2"
import usePrivate from "../../hook/UsePrivate";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function ChartBar() {
    const { clients } = usePrivate();
    
    const labelClients = clients.map(client => client.name.split(' ')[0]);
    const PriceClients = clients.map(client => client.price);


    const data = {

        labels: labelClients,


        datasets: [{
            label: 'Money',
            data: PriceClients,
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
    return (
        <Bar data={data} />
    )
}

export default ChartBar