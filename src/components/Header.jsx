import React from 'react'
import { FaBars } from 'react-icons/fa'
const Header = (props) => {
  return (
    <div className='hr'>
      <div className='navbar'>
        <div className='ulqinImg'>
          <img src={process.env.PUBLIC_URL + '/images/ulqin1.png'} alt='' />
          <h1>Veranda Ulqin</h1>
        </div>
        <FaBars className='bars' />
        <div className='navItems'>
          <a onClick={props.showBallina}>Ballina</a>
          <a onClick={props.showMenu}>Menu</a>
          <a onClick={props.showLocation}>Lokacioni</a>
          <a>Kontakti</a>
        </div>
      </div>
    </div>
  )
}

export default Header
