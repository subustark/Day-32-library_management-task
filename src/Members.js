import React from 'react'
import { Table } from 'react-bootstrap'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
function Members() {
  const pageSize=10;

     const[useposts,setPosts]=useState([]);
     const[paginatedpost,setPaginated]=useState([]);
     const[currentPage,setCurrentpage]=useState(1);

    useEffect(()=>{
        getMembers();

    },[]);
    let getMembers=async()=>{
        const members=await axios.get("https://63943a5f4df9248ead9c85a2.mockapi.io/members");
         console.log(  members.data);
        setPosts(members.data);
        setPaginated(_(members.data).slice(0).take(pageSize).value());
        
       
    }
const pagecount=useposts ? Math.ceil(useposts.length/pageSize) :0;
if(pagecount ===1)return null;
const pages= _.range(1,pagecount+1);
const pagination=(pageno)=>{
    setCurrentpage(pageno);
    const startIndex=(pageno-1)* pageSize;
    const paginatedpost=_(useposts).slice(startIndex).take(pageSize).value();
    setPaginated(paginatedpost);
}
  return <>
   <div className="btn mt-2">
           <Link to="/portal/add">
           <Button variant="primary"style={{marginLeft:"55rem"}}>
           Add  Member
         </Button></Link></div>
       

    { !useposts ?("No data found"):(
          
    <Table table dark hover style={{marginTop:"30px"}}>
        <thead>
            <tr>
                <th style={{fontFamily: 'serif'}}>Id No</th>
                <th style={{fontFamily: 'serif'}}>Member Name</th>
                <th style={{fontFamily: 'serif'}}> Borrowed Book Id</th>
                <th style={{fontFamily:'sans-serif'}}>Contact number</th>
              
            </tr>
            
        </thead>
        <tbody>
            
    {paginatedpost.map((e)=>{
                return(
            <>
            <tr>
                <td>#{e.id}</td>
                <td>{e.name}</td>
                <td>{e.bookid}</td>
                <td>{e.num}</td>
               
            </tr>
            </>
                )
    })}
 

        </tbody>
        </Table>
    )}
        <nav className='d-flex justify-content-center'>
            <ul className='pagination'>
                {
                
                    pages.map((page)=>{
                        return  <li className={
                            page === currentPage ? "page-item active" :"page-item"
                        }>
                         <p className='page-link' 
                         onClick={()=>pagination(page)}> {page}</p>  
                         </li> 
})
                }
             
            </ul>
        </nav>
      
            
        
            
</>
  
    
  
}

export default Members
