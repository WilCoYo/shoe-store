import React, { useState } from 'react'
import './Home.css'
import Header from '../../assets/components/header/Header'
import Marquee from '../../assets/components/marquee/Marquee'

import p1_img1 from '../../assets/images/product1-img.jpg'
import p1_img2 from '../../assets/images/product1-img-2.jpg'

import k_img_1 from '../../assets/images/kids-product-side.jpg'
import k_img_2 from '../../assets/images/kids-product-back.jpg'

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


      <div className='best-sellers'>
        <h3>Best Sellers</h3>

        <div className='best-seller-container'>



          <div className='product product1'>

            <div className='product-img product-img-1'>
              {/* <img src={bs_img1} /> */}
            </div>
            <div className='product-caption product1-caption'>
              <h4>Sustainable Strider</h4>
              <p>$150.00</p>
            </div>

          </div>

          <div className='product product2'>

            <div className='product-img product-img-2'>
              {/* <img src={bs_img2} /> */}
            </div>
            <div className='product-caption product2-caption'>
              <h4>Distance Elite</h4>
              <p>$140.00 <s style={{opacity: '.5'}}> $160.00</s></p>
            </div>

          </div>

          <div className='product product3'>

            <div className='product-img product-img-3'>
              {/* <img src={bs_img3} /> */}
            </div>
            <div className='product-caption product3-caption'>
              <h4>Sprint Champ</h4>
              <p>$180.00</p>
            </div>

          </div>

          <div className='product product4'>

            <div className='product-img product-img-4'>
              {/* <img src={bs_img4} /> */}
            </div>
            <div className='product-caption product4-caption'>
              <h4>Junior Sport</h4>
              <p>$72.00 <s style={{opacity: '.5'}}>$90.00</s></p>
            </div>

          </div>



        </div>
      </div>

      <div className='kids-section'>
      <div className='kids-hero-title'>
          <h2>20% Off <br></br>Kids Styles</h2>
          <p>Exclusive, one-time offer</p>
          <button>SHOP NOW</button>
        </div>

        <div className='kids-hero-top-product'>
          <img 
            src={isHovered ? k_img_2 : k_img_1} 
            alt='sneaker side view' 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {setIsHovered(false)}}
            />

          <div className='kids-hero-top-product-content'>
            <ul>
              <li>Classic<br></br>Comfort</li>
              <li>$72.00 <s style={{ opacity: ".5"}}>$90.00</s></li>
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