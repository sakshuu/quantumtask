import React from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/navbar.css"

const Navbottom = () => {
  return <>
  <nav class="navbar navbar-expand-sm navbar-light b-white mb-4">
    <div class="container-fluid">
    <Link class="navbar-brand" className='font-cursive' href="#">Dribbble</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav">
          
            <a class="nav-link active" aria-current="page" href="#">For designers</a>
            <a class="nav-link active" aria-current="page" href="#">Hire talent</a>
            <a class="nav-link active" aria-current="page" href="#">Inspiration</a>
            <a class="nav-link active" aria-current="page" href="#">Advertising</a>
            <a class="nav-link active" aria-current="page" href="#">Blog</a>
            <a class="nav-link active" aria-current="page" href="#">About</a>
            <a class="nav-link active" aria-current="page" href="#">Careers</a>
            <a class="nav-link active" aria-current="page" href="#">Support</a>
          {/* </li> */}
        </div>

<div className="navbat-nav ms-auto">
  <span><i class="p-2 bi bi-twitter"></i></span>
  <span><i class="p-2 bi bi-facebook"></i></span>
  <span><i class="p-2 bi bi-instagram"></i></span>
  <span><i class="p-2 bi bi-pinterest"></i></span>
</div>
      </div>
    </div>
  </nav>
  </>
}

export default Navbottom