import React from 'react'
import {DollarSign} from 'lucide-react';
import {motion} from 'framer-motion';


const Price = () => {
  return (
    <div className='price-container'>
     <div className="price-title">
          <motion.h2 initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 1.5}}>Choose your favorite plan to become the member of the <span>Forever+</span></motion.h2>
     </div>

     <div className="plans">
          <motion.div initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 1.5}} className="plan">
              <span>Forever free</span>
              <div className='price-tag'>
              <label>0</label>
               <DollarSign className='price-icon'/>
               </div>
            <ul>
              <li>Age Restriction </li>
              <li>Single Purchase Limit </li>
              <li>Identity Verification </li>
              <li>Non-Transferable </li>
            </ul>
               <button>Get free plan</button>
          </motion.div>


          <motion.div initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 2}} className="plan">
              <span>Forever standard</span>
              <div className='price-tag'>
              <label>150</label>
               <DollarSign className='price-icon'/>
               </div>
            <ul>
              <li>Exclusive Access </li>
              <li>Product Updates </li>
              <li>Member Discounts </li>
              <li>Early Access to Events </li>
            </ul>
               <button>Get standard plan</button>
          </motion.div>


          <motion.div initial = {{opacity: 0, translateY: 10}} whileInView = {{opacity: 1, translateY: 0}} transition = {{type: "spring" ,duration: 1.5, delay: 2.5}} className="plan">
              <span>Forever premium</span>
              <div className='price-tag'>
              <label>1500</label>
               <DollarSign className='price-icon'/>
               </div>
            <ul>
              <li>VIP Events Access </li>
              <li>Limited Edition Collectibles</li>
              <li>Customized Perfume Experience </li>
              <li>Exclusive Discounts and Offers </li>
            </ul>
               <button>Get premium plan</button>
          </motion.div>
     </div>
    </div>
  )
}

export default Price