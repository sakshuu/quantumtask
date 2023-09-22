import React from 'react'
import "./../assets/css/sticky.css"
import { pic } from '../assets/img'

const RightStickySides = () => {
  return <>
  <div className='rightsidesticky'>
    
<div> <img src={pic} alt="" className='img-pic mt-4' width={40} height={40}    /> </div>
<div className='icons-r center mt-3'><i class="bi bi-heart"></i></div>
<div className='icons-r center mt-3'><i class="bi bi-box-arrow-down"></i> </div>
<div className='icons-r center mt-3'><i class="bi bi-chat-text"></i> </div>
<div className='icons-r center mt-3'><i class="bi bi-upload"></i> </div>
<div className='icons-r center mt-3'> <i class="bi bi-exclamation-circle"></i></div>
    
  </div>
  </>
}

export default RightStickySides