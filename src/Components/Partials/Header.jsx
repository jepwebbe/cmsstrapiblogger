import React from 'react'
import logo from "../../Assets/Images/copyleft.png"
import { HeaderStyle } from './Header.Styled'
const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <img src={logo}></img>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header