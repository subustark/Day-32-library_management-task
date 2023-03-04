import axios from 'axios'
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';

function OverDue() {
const[useList,setList]=useState([]);

  useEffect(()=>{
    getUsers();
        },[]);
    
        let getUsers= async()=>{
            const users=await axios.get("https://63943a5f4df9248ead9c85a2.mockapi.io/library");
            // console.log(users.data);
            setList(users.data);
            console.log(useState)
          
        }
        const his=useNavigate();

        const handledelete=(id)=>{
          const alert=window.confirm(`DO you want to delete ${id}`)
        if(alert){
          var index=useList.map(function(el){
            return el.id
        
          }).indexOf(id);
        
          useList.splice(index,1);
        }
        his("/portal/overdue")
        }
  return (
    <>
    <h3 style={{marginTop:"10px"}}>Overdue Members list</h3>
    <Table striped bordered hover style={{marginTop:"30px"}}>
        <thead>
            <tr>
                <th style={{fontFamily: 'serif'}}>Id No</th>
                <th style={{fontFamily: 'serif'}}>Member Name</th>
                <th style={{fontFamily: 'serif'}}>Book Id</th>
                <th style={{fontFamily: 'serif'}}>Overdue</th>
                <th style={{fontFamily: 'serif'}}>Fine</th>
                <th style={{fontFamily: 'serif'}}>Actions</th>
            </tr>
            
        </thead>
        <tbody>
          {useList.map((e)=>{
            return(
              <>
              <tr>
                <td style={{color:"#03c9a9"}}>#{e.id}  </td>
                <td style={{color:"#03c9a9"}}>{e.name}</td>
                <td >{e.bookid}</td>
                <td>{e.overdue}</td>
                <td>{e.fine}</td>
                <td><Button size='sm' variant="danger" style={{margin:"2px"}} onClick={()=>handledelete(e.id)}>Delete <FontAwesomeIcon icon={faUserMinus} style={{marginLeft:"3px"}}/></Button></td>
              </tr>
              </>
            )
          })}
         
        </tbody>
    </Table>
  
    </>
  )
}

export default OverDue
