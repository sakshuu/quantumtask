import React from 'react'
import { Cards, Navbottom, RightStickySides } from '../components'
import "./../assets/css/home.css"
import "./../assets/css/sticky.css"
import { main_card, p_icon, pic } from '../assets/img'


const Home = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      };

    const hrStyle = {
        width: '100%', // Adjust the width of the horizontal line
        borderTop: '1px solid #000', // Change the style of the line
      };
  return <>

  <div className='d-flex'>
  <div className="container">


    <div className='main auto-center'>
        <div className='d-flex gap-2'>
<img src={pic} width={40} height={40}  className='mt-2 img-pic'  alt="" />
<div>
<span>Healthcare Tool - Patient Page</span>
<p>Sami 🏀 for Pixeleton • Follow</p>
</div>
<div className='ms-auto'>
<button type="button" class="btn btn-dark btn-r">Hire us</button>
</div>
        </div>

        <img src={main_card} className='main-card mt-4' alt="" />
        <div className='mt-4 mb-4'>
        <p className='text-f'>Patient page for a Healthcare Tool</p>
        <p className='line'></p>
        <p className='text-f'>❤️Press "L"if you like the design.</p>
        <p className='text-f t-bold'>🔥We are available for projects. You can contact us to estimate your project now.</p>
        <p className='text-f'>Email: contact@teamoreo.com</p>
        <p className='text-f'>or</p>
        <p className='text-f'>Skype: live:hireteamoreo</p>
        </div>

        <div style={containerStyle}>
{/* <hr style={hrStyle}/> */}
<div className='d-flex gap-2'>
<hr style={hrStyle} />
<img src={p_icon} width={100} className='img-r home-card-img' alt="" />
<hr  style={hrStyle}/>
</div>
<p>Pixeleton</p>
<p>Digital Design Agency - UI/UX | Illustration | Website
</p>
<button type="button" class="btn btn-dark btn-r">Hire us</button>
        </div>

    </div>
<Cards/>

  </div>

  <div className='m-2'>
  <RightStickySides/>
  </div>
  
  </div>
  <Navbottom/>
  </>
}

export default Home