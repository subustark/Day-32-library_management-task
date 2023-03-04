import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Books.css";
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
function ViewBooks() {
  const[books,setBooks]=useState([]);
  useEffect(()=>{
    getBooks();
  },[]);
  let getBooks=async()=>{
    const books=await axios.get("https://63943a5f4df9248ead9c85a2.mockapi.io/books")
    console.log(books.data);
    setBooks(books.data);
  }

  const DeleteUser=(id)=>{
    const confirm=window.confirm("Do you want to delte this book ?");
    if (confirm){
      axios.delete(`https://63943a5f4df9248ead9c85a2.mockapi.io/books/${id}`)
      getBooks();
    }
  }
  return (

<div>
    
      <div className="container my-3">
        <div className="header d-flex my-3 ">
          <h1 className='head'>Books Details</h1>
          <div className="btn mt-2">
            <Link to='/addbook'>
            <Button variant="text"style={{marginLeft:"35rem"}}>
            Add  Book
          </Button></Link></div>
        </div>
        <div className="row my-4 d-flex">
          {books.map((e) => (
            <div className="card m-2" style={{ width: "18rem" }} >
              <div className="card-img mt-2">
                <img
                  src={e.img}
                  className="card-img-top image-card "
                  alt={e.name}
                />
              </div>

              <div className="card-body">
                <div className="card-content">
                  <div className="card-body  ">
                    <div className="card-content1">
                      <p className="card-text p-1">
                        <b>Book Name:</b> {e.name}
                      </p>
                      <p className="card-text p-1">
                        <b>Author Name:</b> {e.author}
                      </p>
                      <p className="card-text ">
                        <b>Book ID:</b> {e.bookid}
                      </p>
                    </div>
                    <div className="mt-1">
                      <div className="button1 d-flex">
                     

                        <IconButton color='error'
                           onClick={() => DeleteUser(e.id)}
                        >
                       
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>

 
  )
}





export default ViewBooks