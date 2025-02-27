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

      </div>

    </div>
  ) 
}

export default Footer