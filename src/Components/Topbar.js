import React from 'react'
import { Link } from 'react-router-dom'


function Topbar() {
  return (
  <>
    <nav className="navbar navbar-light " style={{backgroundColor:"orange"}}>
             <div className="container-fluid">
                <div> 
              <h3 className="mr-2 d-none d-lg-inline text-black-2000 medium d-flex-end"> SUBU E</h3>
                    <Link className="btn btn-light btn-sm" to="/" style={{marginLeft:"55rem"}}>Logout</Link>
                </div>
            </div>
        </nav>
  </>
  )
}

export default Topbar
