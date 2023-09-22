import React from 'react'
import { signup } from '../assets/img'
import "./../assets/css/login_signup.css"

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
<div className="col-md-6">


<h4 className='t-bold'>Sign in to Dribbble</h4>
                <div>
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
                </div>
                <button type="button" class="btn btn-primary w-100 mt-3">
                  Signup
                </button>
                <p class="text-center mt-3">
                  Already Have Account? <a href="#">Login</a>
                </p>

                </div>
    </div>
    </div>
  </div>


  
  </>
}

export default Signup