// import React from 'react'
// import "./../assets/css/footer.css"

// const MyFooter = () => {
//   return <>
// <div className='footer d-flex'>

//   <div className='d-flex gap-2'>
// <span className='text-muted'>@2023 Dribbble</span>
// <span className='text-muted'>Terms</span>
// <span className='text-muted'>Privacy</span>
// <span className='text-muted'>Cookies</span>
//   </div>

//   <div className='ms-auto d-flex gap-2 '>
// <span className='text-muted'>Jobs</span>
// <span className='text-muted'>Designers</span>
// <span className='text-muted'>Freelancers</span>
// <span className='text-muted'>Tages</span>
// <span className='text-muted'>Places</span>
// <span className='text-muted'>Resources</span>
// <span className='text-muted'></span>
//   </div>

// </div>
//   </>
// }

// export default MyFooter


import React from 'react';
import './../assets/css/footer.css';

const MyFooter = () => {
  return (
    <div className='footer d-flex flex-column flex-md-row justify-content-center justify-content-md-between'>
      <div className='d-flex flex-column flex-md-row gap-2'>
        <span className='text-muted'>@2023 Dribbble</span>
        <span className='text-muted'>Terms</span>
        <span className='text-muted'>Privacy</span>
        <span className='text-muted'>Cookies</span>
      </div>

      <div className='mt-3 mt-md-0 d-flex flex-column flex-md-row gap-2'>
        <span className='text-muted'>Jobs</span>
        <span className='text-muted'>Designers</span>
        <span className='text-muted'>Freelancers</span>
        <span className='text-muted'>Tags</span>
        <span className='text-muted'>Places</span>
        <span className='text-muted'>Resources</span>
      </div>
    </div>
  );
};

export default MyFooter;
