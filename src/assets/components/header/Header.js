import React, { useState } from 'react'
import './Header.css'
// import search_icon from '../../assets/images/search-icon.png'
import heart_icon from '../../images/heart-icon.png'
import cart_icon from '../../images/cart-icon.png'
import menu_icon from '../../images/menu-icon.png'
import close_icon from '../../images/close-icon.png'


function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const mobileNavOpen = () => {
    setMenuOpen(true);
  }

  const mobileNavClose = () => {
    if(menuOpen === 'false') {
      setMenuOpen(true);
    }
    else {
      setMenuOpen(false);
    }
    
  }

  return (
    <div className='full-header-component'>
       
            <div className={!menuOpen ? 'left-header' : 'mobile'}>
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
            <div className='mobile-header mobile'>
              <img 
                src={menu_icon} 
                alt='hamburger google icon'
                className={!menuOpen ? 'menu-icon' : 'mobile'}
                onClick={mobileNavOpen}/>
                
            </div>
            <div className={menuOpen ? 'mobile-navigation' : 'mobile'}>
              <div className='loginLogout'>
                <button placeholder="Log In"></button>
                <img 
                  src={close_icon} 
                  alt="'X' close button"
                  onClick={mobileNavClose}/>
              </div>
              
              <input type='text' placeholder='search'/>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
              </ul>
            </div>
        
    </div>
  )
}

export default Header