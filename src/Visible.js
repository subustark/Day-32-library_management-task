import React from 'react'
import { BarChart } from './Components/Bar'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,

  ArcElement,
} from 'chart.js';
ChartJS.register(
  ArcElement,
 
);


function Visible() {
  return (
<div className='row'>
                     <div class="col-xl-8 col-lg-7">
                     <h4>Visitors & Borrowers Statistics</h4>
                        <div class="card shadow mb-4">
                       
                        <div class="card-body">
                          
                                    <div class="chart-area">

                                   <BarChart/>
                                        </div>
                            </div>
                            </div>

</div>

<div className='col-lg-4'>
  <h4>Visitors By Gender</h4>
                      <div class="card shadow mb-4">
              
                      <Doughnut data={{
                                   labels: ["Female","Male"],
                                   datasets: [
                                       {
                                           label: " ",
                                           data: [20,40],
                                           backgroundColor: [
                                               "#ff6347",
                                               "#0000ff",
                                           ],
                                          
                                           borderwidth: 500,
                                           cutout: "65%"
                                       }
                                   ]
                              }}/>
                            </div>
                            </div>
                        </div>
  )
}

export default Visible
