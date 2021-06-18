import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Arrow from '../../assets/Arrow'
import './Banner.css'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Wholes</span>
            <span>Pices</span>
            <span>Indian Quality</span>
            <span>Accesories</span>
            <span>Packing Metirials</span>
            <span>Machinaries</span>
            <span>Raw Cashew Nuts</span>
          </div>
        </div>
        <div className="Banner">
            <Carousel showArrows={true}>
                <div>
                    <img className="carouselImage" src="../../../images/banner1.jpg" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="carouselImage" src="../../../images/banner2.jpg" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className="carouselImage" src="../../../images/banner3.jpg" alt=""  />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
        </div>
      </div>
      
    </div>
  )
}

export default Banner
