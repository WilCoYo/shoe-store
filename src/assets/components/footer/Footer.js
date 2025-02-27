import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <h3 className='footer-left'>Shoest</h3>

      <div className='footer-right'>

        <div className='email-updates-form'>
          <h4>Stay updated, sign up to receive exclusive updates and offers</h4>
          <p>EMAIL*</p>
          <input 
            type='text'
            className='email-input'
          />

          <div className='checkbox-submit'>
            <div className='checkbox-container'>
            <input
              type='checkbox'
              className='subscribe-checkbox'
            />
            <span>Yes, subscribe me to your newsletter *</span>
            </div>
            <button>SUBMIT</button>
          </div>

        </div>
        
        <div className='footer-grid-container'>
          <h5>CONTACT</h5>
          <h5>LEGAL</h5>
          <h5>SHOP</h5>

          <button>info@shoest.com</button>
          <button>Terms & Conditions</button>
          <button>All Products</button>

          <button>123-456-7890</button>
          <button>Privacy Policy</button>
          <button>Best Sellers</button>

          <button>500 Terry Francine St. SA, CA 19415</button>
          <button>Shipping Policy</button>
          <button>Performance Series</button>

          <h5>SOCIAL MEDIA</h5>
          <button>Refund Policy</button>
          <button>Limited Edition</button>

          <div className='socials'>
          <button>IG</button>
          <button>FB</button>
          <button>TKTK</button>
          </div>
          <button>Accessibility Statement</button>
          <button>Kids Collection</button>

        </div>

        

      </div>

    </div>
  ) 
}

export default Footer