import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import '../ulqin.css'
const Header = (props) => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className='hr'>
      <div className='navbar'>
        <div className='ulqinImg'>
          <img src={process.env.PUBLIC_URL + '/images/ulqin1.png'} alt='' />
          <h1>Restaurant</h1>
        </div>
        <FaBars className={sidebar ? 'bars active' : 'bars'} onClick={showSidebar} />
        <div className={sidebar ? 'navItems active' : 'navItems'}>
          <a href='#2' onClick={props.showHome}>
            Home
          </a>
          <a href='#3' onClick={props.showMenu}>
            Menu
          </a>
          <a href='#4' onClick={props.showLocation}>
            Location
          </a>
          <a href='#5'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Header
