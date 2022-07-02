import React from 'react'
const Navbar = (props) => {
  return (
    <div>
      <div className='navbar'>
        <div className='ulqinImg'>
          <img src='images/ulqin1.png' alt='' />
          <h1>Veranda Ulqin</h1>
        </div>
        <i className='fa-solid fa-bars'></i>
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

export default Navbar
