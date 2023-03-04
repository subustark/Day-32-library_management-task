
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
   
  return (
  
   
<body >
<div class="container" >
<div class="row justify-content-center">
       <div class="col-xl-10 ">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0"> 
                <div class="row justify-content-center" style={{background: "url(https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80) 100%",height: '100vh'}}>                 
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-primary mb-4">Welcome Folks</h1>
                            </div>
                            <div class="text-center">
                                <h1 class="h3 text-primary mb-4" >Library Management</h1>
                            </div>
                            <form class="user">
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-user"
                                        placeholder="Enter Your Name" style={{marginBottom:"5px"}}/>               
                                          <br></br>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control form-control-user"
                                         placeholder="Password" style={{marginBottom:"5px"}}/>
                                </div>
                               <Link  to='/portal/dashboard'>
                                <Button size='sm'variant="danger" style={{marginLeft:"10rem"}}>Login</Button>
                                </Link> 
                            </form>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</body>

)
}
    


export default Login
