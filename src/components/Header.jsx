import React from 'react'
import '../ulqin.css'
import Navbar from './Navbar'
const Header = (props) => {
  return (
    <div>
      <Navbar showMenu={props.showMenu} showLocation={props.showLocation} showBallina={props.showBallina} />
      <hr />
    </div>
  )
}

export default Header
