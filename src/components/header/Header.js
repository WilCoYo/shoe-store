import React from 'react'
import './Header.css'
// import search_icon from '../../assets/images/search-icon.png'
import heart_icon from '../../assets/images/heart-icon.png'
import cart_icon from '../../assets/images/cart-icon.png'

function Header() {
  return (
    <div className='full-header-component'>
       
            <div className='left-header'>
                <h1 id='brand-name'>Shoest.</h1>
            </div>
            <div className='right-header'>
                <ul> 
                    <input type='text' placeholder='search'/>
                    <img src={heart_icon} alt='heart shaped icon'/>
                    <img src={cart_icon} alt='shopping cart shaped icon'/>
                    <button>Login</button>
                    <button>Menu</button>
                </ul>
            </div>
        
    </div>
  )
}

export default Header