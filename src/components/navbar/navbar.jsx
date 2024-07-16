import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/SuvidhaLogo.png'
import menuicon from '../../assets/menu-icon.png'
import {NavLink} from 'react-router-dom'

const navbar = () => {
  
  const[mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
     mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }

  const [sticky,setSticky]=useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true):setSticky(false);
    });
  },[])

  return (
    <nav className={`container ${ sticky ? 'dark-nav' : ''}`}>
       <NavLink to='/' ><img src={logo} alt='logo of suvidha' className='logo' /></NavLink> 
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><NavLink to='/events' >Events</NavLink></li>
            <li><NavLink to='/gallery' >Gallery</NavLink></li>
            <li><NavLink to='/ourdonor' >Our Donors</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/help'><button className='btn'>Help Now</button></NavLink></li>
        </ul>
        <img src={menuicon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default navbar;