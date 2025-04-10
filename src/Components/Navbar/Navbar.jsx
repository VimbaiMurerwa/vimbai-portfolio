
import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'


const Navbar = () => { 

  const [menu,setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  
  return (
    <div className="navbar">
      <img src={logo} alt="" className= "nav-logo"/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
     
        <ul ref={menuRef}  className="nav-menu">
          <img src={menu_close} onClick={closeMenu}alt="" className="nav-mob-close" />
            <li><AnchorLink className="anchor-link"  href="#home">Home</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about">About Me</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#services">Services</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#projects">Projects</AnchorLink></li>
            <li><AnchorLink className="anchor-link" offset={50} href="#contact">Contact</AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>

    </div>
  )
}

export default Navbar