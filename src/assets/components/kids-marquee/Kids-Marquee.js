import React from 'react'
import './Kids-Marquee.css'


function KidsMarquee() {

const bannerContent = "NEW ENERGY, SAME HIGH QUALITY ✱"

  return (
    <div className='kids-marquee-container'>
        <div className='kids-marquee'>
            <div className='kids-marquee-content'>
                {[...Array(8)].map((_, i) => (
                    <span key={i} className='kids-marquee-item'>{bannerContent}</span>
                ))}
            </div>
            <div className='kids-marquee-content'>
                {[...Array(8)].map((_, i) => (
                    <span key={i} className='kids-marquee-item'>{bannerContent}</span>
                ))}
            </div>           
        </div>
    </div>
  )
}

export default KidsMarquee 