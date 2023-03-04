import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar'

function Portal() {
  return (
  <>
   <div id='wrapper'>
   <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
     
        <Topbar/>
        <div class="container-fluid">
       <Outlet></Outlet>
       </div>

    </div>
    </div>
    </div>
  </>
  )
}

export default Portal
