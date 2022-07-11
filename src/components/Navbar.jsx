import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../ulqin.css'
const Navbar = (props) => {
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
          <ul className='ul'>
            <CustomLink to='restaurant-react/'>Home</CustomLink>
            <CustomLink to='restaurant-react/menu'>Menu</CustomLink>
            <CustomLink to='restaurant-react/location'>Location</CustomLink>
            <CustomLink to='restaurant-react/contact'>Contact</CustomLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'active-li' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
