import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import Header_icon from '../assets/logo3.jpg'
import phone_icon from '../assets/phone.png'



function Header() {
  return (
    <header className='nav'>
        
      <div className='phoneicon'>
      {/* <p>"U+260E" +254743209259</p> */}
     
      </div>
      
 <ul className='leftnav'>
  <li><Link to='/'>Home</Link></li>
  {/* <li><Link to='Properties'>Properties</Link></li> */}
  </ul>
  <div className='logo'>
  <img src={Header_icon}alt='a cute tree '/>
  </div>
  <ul className='rightnav'>
  <li><Link to='Contact'>Contact Us</Link></li>
  <li><Link to='Aboutus'>Aboutus</Link></li>
 </ul>
    </header>
  )
}

export default Header