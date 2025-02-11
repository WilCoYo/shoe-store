import React, { useState } from 'react'
import './Home.css'
import Header from '../../assets/components/header/Header'
import Marquee from '../../assets/components/marquee/Marquee'

import p1_img1 from '../../assets/images/product1-img.jpg'
import p1_img2 from '../../assets/images/product1-img-2.jpg'

function Home() {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Marquee />
      <Header />
      <div className='hero-section-top'>
        <div className='hero-title'>
          <h2>Step up your Stride</h2>
          <p>Premium Athletic Footwear</p>
          <button>SHOP NOW</button>
        </div>

        <div className='hero-top-product'>
          <img 
            src={isHovered ? p1_img2 : p1_img1} 
            alt='sneaker side view' 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {setIsHovered(false)}}
            />

          <div className='hero-top-product-content'>
            <ul>
              <li>Marathon<br></br>Master</li>
              <li>$140.00 <s style={{ opacity: ".5"}}>$160.00</s></li>
              <li style={{color: 'red'}}>Sale</li>
            </ul>

            <button>
              Add to Cart
            </button>

          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Home