import React from 'react'
import './Spaces.css'
import { Link } from 'react-router-dom'
import one_bedroom from "../../assets/one_bedroom.jpg"
import two_bedroom from "../../assets/two_bedroom.jpg"
import three_bedroom from "../../assets/three_bedroom.jpg"
import four_bedroom from "../../assets/4bedroom.webp"
import five_bedroom from "../../assets/five_bedroom.jpg"
import six_bedroom from "../../assets/six_bedroom.jpg"
import specialoffer from "../../assets/specialoffer.jpg"

function Spaces() {
  return (
    <>
    <div className='grey'>
      <div className='ourspacestext'>Available Spaces</div>
    <form className="our_Spaces_form">
          <label htmlFor="our_spaces"></label>
          <select onChange={(e) => window.location.href = 'dwelling1'}>   
            <option>one_bedroom</option>
            <option>two_bedroom</option>
            <option>three_bedroom</option>
            <option>four_bedroom</option>
            <option>five_bedroom</option>
            <option>six_bedroom</option> 
          </select>
        </form></div>
    <div className='spaces'>
        <p><h2>Find Your Dwelling</h2><i>Explore Tranquille Homes’ detailed options, choose the best fit, and step into a life of comfort."</i></p>
    


  <section className='dwelling1' id="dwelling1">
    {/* card1 */}
    <div className='dcard'alt="dining">
      <img src={three_bedroom}/>
      <h2>One Bedroom</h2>
      <p>Cozy 1 Bedroom Master En-Suite + DSQ </p>
    </div>

     {/* card2*/}
     <div className='dcard'alt="dining">
      <img src={one_bedroom}/>
      <h2>Two Bedroom</h2>
      <p>Luxurious and Trendy 2 Bedroom Master En-Suite + DSQ </p>
    </div>

       {/* card3*/}
       <div className='dcard'alt="dining">
      <img src={two_bedroom} className='bd3'/>
      <h2>Three Bedroom</h2>
      <p>Deluxe 3 Bedroom Master En-Suite + DSQ</p>
    <img src={specialoffer}alt="specialoffer"/>
    </div>
    </section>  


      <section className='dwelling2'>
    {/* card4*/}
    <div className='dcard'alt="dining">
      <img src={five_bedroom}/>
      <h2>Four Bedroom</h2>
      <p>Opulent 4 Bedroom Master En-Suite + DSQ </p>
    </div>

     {/* card5*/}
     <div className='dcard'alt="dining">
      <img src={six_bedroom}/>
      <h2>Five Bedroom</h2>
      <p>Lavish 5 Bedroom Master En-Suite + DSQ

</p>
    </div>

{/* card6*/}
<div className='dcard'alt="dining">
      <img src={five_bedroom}/>
      <h2>Six Bedroom</h2>
      <p>Palatial 6 Bedroom Master En-Suite + DSQ </p>
    </div>
       
    </section> 
    </div>
    </>
  )
}

export default Spaces