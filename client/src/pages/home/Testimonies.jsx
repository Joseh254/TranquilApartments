import React from 'react'
import './Testimonies.css'
import jonathan from "../../assets/jonathan.jpg"
import prudence from '../../assets/prudence.jpg'
import hazael from '../../assets/hazael.jpg'
import maureen from '../../assets/maureen.jpeg'

function Testimonies() {
  return (
    <>
<div className='Testimonies_intro'>
    <p className='paragraph'><h2>Client Testimonials</h2>

<i>Hear from our delighted clients! Discover their experiences and satisfactionwith our exceptional service and impressive results. </i></p>
</div>


<section className='testimonies'>
    {/* testimony1 */}
    <div className='testimony'>
<img src={jonathan}alt="muiruri"/>
<h3>Jonathan Muiruri</h3>
<p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, <br />iste?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ea.</p>
    </div>
       {/* testimony2 */}
       <div className='testimony'>
<img src={prudence}alt="shiku"/>
<p><h3>Prudence Wanjiku</h3>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,<br /> iste?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ea.</p>
    </div>

       {/* testimony3 */}
       <div className='testimony'>
<img src={hazael}alt="mungai"/>
<p><h3>Hazael Mungai</h3>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,<br />iste?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ea.</p>
    </div>

       {/* testimony4*/}
       <div className='testimony'>
<img src={maureen}alt="mumbi"/>
<p><h3>Maureen Mumbi</h3>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, <br />iste?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ea.</p>
    </div>
</section>
    </>
  )
}

export default Testimonies