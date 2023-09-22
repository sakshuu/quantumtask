import React from 'react'
import "./../assets/css/navbar.css"
import { Link } from 'react-router-dom'

const Mynavbar = () => {
  return <>

  <nav class="navbar navbar-expand-lg b-white navbar-light">
    <div class="container-fluid">
      <Link class="navbar-brand" className='font-cursive' href="#">Dribbble</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#">Find Talent</a>
          <a class="nav-link active" href="#">Inspiration</a>
          <a class="nav-link active" href="#">Learn design</a>
          <a class="nav-link active" href="#">Jobs</a>
          <a class="nav-link active" href="#">Go Pro</a>
        </div>
        <div className=" navbar-nav ms-auto gap-2">
            <Link className='nav-link active' to="/login">
            <button type="button" class="btn btn-r px-4 btn-light">Login</button>{' '}
            </Link>
            <Link className='nav-link active' to="/signup">
            <button type="button" class="btn btn-r px-3 py-2 btn-dark">Sign Up</button>
            </Link>
        </div>
      </div>
    </div>
  </nav>

  </>
}

export default Mynavbar