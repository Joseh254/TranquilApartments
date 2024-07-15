import React from 'react'
import './Amenities.css'
import email from '../../assets/email.png'
import smarthomes from '../../assets/smarthomes.png'
import location from '../../assets/locationgold.png'
import swimmingpool from '../../assets/swimmingpoolgold.png'
import wifi from '../../assets/wifigold.png'
import parking from '../../assets/parking.png'
import gymn from '../../assets/fitness.png'

function Amenities() {
  return (
<>
<section className='amenities'>
<h2>Enjoy our Amenities...</h2>
<section class="card-container">

    <section className="cardcontainer1">
  <div class="card">
    <img src={smarthomes}/>
    <h3>Smart homes</h3><br/>
    <p>Control your home from anywhere-Smart homes. Simpler living. </p>
    <div class="layers">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>   
    </div>
  </div> 



    
  <div class="card">
    <img src={location}/>
    <h3>Attractive Location</h3><br/>
    <p>Live it up in our prime locations. Vibrant community, stunning views, easy access to everything.</p>
    <div class="layers">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>   
    </div>
  </div> 

  <div class="card">
    <img src={swimmingpool}/>
    <h3>swimmingpool</h3><br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    <div class="layers">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>   
    </div>
  </div> 
</section>

<section className='cardcontainer2'>
      <div class="card">
    <img src={wifi}/>
    <h3>Free Wifi</h3><br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    <div class="layers">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>   
    </div>
  </div> 


  <div class="card">
    <img src={parking}/>
    <h3>Free Parking</h3><br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    <div class="layers">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>   
    </div>
  </div> 


  <div class="card">
    <img src={gymn}/>
    <h3>Fitness Center</h3><br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
    <div class="layers">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>   
    </div>
  </div> 
  </section>
</section>


    </section>
    </>
  )
}

export default Amenities