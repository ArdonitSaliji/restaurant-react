import React from 'react'
import NavItems from './NavItems'
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='ulqinImg'>
          <img src='images/ulqin1.png' alt='' />
          <h1>Veranda Ulqin</h1>
        </div>
        <NavItems />
      </div>
    </div>
  )
}

export default Navbar
