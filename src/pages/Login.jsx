import React from 'react'
import { google, login } from '../assets/img'
import "./../assets/css/login_signup.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return <>
<div>

  <div className="row">
     <div className="col-md-4">
     <div className='video-container'>
          <video autoPlay muted loop className='login-video'>
            <source src={login} type="video/mp4" />
          </video>
          <div className="overlay-text">
              Dribbble
            </div>
     </div>
        </div>
    <div className="col-md-8">
        {/* <div class="container"> */}
              {/* <div class="row"> */}
                <div class="col-sm-6 offset-sm-3 login-form">
                  {/* <div class="card"> */}
                    {/* <div class="card-header">Login</div> */}
                    {/* <div class="card-body"> */}
                    <h4 className='mt-4 '>Sign in to Dribbble</h4>
                    <button type="button" class="btn mt-4 btn-r btn-light w-100 mt-3">
                     <img src={google} alt="" width={18} />  <span className='p-2'>Sign in with Google</span> 
                      </button>
                      <p className='text-muted t-center mt-4'>or sign with email</p>
                      <div>
                        <label for="email" class="form-label">First Email</label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                      <div class="mt-2">
                        <label for="password" class="form-label">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Enter Your Password"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                      <button type="button" class="btn btn-dark btn-r w-100 mt-3">
                        Sign In
                      </button>
                      <p class="center mt-3 d-flex">
                        Dont Have Account? <Link className='nav-link p-2' to="/signup"> Sign Up</Link>
                      </p>
                    {/* </div>
                  </div>
                </div>
              </div> */}
            </div>
    </div>
  </div>
</div>
  </>
}

export default Login