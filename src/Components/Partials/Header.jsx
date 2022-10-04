import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assets/Images/copyleft.png"
import { HeaderStyle } from './Header.Styled'
const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <Link to="/"><img src={logo}/></Link>
        <ul>
          <li><Link to="/" >Hjem</Link></li>
          <li><Link to="bloglist" >Blog</Link></li>
          <li><Link to="about" >Om</Link></li>
          <li><Link to="contact" >Kontakt</Link></li>
        </ul>
      </nav>
    </HeaderStyle>
  )
}

export default Header