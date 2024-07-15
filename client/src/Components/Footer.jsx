import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Header_icon from '../assets/logo3.jpg'
import facebook  from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import footer from '../assets/footer.jpg'
// import clock from '../assets/clock.gif.crdownload'
function Footer() {
  return (
    <section className='footer'>

    <section className='fleft'>
      <img src={Header_icon} alt='treelogo'/>
      
      <div className='links'>
<Link to="https://github.com/viniek">
        <img src={facebook}/></Link>
      
        <Link to="https://github.com/viniek">
        <img src={instagram}/></Link>

        <Link to="https://github.com/viniek">
        <img src={twitter}/></Link>
      </div>
    </section>

    <div className='openinghrs'>
      <h1>Opening hours   
        {/* <img src={clock}/> */}
        </h1>
      <p><h3>Monday-Friday</h3><br/> <b>8:00am-5.00pm</b><br /><h3>
      Saturday  </h3><br/><b>9:00am-4:00pm</b></p>
    </div>

    <div className='fspaces'>
      <h3>Our spaces</h3>
      <p>One bedroom Apartments <br />Two bedroom Aparments <br />Three bedroom Apartments <br />Four bedroom Apartments <br />Five bedroom Apartments <br />Six bedrom Apartments</p>
      
    </div>
    </section>
  )
}

export default Footer