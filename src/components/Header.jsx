import React from 'react'
import '../ulqin.css'
import Navbar from './Navbar'
const Header = (props) => {
  return (
    <div>
      <Navbar data={props.data} data2={props.data2} />
      <hr />
    </div>
  )
}

export default Header
