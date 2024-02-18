import React from 'react'
import {Mouse} from 'lucide-react';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="title">
          <h1>The secret to live <span>Forever</span></h1>
      </div>

      <div className='scroll'>
         <Mouse />
         <p>Scroll to explore </p>
      </div>

    </div>
  )
}

export default Hero