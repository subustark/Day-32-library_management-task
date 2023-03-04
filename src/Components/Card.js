import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Card({title,value,color,icon,cl}) {
  return (
   <>
    <>
    <div class="col-xl-3 col-md-6 mb-4">
    <div class={`card  border-left-${color} shadow h-100 py-2`}>
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                    <div class={`text-xs font-weight-bold text-${cl} text-uppercase mb-1`}>
                       {title}</div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{value}
                    </div>
                   

                     </div>                           
                <div class="col-auto">
                    <FontAwesomeIcon icon={icon} color="#0db4b9" size="2x"/>
                </div>
            </div>
        </div>
    </div>
</div>
</>
   </>
  )
}

export default Card
