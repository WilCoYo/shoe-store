import React from 'react'
import './Marquee.css'

function Marquee() {

const bannerContent = "Free Shipping on all intl. orders over $50"

  return (
    <div className='marquee-container'>
        <div className='marquee'>
            <div className='marquee-content'>
                {[...Array(8)].map((_, i) => (
                    <span key={i} className='marquee-item'>{bannerContent}</span>
                ))}
            </div>
            <div className='marquee-content'>
                {[...Array(8)].map((_, i) => (
                    <span key={i} className='marquee-item'>{bannerContent}</span>
                ))}
            </div>           
        </div>
    </div>
  )
}

export default Marquee 