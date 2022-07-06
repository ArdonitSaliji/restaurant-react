import React from 'react'
import { FaBars } from 'react-icons/fa'
const Header = (props) => {
  return (
    <div className='hr'>
      <div className='navbar'>
        <div className='ulqinImg'>
          <img src={process.env.PUBLIC_URL + '/images/ulqin1.png'} alt='' />
          <h1>Restaurant</h1>
        </div>
        <FaBars className='bars' />
        <div className='navItems'>
          <a onClick={props.showHome}>Home</a>
          <a onClick={props.showMenu}>Menu</a>
          <a onClick={props.showLocation}>Location</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header
