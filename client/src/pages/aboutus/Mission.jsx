import React from 'react'
import './Aboutus.css'
import goal from'../../assets/goalicons.jpg'
import vision from '../../assets/visionicon.jpg'
import mission from '../../assets/missionicon.jpg'

function Mission() {
  return (
    <> 
    <section className='mission'>
        {/* Mission */}
        <div className='vision'>
        <img src={mission} alt="person" className='missionimg'/>
        <p><h2>Our Mission</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, iure est, repellat quod sapiente laborum perspiciatis natus aliquid expedita ex magnam quis illum a, magni laudantium nobis sint vitae illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. magni laudantium nobis sint vitae illo?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
        </div>
         
        {/* Vision */}
        <div className='vision'>
        <img src={vision} alt="person"/>
        <p ><h2>Our Vision</h2>
        Lorem ipsum dolor sit amet,  Architecto aperiam cumque, a sapiente saepe ab ipsam aspernatur tenetur quam delectus! Dicta, blanditiis iusto earum asperiores provident nostrum distinctio enim, iste excepturi cumque sit, quasi iure nisi optio veniam atque libero reiciendis. 
        </p>       
        </div>

        {/* Goals */}
        <div className='vision'>
        <img src={goal} alt="person"/>
        <p ><h2>Our Goals</h2>
        Lorem ipsum dolor sit amet,  Architecto aperiam cumque, a sapiente saepe ab ipsam aspernatur tenetur quam delectus! Dicta, blanditiis iusto earum asperiores provident nostrum distinctio enim, iste excepturi cumque sit, quasi iure nisi optio veniam atque libero reiciendis. 
        </p>       
        </div>
        
    </section>
    </>
  )
}

export default Mission