import React from 'react'
import {Mouse} from 'lucide-react';
import rope from '../assets/rope.png';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className="title">
          <motion.h1 initial = {{opacity: 0, translateY: 10}} animate = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 1.2}}>The secret to live <span>Forever</span></motion.h1>
       
      </div>

      <motion.div className='scroll' initial = {{opacity: 0, translateY: 10}} animate = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 2}}>
         <Mouse />
         <p >Scroll to explore </p>
      </motion.div>
      <div className='rope'>
  <img src = {rope} />
  <img src = {rope} />
  <img src = {rope} />
  <img src = {rope} />
  <img src = {rope} />
  
  </div>
    </div>
  )
}

export default Hero