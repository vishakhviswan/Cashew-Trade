import React from 'react'

import Heart from '../../../src/assets/Heart'
import Logo from '../../../src/assets/Logo'
import './Post.css'

function Posts() {
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
       <div className="card">
         <div className="favorite">
           <Heart></Heart>
         </div>
         <div className="image">
           <img src={Logo} alt="" />
         </div>
         <div className="content">
           <p className="rate">&#x20B9; 1000</p>
           <span className="kilometer">cashews</span>
           <p className="name"> product name </p>
         </div>
         <div className="date">
           <span>25/25/25 </span>
         </div>
       </div>
       )   
           
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 350000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
