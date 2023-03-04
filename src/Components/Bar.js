import React from "react"; 
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from "chart.js"; 

 import { Bar } from "react-chartjs-2";
ChartJS.register( 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
); 
 
export const options = { 
    responsive: true, 
    plugins: { 
        legend: { 
            position: "top" 
        }, 
        title: { 
            display: false, 
            text: "Chart.js Bar Chart" 
        } 
    } 
}; 
 
const labels = ["Tue","Wed","Thu","Fri","Sat","Sun","Mon"]; 
 
export const data = { 
    labels, 
    datasets: [ 
        { 
            label: "Visitors", 
            data: [80,89,110,73,77,123,108], 
            backgroundColor: "#ee82ee", 
            barPercentage: 0.4 
        } ,   { 
            label: "Borrowers", 
            data: [32,47,41,53,38,40,51], 
            backgroundColor: "#ffa500", 
            barPercentage: 0.4 
        } 
    ] 
}; 
 
export function BarChart() { 
    return  <Bar options={options} data={data} /> 
}