import React from 'react'
import Card from './Card';


import { faBook,    faUserPlus, faPeopleLine, faBookOpenReader } from '@fortawesome/free-solid-svg-icons';
import Visible from '../Visible';
import { style } from '@mui/system';



function DashBoard() {
 
  return (
    <>
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 black">Dashboard</h1>
                    </div>
                    <div class="row">
                     <Card title="Borrowed"  value="120" color="success" icon={faBook} cl="warning"/>
                     <Card title="Overdue" value="21"color="success" icon={faBookOpenReader} cl="warning"/>
                     <Card title="Visitors" value="485" color="success" icon={faPeopleLine} cl="warning"/>
                     <Card title="New member" value="27"color="success" icon={faUserPlus} cl="warning"/>
                     </div>  
<Visible/>
                    
                    </>
                    
  )


  }


export default DashBoard
