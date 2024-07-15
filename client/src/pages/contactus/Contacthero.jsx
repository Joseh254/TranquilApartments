import React from 'react'
import './Contact.css'
import hero1 from '../../assets/hero1.jpg'
import phone from '../../assets/phoneicon.png'
import email from '../../assets/email.png'
import location from "../../assets/location.png"

function Contacthero() {
  return (
    <>
    <div className='contacthero'>
        <h2>Contact Us Today</h2>
    </div>

    <div className='contacticons'>

<p><img src={phone} alt='phone'/><br/><h2>Any Question</h2> <br />+254743209259</p>
<p><img src={email} alt="email"/> <br /><h2>Send a mail </h2><br />njerivictory52@gmail.com</p>
<p className='p3'><img src={location} alt="location"/> <br /><h2>Visit Us</h2> <br />Osman Alluh,Nyeri,Kenya,Africa</p>
    </div>
    </>
  )
}

export default Contacthero