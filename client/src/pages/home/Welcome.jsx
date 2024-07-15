import React from 'react'
import './Welcome.css'
import welcome_image from '../../assets/home_image.webp'

function Welcome() {
  return (
    <div className='welcome'>
        <img src={welcome_image} alt='image'/>
        <p className='welcome_paragraph'>
            <h2>Welcome to Tranquil Oasis Apartments</h2>
            <h1><i>Top-Tier Luxurious Estates</i></h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, odio corrupti? 
            Voluptas quam architecto placeat! Vitae dolores autem amet, enim pariatur quisquam cumque. 
            Labore corrupti laudantium beatae facere dicta molestias.

            </p>
        </p>
    </div>
  )
}

export default Welcome