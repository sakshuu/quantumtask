import React from 'react'
import { google, signup } from '../assets/img'
import "./../assets/css/login_signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return <>
  <div className="row">
     <div className="col-md-4">
     <div className='video-container'>
          <video autoPlay muted loop className='login-video'>
            <source src={signup} type="video/mp4" />
          </video>
          <div className="overlay-text">
              Dribbble
            </div>
     </div>
        </div>
    <div className="col-md-8 mt-4">
        <div className='row center'>
<div className="col-md-6 signup-form">


<h4 className='t-bold'>Sign in to Dribbble</h4>
                {/* <div>
                  <label for="name" class="form-label">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
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
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a password.</div>
                </div>
                <div class="mt-2">
                  <label for="cpassword" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="cpassword"
                    placeholder="Confirm Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please Recheck Your Password.
                  </div>
                </div> */}
                <button type="button" class="btn btn-r btn-dark w-100 mt-4">
                <img src={google} width={18} alt="" />  <span className='p-2'>Sign up with Google</span> 
                </button>
                <p className='text-muted t-center mt-4'>or</p>
                <button type="button" class="btn btn-light w-100 btn-r">Continue with gmail</button>
                <div className='bottem'>
                <div className='text-muted f-s t-center'>By creating an account you agree with our Terms of Service, Privacy Policy,</div>
                <div className='text-muted f-s t-center'>and our default Notification Settings.</div>
                </div>
                <p class="center mt-3 d-flex">
                  Already Have Account? <Link className='nav-link p-2' to="/login">Sign In</Link>

                </p>

                </div>
    </div>
    </div>
  </div>


  
  </>
}

export default Signup