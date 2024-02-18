import React from 'react'
import parfume from '../assets/parfume.png';

const About = () => {
  return (
    <div className='about'>
       <div className="about-container">

          <div className="text">
              <span>Forever+</span>
              <p>Introducing "Forever," a perfume that transcends time itself, offering the unprecedented gift of eternal life. </p>
              <p>Encased in an elegant vessel, Forever emanates an alluring blend of rejuvenating citrus, enchanting florals, and exotic resins.</p>
          </div>

   <div className='image'>
     <img src = {parfume} />

     <p >The Fragrance of Immortality</p>
   </div>
 </div>
    </div>
  )
}

export default About