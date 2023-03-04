import React from 'react'
import { useFormik } from 'formik'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddMembers() {
  const[member,addMember]=useState(false);
  const his=useNavigate();
    const myformik=useFormik({
    initialValues:{
      id:"",
      name:"",
      num:"",
    
    },
    onsubmit:async(values)=>{
      try{
        addMember(true);
        await
        axios.post(`https://63943a5f4df9248ead9c85a2.mockapi.io/members`,values)

      }
      catch(error){
        console.log(error);
        addMember(false)
      }
      his('/portal/member')


    }
  })
  return (
<>
<form onsubmit={myformik.handleSubmit}>
<div className='container' style={{marginTop:"50px"}}>
  <form>
    <div className='row-mt-4' style={{margin:"15px"}}>
<div className='col-lg-4 m-auto ' style={{margin:"15px"}}>
  <label>Member Id</label>
  <input name="id" type={""} className="form-control">
    
  </input>
  <label>Member Name</label>
  <input name="name" type={"text"} className="form-control">
    
  </input>
  <label>Contact Number</label>
  <input name="num" type={"tel"} className="form-control">
    </input>
    <div className="d-sm-flex  justify-content-end mt-3">
    <submit type="submit" className="btn btn-success create-btn" >
                              <Link to={"/portal/member"} style={{color: 'white'}} activeStyle={{color: 'red'}}><a>Add member</a></Link>  
                            </submit>         
 </div>
</div>
    </div>
  </form>
</div>

</form>
</>
  )
}

export default AddMembers

