import React from 'react'
import "./../assets/css/cards.css"
import { f_card, fo_card, se_card, th_card } from '../assets/img'

const Cards = () => {
    const data =[
        {
            img:f_card
        },
        {
            img:se_card
        },
        {
            img:th_card
        },
        {
            img:fo_card
        },
    ]
  return <>
  <div className="row cards">
    <h6 className='mb-4 t-bold'>More by Pixeleton</h6>
{
   data?.map(item => <div className="col-md-3 mb-4 main-cards">
    <img src={item?.img} className='item-img' width={200} alt="" />
    <div className='card-content d-flex gap-4'>
    <p><i class="bi bi-heart"></i></p>
    <p><i class="bi bi-save"></i></p>
    </div>  
    </div>
    )
}
  </div>

<div className='d-flex gap-4 center content'>
  <span className='box'>L</span>
  <span className='box'>F</span>
  <span>Like</span>
</div>
  </>
}



export default Cards