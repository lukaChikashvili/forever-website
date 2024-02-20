
import parfume from '../assets/parfume.png';
import {motion} from 'framer-motion';

const About = () => {



  return (
    <div className='about'>
       <div className="about-container">

          <div className="text">
              <motion.span initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 1.2}}>Forever+</motion.span>
              <motion.p initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 1.6}}>Introducing "Forever," a perfume that transcends time itself, offering the unprecedented gift of eternal life. </motion.p>
              <motion.p initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 1.8}}>Encased in an elegant vessel, Forever emanates an alluring blend of rejuvenating citrus, enchanting florals, and exotic resins.</motion.p>
          </div>

   <div className='image'>
     <motion.img initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateX: -30}} transition = {{type: "spring" ,duration: 1.5, delay: 1.5}} src = {parfume} />

     <motion.p initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 1.5}} >The Fragrance of Immortality</motion.p>
   </div>
 </div>


<div className="about-2">
     <motion.span initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateX: -30}} transition = {{type: "spring" ,duration: 1.5, delay: 1.5}}>Forever</motion.span>
     <motion.h2 initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateX: -30}} transition = {{type: "spring" ,duration: 1.5, delay: 1.7}}>Discover the power of Forever, the fragrance that offers the tantalizing possibility of living forever in a single, timeless bottle.</motion.h2>
      <motion.button initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 10}} transition = {{type: "spring" ,duration: 1.5, delay: 2}} className='contact'>Contact Us</motion.button>
</div>
    </div>
  )
}

export default About