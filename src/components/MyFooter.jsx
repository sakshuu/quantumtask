import React from 'react'
import "./../assets/css/footer.css"

const MyFooter = () => {
  return <>
<div className='footer d-flex'>

  <div className='d-flex gap-2'>
<span>@2023 Dribbble</span>
<span>Terms</span>
<span>Privacy</span>
<span>Cookies</span>
  </div>

  <div className='ms-auto d-flex gap-2'>
<span>Jobs</span>
<span>Designers</span>
<span>Freelancers</span>
<span>Tages</span>
<span>Places</span>
<span>Resources</span>
<span></span>
  </div>

</div>
  </>
}

export default MyFooter