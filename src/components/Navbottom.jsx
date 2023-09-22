// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./../assets/css/navbar.css"

// const Navbottom = () => {
//   return <>
//   <nav class="navbar navbar-expand-sm navbar-light b-white mb-4">
//     <div class="container-fluid">
//     <Link class="navbar-brand" className='font-cursive' href="#">Dribbble</Link>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarCollapse">
//         <div class="navbar-nav">
          
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">For designers</a>
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">Hire talent</a>
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">Inspiration</a>
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">Advertising</a>
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">Blog</a>
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">About</a>
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">Careers</a>
//             <a class="nav-link active t-bold p-4" aria-current="page" href="#">Support</a>
//           {/* </li> */}
//         </div>

// <div className="navbat-nav ms-auto">
//   <span><i class="p-2 bi bi-twitter"></i></span>
//   <span><i class="p-2 bi bi-facebook"></i></span>
//   <span><i class="p-2 bi bi-instagram"></i></span>
//   <span><i class="p-2 bi bi-pinterest"></i></span>
// </div>
//       </div>
//     </div>
//   </nav>
//   </>
// }

// export default Navbottom


import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/navbar.css';

const Navbottom = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand font-cursive" to="#">
          Dribbble
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                For Designers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Hire Talent
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Inspiration
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Advertising
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active t-bold p-4" to="#">
                Support
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ms-auto">
            <span>
              <i className="p-2 bi bi-twitter"></i>
            </span>
            <span>
              <i className="p-2 bi bi-facebook"></i>
            </span>
            <span>
              <i className="p-2 bi bi-instagram"></i>
            </span>
            <span>
              <i className="p-2 bi bi-pinterest"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbottom;
